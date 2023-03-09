<template>
    <div class="page">
        <div class="swiper-wrap swiper-container" ref="swiper-wrap">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in details.images" :key="index">
                    <img alt="" :src="item"/>
                </div>
            </div>
            <div class="swiper-pagination" ref="swiper-pagination" ></div>
        </div>
        <div class="goods-ele-main">
            <div class="goods-title">{{ details.title }}</div>
            <div class="price">${{ details.price }}</div>
            <div class="sales-wrap">
                <span>快递{{details.freight}}元</span>
                <span>月销量{{details.sales}}件</span>
            </div>
        </div>
        <div class="reviews-main">
            <div class="reviews-title">商品评价（10000）</div>
            <div>
                <div class="reviews-wrap">
                    <div class="reviews-list">
                        <div class="uinfo">
                            <div class="head"><img src="//vueshop.glbuys.com/userfiles/head/128934005.jpg" alt=""></div>
                            <div class="nickname">会员名字</div>
                        </div>
                        <div class="reviews-content">dfdbhjg hfhfhhf</div>
                        <div class="reviews-date">2023-3-4</div>
                    </div>
                    <div class="reviews-list">
                        <div class="uinfo">
                            <div class="head"><img src="//vueshop.glbuys.com/userfiles/head/128934005.jpg" alt=""></div>
                            <div class="nickname">会员名字</div>
                        </div>
                        <div class="reviews-content">dfdbhjg hfhfhhf</div>
                        <div class="reviews-date">2023-3-4</div>
                    </div>
                    <div class="reviews-list">
                        <div class="uinfo">
                            <div class="head"><img src="//vueshop.glbuys.com/userfiles/head/128934005.jpg" alt=""></div>
                            <div class="nickname">会员名字</div>
                        </div>
                        <div class="reviews-content">dfdbhjg hfhfhhf</div>
                        <div class="reviews-date">2023-3-4</div>
                    </div>
                </div>
                <div class="reviews-more">查看更多评价</div>
            </div>
            <div class="no-data">暂无评价！</div>
        </div>
        <div class="bottom-btn-wrap">
            <div class="btn fav">收藏</div>
            <div class="btn cart" @click="showPanel">加入购物车</div>
        </div>
        <div class="mask" v-show="isPanel" @click="hidePanel"></div>
        <div :class="isPanel? 'cart-panel up': 'cart-panel down'" ref="cart-panel">
            <div class="goods-info" ref="goods-info">
                <div class="close-panel-wrap">
                    <div class="spot"></div>
                    <div class="line"></div>
                    <div class="close" @click="hidePanel"></div>
                </div>
                <div class="goods-img" ref="goods-img">
                    <img :src="details.images && details.images[0]" alt="">
                </div>
                <div class="goods-wrap">
                    <div class="goods-title">{{ details.title }}</div>
                    <div class="price">${{ details.price }}</div>
                    <div class="goods-code">商品编号:{{details.gid}}</div>
                </div>
            </div>  
            <div class="attr-wrap">
                <div class="attr-list" v-for="(item,index) in attrs" :key="index">
                    <div class="attr-name">{{item.title}}</div>
                    <div class="val-wrap">
                        <span @click="SELECT_ATTR({index:index,index2:index2})" :class="{val:true, active:item2.active}" v-for="(item2,index2) in item.values" :key="index2">{{ item2.value }}</span>
                    </div>
                </div>
            </div>
            <div class="amount-wrap">   
                <div class="amount-name">购买数量</div>
                <div class="amount-input-wrap">
                    <div :class="amount>1?'btn dec':'btn dec active'" @click="amount>1?amount--:1">-</div>
                    <div class="amount-input"><input type="tel" :value="amount"></div>
                    <div class="btn inc" @click="amount++">+</div>
                </div>
            </div>
            <div class="sure-btn" @click="addCart">确定</div>
        </div>
    </div>
</template>


