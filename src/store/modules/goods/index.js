import { getClassifyData } from "../../../api/goods/index"

export default{
    namespaced:true,
    state:{
        classifys:[],
    },
    mutations:{
        ['SET_CLASSIFYS'](state,payload){
            state.classifys = payload.classifys
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
        }
    }

}