import Vue from 'vue';
import { getClassifyData ,getGoodsData } from "../../../api/goods/index"

export default{
    namespaced:true,
    state:{
        classifys:[],
        goods:[],
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
                    if(payload.success){
                        payload.success();
                    }
                }
            })
        },
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
        }
    }

}