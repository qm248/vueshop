import { getHotKeywordData }from '../../../api/search'

export default {
    namespaced:true,
    state:{
        historyKeywords:localStorage['historyKeywords']?JSON.parse(localStorage['historyKeywords']):[],
        hotkeywords:[],
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
        }
    },
    actions:{
        getHotKeywords(conText,payload){
            getHotKeywordData().then(res=>{
                if(res.code==200){
                    conText.commit('SET_HOTKEYWORDS',{hotkeywords:res.data})
                }
                
            })
        }

    }
    
}