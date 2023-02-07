import {getNavsData} from "../../../api/index";

export default {
    namespaced:true,
    state:{
        navs:[]
    },
    mutations:{
        ["SET_NAVS"](state,payload){
            state.navs=payload.navs;
            // console.log(state.navs);
        }
    },
    actions:{
        getNavs(conText){
            getNavsData().then(res=>{
                // console.log(res);
                if (res.code===200){
                    conText.commit("SET_NAVS",{navs:res.data});
                }
            })
        }
    }
}