<script>
    import Swiper from '../../../assets/js/libs/swiper.js';
    import TweenMax from '../../../assets/js/libs/TweenMax.js';
    import { mapState ,mapMutations,mapActions} from 'vuex'
    export default {
        name: "goods-item",
        data(){
            return{
                isPanel:false,
                amount:1,
                gid:this.$route.query.gid?this.$route.query.gid:""
            }
        },
        mounted(){
           
        },
        created(){
            this.isMove=true;
            this.getDetails({gid:this.gid,success:()=>{
                this.$nextTick(()=>{
                    new Swiper(this.$refs['swiper-wrap'], {
                        autoplay: 3000,
                        pagination : this.$refs['swiper-pagination'],
                        paginationClickable :true,
                        autoplayDisableOnInteraction : false
                    })
                })
            }});
            this.getSpec({gid:this.gid});
            this.getReviews({gid:this.gid});
        },
        computed:{
            ...mapState({
                attrs:(state)=>state.goods.attrs,
                details:(state)=>state.goods.details,
            })
            
        },
        methods:{
            ...mapMutations({
                SELECT_ATTR:"goods/SELECT_ATTR"
            }),
            ...mapActions({
                getDetails:"goods/getDetails",
                getSpec:"goods/getSpec",
                getReviews:"goodsReview/getReviews"
            }),
            //显示属性面板
            showPanel(){
                this.isPanel = true;
            },
            hidePanel(){
                if(this.isMove){
                    this.isPanel = false;
                }
            },
            addCart(){
                if(this.isMove){
                    this.isMove=false;
                    let goodsImg= this.$refs['goods-img'],goodsInfo=this.$refs['goods-info']
                    let cloneImg = goodsImg.cloneNode(true);
                    let cartIcon=document.getElementById('cart-icon');
                    cloneImg.style.cssText="position:absolute;z-index:10;left:0.2rem;top:0.2rem;width:0.4rem;height:0.4rem;";
                    goodsInfo.appendChild(cloneImg);
                    let cartTop=window.innerHeight-this.$refs['cart-panel'].offsetHeight;
                    TweenMax.to(cloneImg, 2, {bezier:[{x:cloneImg.offsetLeft, y:-100},{x:cartIcon.offsetLeft, y:-cartTop}],onComplete:()=>{
                        cloneImg.remove();
                        this.isMove=true;
                    }});
                    TweenMax.to(cloneImg,0.2,{rotation:360,repeat:-1});
                }
                
            }
        }
    }
</script>

