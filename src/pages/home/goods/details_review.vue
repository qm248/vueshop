<template>
    <div class="page">
        <div class="reviews-main">
            <div class="reviews-title">商品评价（{{total}}）</div>
            <div class="reviews-wrap" v-show="reviews.length>0">
                <div class="reviews-list" v-for="(item,index) in reviews" :key="index">
                    <div class="uinfo">
                        <div class="head"><img :src="item.head" alt=""></div>
                        <div class="nickname">{{item.nickname}}</div>
                    </div>
                    <div class="reviews-content">{{item.content}}</div>
                    <div class="reviews-date">{{item.date}}</div>
                </div>
            </div>
            <div class="no-data" v-show="reviews.length<=0">暂无评价！</div>
        </div>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
import UpRefresh from '../../../assets/js/libs/uprefresh';

    export default {
        name: "goods-review",
        data(){
            return{
                gid:this.$route.query.gid?this.$route.query.gid:""
            }
        },
        created(){
            this.pullUp=new UpRefresh();
            this.getReviews({gid:this.gid,success:(pageNum)=>{
                this.pullUp.init({"curPage":1,"maxPage":parseInt(pageNum),"offsetBottom":100},(page)=>{
                    this.getReviewsPage({gid:this.gid,page:page});
                });
            }});
        },
        computed:{
            ...mapState({
                reviews:(state)=>state.goodsReview.reviews,
                total:(state)=>state.goodsReview.total,
            })
        },
        methods:{
            ...mapActions({
                getReviews:"goodsReview/getReviews",
                getReviewsPage:"goodsReview/getReviewsPage",
            })
        },
        beforeDestroy() {
            this.pullUp.uneventSrcoll();
        }
    }
</script>

<style scoped>
.page{
    margin-top: 1.2rem;
}
.reviews-main{
    background: #fff;
    width: 100%;
    margin-top: 0.5rem;
    overflow: hidden;
    padding-bottom: 0.5rem;
}
.reviews-main .reviews-title{
    color: #7b7f82;
    font-size: 0.32rem;
    width: 90%;
    margin: 0 auto;
    margin-top: 0.2rem;
}
.reviews-main .reviews-wrap{
    width: 90%;
    margin: 0 auto;
}
.reviews-main .reviews-wrap .reviews-list{
    width: 100%;
    margin-top: 0.4rem;
}
.reviews-main .reviews-list .uinfo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.reviews-main .reviews-list .uinfo .head{
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.2rem;
    
}
.reviews-main .reviews-list .uinfo .head img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
.reviews-main .uinfo .nickname{
    font-size: 0.28rem;
    color: #000;
    width: auto;
    overflow: hidden;
}
.reviews-main .reviews-content{
    font-size: 0.32rem;
    width: 100%;
    margin: 0 auto;
    margin-top: 0.2rem;
}
.reviews-main .reviews-date{
    color: #969696;
    font-size: 0.28rem;
    margin-top: 0.2rem;
}

</style>