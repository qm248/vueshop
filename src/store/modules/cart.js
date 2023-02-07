import {INC_COUNT,DEC_COUNT} from './mutation-types';
export default {
    namespaced:true,
    state:{//初始化数据
        total:0
    },
    mutations:{//同步操作方法
        [INC_COUNT](state,payload){
            // console.log(payload);
            state.total = payload.total;
        },
        [DEC_COUNT](state,payload){
            // console.log(payload);
            state.total = payload.total;
        }
    },
    actions:{//异步操作，用于操作mutations里面的方法，如果mutations里面的方法操作量大最好写在actions里面。
        incTotal(conText,payload){
            // console.log(conText);
            // console.log(payload);
            conText.commit(""+INC_COUNT+"",payload);
        },
        decTotal(conText,payload){
            conText.commit(""+DEC_COUNT+"",payload);
        }
    }
}