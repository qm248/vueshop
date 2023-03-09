import { getReviewsData } from '../../../api/goods/review.js'

export default{
    namespaced:true,
    state:{
        reviews:[],
        total:0
    },
    mutations:{

    },
    actions:{
        getReviews(conText,payload){
            getReviewsData(payload.gid).then(res=>{
                console.log(res);
                
            })
        }
    }
}