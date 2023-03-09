import Vue from 'vue';
import { getClassifyData ,getGoodsData,getDetailsData ,getSpecData } from "../../../api/goods/index"

export default{
    namespaced:true,
    state:{
        classifys:[],
        goods:[],
        attrs:[],
        details:{},
        
    },
    mutations:{
        ['SET_CLASSIFYS'](state,payload){
            state.classifys = payload.classifys
        },
        ['SECELT_ITEM'](state,payload){
            if(state.classifys.length>0){
                for(let i =0; i<state.classifys.length;i++){
                    if(state.classifys[i].active){
                        state.classifys[i].active = false;
                        break;
                    }
                }
                state.classifys[payload.index].active = true;
                Vue.set(state.classifys,payload.index,state.classifys[payload.index])
            }
        },
        ['SET_GOODS'](state,payload){
            state.goods = payload.goods;
        },
        //选择属性
        ['SELECT_ATTR'](state,payload){
            if(state.attrs.length>0){
                for(let i=0; i<state.attrs[payload.index].values.length;i++){
                    if(state.attrs[payload.index].values[i].active){
                        state.attrs[payload.index].values[i].active=false;
                        break;
                    }
                }
                state.attrs[payload.index].values[payload.index2].active = true;
                Vue.set( state.attrs[payload.index].values[payload.index2],payload.index2,state.attrs[payload.index].values[payload.index2])
            }
        },
        ['SET_DETAILS'](state,payload){
            state.details = payload.details;
        },
        //设置商品规格
        ['SET_ATTRS'](state,payload){
            state.attrs=payload.attrs;
        }
    },
    actions:{
        getClassify(conText,payload){
            getClassifyData().then(res=>{
                if(res.code == 200){
                    for(let i=0; i<res.data.length;i++){
                        res.data[i].active=false;
                    }
                    conText.commit('SET_CLASSIFYS',{classifys:res.data})
                    if(payload && payload.success){
                        payload.success();
                    }
                }
            })
        },
        //右侧商品
        getGoods(conText,payload){
            getGoodsData(payload.cid).then(res=>{
                if(res.code == 200){
                    conText.commit('SET_GOODS',{goods:res.data});
                    if(payload.success){
                        payload.success();
                    }
                }else{
                    conText.commit('SET_GOODS',{goods:[]});
                }
            })
        },
        getDetails(conText,payload){
            getDetailsData(payload.gid).then(res=>{
                if(res.code==200){
                    conText.commit('SET_DETAILS',{details:res.data})
                }
                if(payload.success){
                    payload.success();
                }
            })
        },
        getSpec(conText,payload){
            getSpecData(payload.gid).then(res=>{
                if(res.code==200){
                    for(let i=0; i<res.data.length;i++){
                        for(let j=0; j<res.data[i].values.length;j++){
                            res.data[i].values[j].active=false;
                        }
                    }
                    conText.commit('SET_ATTRS',{attrs:res.data});
                }
            })
        },

    },


}