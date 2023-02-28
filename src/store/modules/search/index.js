import Vue from "vue"
import { getHotKeywordData }from '../../../api/search'

export default {
    namespaced:true,
    state:{
        historyKeywords:localStorage['historyKeywords']?JSON.parse(localStorage['historyKeywords']):[],
        hotkeywords:[],
        priceData:{
            isHide:false,
            items:[
                {price1:1,price2:50,active:false},
                {price1:51,price2:99,active:false},
                {price1:100,price2:300,active:false},
                {price1:301,price2:1000,active:false},
                {price1:1001,price2:4000,active:false},
                {price1:4001,price2:9999,active:false}
            ]
        },
        minPrice:"",
        maxPrice:"",

    },
    mutations:{
        ['SET_KEYWORDS'](state,payload){
           state.historyKeywords=payload.historyKeywords;
            localStorage['historyKeywords']=JSON.stringify(state.historyKeywords);
        },
        ['CLEAR_KEYWORDS'](state,payload){
            state.historyKeywords = [];
            localStorage.removeItem('historyKeywords');
        },
        ['SET_HOTKEYWORDS'](state,payload){
            state.hotkeywords = payload.hotkeywords;
        },
        //隐藏价格
        ['HIDE_PRICE'](state,payload){
            state.priceData.isHide = !state.priceData.isHide;
        },
        //选择价格
        ['SELECT_PRICE'](state,payload){
            if(state.priceData.items.length>0){
                for (let i = 0; i < state.priceData.items.length; i++) {
                    if(i!==payload.index){
                        if(state.priceData.items[i].active){
                            state.priceData.items[i].active=false;
                            break;
                        }
                    }
                }
            }
            state.priceData.items[payload.index].active = !state.priceData.items[payload.index].active;
            Vue.set(state.priceData.items,payload.index,state.priceData.items[payload.index])
            state.minPrice=state.priceData.items[payload.index].price1;
            state.maxPrice=state.priceData.items[payload.index].price2;
        },
        //设置最小和最大价格
        ['SET_MINPRICE'](state,payload){
            state.minPrice = payload.minPrice;
            state.minPrice=state.minPrice.replace(/[^\d|\.]/g,'')
        },
        ['SET_MAXPRICE'](state,payload){
            state.maxPrice=payload.maxPrice;
            state.maxPrice=state.minPrice.replace(/[^\d|\.]/g,'')
        }

    },
    actions:{
        getHotKeywords(conText,payload){
            getHotKeywordData().then(res=>{
                if(res.code==200){
                    conText.commit('SET_HOTKEYWORDS',{hotkeywords:res.data})
                }
                
            })
        },
        selectClassify(conText,payload){
            if(conText.rootState.goods.classifys.length>0){
                for(let i=0; i<conText.rootState.goods.classifys.length;i++){
                    if(i !== payload.index){
                        if(conText.rootState.goods.classifys[i].active){
                            conText.rootState.goods.classifys[i].active=false;
                            break;
                        }
                    } 
                }
                conText.rootState.goods.classifys[payload.index].active=!conText.rootState.goods.classifys[payload.index].active;
                Vue.set(conText.rootState.goods.classifys,payload.index,conText.rootState.goods.classifys[payload.index])
            }
        }

    }
    
}