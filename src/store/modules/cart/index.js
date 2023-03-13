import Vue from 'vue';
export default{
    namespaced:true,
    state:{
        cartData:localStorage['cartData']?JSON.parse(localStorage['cartData']):[]
    },
    mutations:{
        //添加购物车商品
        ['ADD_ITEM'](state,payload){
            let isSame=false;
            if(state.cartData.length>0){
                for (let i = 0; i < state.cartData.length; i++) {
                    if(state.cartData[i].gid === payload.cartData.gid && JSON.stringify(state.cartData[i].attrs) === JSON.stringify(payload.cartData.attrs)){
                        isSame=true;
                        state.cartData[i].amount=parseInt(state.cartData[i].amount)+parseInt(payload.cartData.amount);
                        break;
                    }
                }
            }
            if(!isSame){
                state.cartData.push(payload.cartData);
            }
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        //delete
        ['DEL_ITEM'](state,payload){
            state.cartData.splice(payload.index,1);
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        //change数量
        ['SET_AMOUNT'](state,payload){
            state.cartData[payload.index].amount=payload.amount;
            state.cartData[payload.index].amount=parseInt(state.cartData[payload.index].amount.replace(/[^\d]/g,''));
            if(!state.cartData[payload.index].amount){
                state.cartData[payload.index].amount=1;
            }
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        // +
        ['INC_AMOUNT'](state,payload){
            state.cartData[payload.index].amount+=1;
            Vue.set(state.cartData,payload.index,state.cartData[payload.index]);
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        //-
        ['DEC_AMOUNT'](state,payload){
            state.cartData[payload.index].amount=state.cartData[payload.index].amount>1?--state.cartData[payload.index].amount:1;
            Vue.set(state.cartData,payload.index,state.cartData[payload.index]);
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        //选择商品
        ['SELECT_ITEM'](state,payload){
            state.cartData[payload.index].checked=!state.cartData[payload.index].checked;
            Vue.set(state.cartData,payload.index,state.cartData[payload.index]);
            localStorage['cartData']=JSON.stringify(state.cartData);
        },
        //全选/反选
        ['ALL_SELECT_ITEM'](state,payload){
            if(state.cartData.length>0){
                for (let i = 0; i < state.cartData.length; i++) {
                    state.cartData[i].checked=payload.checked
                }
                localStorage['cartData']=JSON.stringify(state.cartData);
            }
        }
    },
    actions:{

    },
    getters:{
        total(state){
            if(state.cartData.length>0){
                let total=0
                for (let i = 0; i < state.cartData.length; i++) {
                    if(state.cartData[i].checked){
                        total+=state.cartData[i].price*state.cartData[i].amount;
                    }
                }
                return parseFloat(total.toFixed(2));
            }else{
                return 0;
            }
        },
        //运费
        freight(state){
            if(state.cartData.length>0){
                let freights=[];
                for (let i = 0; i < state.cartData.length; i++) {
                    if(state.cartData[i].checked){
                        freights.push(state.cartData[i].freight);
                    }
                }
                return freights.length>0?Math.max.apply(null,freights):0;
            }else{
                return 0
            }
        }
    }

}