<style scoped >
@import url("../../../assets/css/common/swiper.css");
.swiper-wrap{
    background-color: #fff;
    width: 100%;
    height: 7rem;
    overflow: hidden;
    position: relative;
    z-index: 1;
    margin-top: 1.2rem;
}
.swiper-wrap img{
    width: 100%;
}
.goods-ele-main{
    width: 100%;
    height: auto;
    background-color: #fff;
    margin: 0 auto;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.goods-ele-main .goods-title{
    width: 90%;
    font-style: 0.28rem;
    margin: 0 auto;
}
.goods-ele-main .price{
    width: 90%;
    font-size: 0.32rem;
    color: #f93036;
    margin: 0.2rem auto;
}
.goods-ele-main .sales-wrap{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.24rem;
    color: #969696;
}
.reviews-main{
    margin-top: 0.4rem;
    width: 100%;
    height: auto;
    background: #fff;
}
.reviews-main .reviews-title{
    color: #969696;
    font-size: 0.32rem;
    width: 90%;
    margin: 0 auto;
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
.reviews-main .reviews-more{
    width: 2.44rem;
    height: 0.56rem;
    border: solid 1px #d50a17;
    line-height: 0.56rem;
    text-align: center;
    font-size: 0.28rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    border-radius: 0.1rem;
}
.bottom-btn-wrap{
    width: 100%;
    height: 1.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
}
.bottom-btn-wrap .btn{
    width: auto;
    height: 100%;
    flex: 1;
    font-size: 0.36rem;
    color: #fff;
    text-align: center;
    line-height: 1.2rem;
}
.bottom-btn-wrap .btn.fav{background-color:#FCB40A;}
.bottom-btn-wrap .btn.cart{background-color:#CC0004;}
.mask{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 11;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.3);
}
.cart-panel{
    width: 100%;
    height: 60%;
    position: fixed;
    z-index: 12;
    left: 0;
    bottom: 0;
    background-color: #f5f5f9;
    transition: transform 0.3s;
}
.cart-panel.down{
    transform: translateY(120%);
}
.cart-panel.up{
    transform:translateY(0%);
}
.cart-panel .goods-info{
    width: 98%;
    height: 1.22rem;
    border-bottom: 1px solid #efefef;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    position: relative;
    z-index: 1;
    background-color: #fff;
}
.cart-panel .goods-info .close-panel-wrap{
    width: 0.6rem;
    height: 1.2rem;
    position: absolute;
    right: -0.2rem;
    top: -1rem;
    z-index: 2;
}
.cart-panel .close-panel-wrap .spot{
    width: 0.12rem;
    height: 0.12rem;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    background: #000;
    border-radius: 100%;
}
.cart-panel .close-panel-wrap .line{
    height: 0.72rem;
    width: 1px;
    background: #fff;
    position: absolute;
    bottom: 0.05rem;
    left: 0.05rem;
    z-index: 1;
}
.cart-panel .close-panel-wrap .close{
    width: 0.4rem;
    height: 0.4rem;
    background-image: url('../../../assets/images/home/goods/x.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    left: -0.14rem;
    top: 0.1rem;
    z-index: 1;
}
.cart-panel .goods-info .goods-img{
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.3rem;
}
.cart-panel .goods-info .goods-img img{
    width: 100%;
    height: 100%;
}
.cart-panel .goods-info .goods-wrap{
    width: 80%;
    height: auto;
}   
.cart-panel .goods-info .goods-wrap .goods-title{
    width: 100%;
    height: 0.7rem;
    font-size: 0.24rem;
    overflow: hidden;
}
.cart-panel .goods-info .goods-wrap .price{
    color: #f93036;
    font-size: 0.24rem;
}
.cart-panel .goods-info .goods-wrap .goods-code{
    color: #888;
    font-size: 0.24rem;
    position: absolute;
    right: 0.2rem;
    bottom: 0;
    z-index: 1;
}
.cart-panel .attr-wrap{
    width: auto;
    max-height: 3.5rem;
    padding-left: 0.2rem;
    background-color: #fff;
    overflow-y: scroll;
    overflow-scrolling: touch;
}
.cart-panel .attr-wrap .attr-list{
    width: 100%;
    height: auto;
    margin-top: 0.2rem;
}
.cart-panel .attr-list .attr-name{
    width: auto;
    font-size: 0.32rem;
}
.cart-panel .attr-list .val-wrap{
    width: auto;
    margin-top: 0.2rem;
    display: flex;
    flex-wrap: wrap;
}
.cart-panel .attr-list .val-wrap .val{
    background: #efefef;
    font-size: 0.32rem;
    padding: 0.1rem 0.2rem;
    border-radius: 0.1rem;
    margin-right: 0.17rem;
    display: table;
    margin-bottom: 0.17rem;
}
.cart-panel .attr-list .val-wrap .val.active{
    color: #fff;
    background-color: #fda208;
}
.cart-panel .amount-wrap{
    width: auto;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    height: 0.64rem;
    align-items: center;
    background-color: #fff;
    padding-bottom: 0.3rem;
}
.cart-panel .amount-wrap .amount-name{
    width: auto;
    font-size: 0.32rem;
}
.cart-panel .amount-wrap .amount-input-wrap{
    width: 2.04rem;
    height: 0.64rem;
    border: 1px solid #000;
    margin-right: 0.2rem;
    border-radius: 0.08rem;
    display: flex;
    align-items: center;
}
.cart-panel .amount-wrap .amount-input-wrap .btn{
    width: 0.6rem;
    height: 0.4rem;
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.4rem;
}
.cart-panel .amount-wrap .amount-input-wrap .btn.active{
    color: #b5b5b5;
}
.cart-panel .amount-wrap .amount-input-wrap .dec{
    border-right: 1px solid #000;
}
.cart-panel  .amount-input-wrap .amount-input{
    width: 0.76rem;
    height: 100%;
}
.cart-panel .amount-input-wrap .amount-input input{
    width: 100%;
    height: 95%;
    text-align: center;
}
.cart-panel .amount-input-wrap .inc{
    border-left: 1px solid #000;
}
.cart-panel .sure-btn{
    width: 100%;
    height: 0.8rem;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    color: #fff;
    font-size: 0.32rem;
    background-color: #cf0005;
    text-align: center;
    line-height: 0.8rem;
}
</style>