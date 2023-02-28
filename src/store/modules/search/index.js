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
                {price1:4001,price2:9999,active:false},
            ]
        }
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
        ['HIDE_PRICE'](state,payload){
            state.priceData.isHide = !state.priceData.isHide;
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