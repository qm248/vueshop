<template>
    <div class="page">
        <div :class="{header:true, scroll:isScrollTop}" >
            <div class="classify-icon" @click="$router.push('/goods/classify')"></div>
            <div class="search-wrap"  @click="searchShow.show=true">
                <div class="search-icon"></div>
                <div class="text">请输入宝贝名称</div>
            </div>
            <div class="login">登录</div>
        </div>
        <div class="banner-wrap">
            <div class="swiper-container" ref="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in swipers" :key="index">
                        <img alt="" :src="item.image"></img>
                    </div>
                </div>
                <div class="swiper-pagination" ref="swiper-pagination" ></div>
            </div>
        </div>
        <div class="quick-nav">
            <ul class="item" v-for="item in navs" :key="item.cid">
                <li><img src="../../../assets/images/common/lazyImg.jpg" alt="" :data-echo="item.image"></img></li>
                <li>{{item.title}}</li>
            </ul>     
        </div>
        <template  v-for="(item,index) in goods" >
            <div class="goods-main"  :key="index" v-if="(index+1)%2!==0">
                <div :class="'classify-name color-'+index">{{item.title}}</div>
                <div class="goods-row-1">
                    <div class="goods-column" >
                        <div class="goods-title">{{ item.items && item.items[0].title}}</div>
                        <div class="goods-tips">精品打折</div>
                        <div class="goods-price bg-color-0">{{ item.items && item.items[0].price}}元</div>
                        <div class="goods-image">
                            <img src="../../../assets/images/common/lazyImg.jpg" :data-echo="item.items && item.items[0].image" alt=""></img>
                        </div>
                    </div>
                    <div class="goods-column">
                        <div class="goos-list" v-for="(item2,index2) in item.items.slice(1,3)" :key="index2">
                            <div class="goods-list-title">{{ item2.title }}</div>
                            <div class="goods-list-tip">品质精挑</div>
                            <div class="goods-list-image">
                                <img src="../../../assets/images/common/lazyImg.jpg" :data-echo="item2.image" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="goods-row-2">
                    <div class="goods-list" v-for="(item3,index3) in item.items.slice(3,7)" :key="index3">
                        <div class="goods-title">{{item3.title}}</div>
                        <div class="goods-image">
                            <img src="../../../assets/images/common/lazyImg.jpg" :data-echo="item3.image" alt="">
                        </div>
                        <div class="price">￥{{ item3.price }}</div>
                        <div class="price line">￥{{ item3.price*2 }}</div>
                    </div>
                </div>
            </div>
            
            <div class="goods-main" v-else>
                <div :class="'classify-name color-'+index">—— {{item.title}} ——</div>
                <div class="goods-row-1">
                    <div class="goods-column-2" v-for="(item2,index2) in item.items.slice(0,2)" :key="index2">
                        <div class="goods-title">{{item.title}}</div>
                        <div class="goods-tips">火爆开售</div>
                        <div class="goods-image">
                            <img src="../../../assets/images/common/lazyImg.jpg" :data-echo="item2.image" alt=""></img>
                        </div>
                    </div>
                </div>
                <div class="goods-row-2">
                    <div class="goods-list" v-for="(item2,index2) in item.items.slice(2,6)" :key="index2">
                        <div class="goods-title">{{item2.title}}</div>
                        <div class="goods-image">
                            <img src="../../../assets/images/common/lazyImg.jpg" :data-echo="item2.image" alt="">
                        </div>
                        <div class="price">￥{{item2.price}}</div>
                        <div class="price line">￥{{ item2.price*2 }}</div>
                    </div>
                </div>
            </div>
        </template>

        <div class="goods-recom-nav">
            <div class="line"></div>
            <div class="recom-wrap">
                <div class="icon"></div>
                <div class="text">为您推荐</div>
            </div>
            <div class="line"></div>
        </div>
        <div class="goods-recom">
            <div class="goods-list" v-for="(item,index) in recomGoods" :key="index">
                <div class="goods-image">
                    <img src="../../../assets/images/common/lazyImg.jpg" :data-echo="item.image" alt="">
                </div>
                <div class="goods-title">{{item.title}}</div>
                <div class="goods-price">￥{{item.price}}</div>
            </div>
            
        </div>
        <my-search :show="searchShow"></my-search>
    </div>
</template>

<script>
    import Swiper from '../../../assets/js/libs/swiper.js';
    import { mapActions,mapState} from 'vuex'
    import MySearch from '../../../components/search'
    export default {
        name: "index",
        data(){
            return {
              isScrollTop:false,
              searchShow:{show:false}
            }
        },
        components:{
            MySearch
        },
        created(){
            this.isScroll = true;
            window.addEventListener('scroll',this.eventScrollTop)//用于解决单页面应用的bug
            this.getSwipers({success:()=>{
                this.$nextTick(()=>{
                    new Swiper(this.$refs['swiper-container'], {
                    autoplay: 3000,
                    pagination : this.$refs['swiper-pagination'],
                    paginationClickable :true,
                    autoplayDisableOnInteraction : false
                    })
                })
            }});
            
            this.getNavs({success:()=>{
                this.$nextTick(()=>{
                    this.$utils.lazyImg();
                })
            }});
            this.getGoods({success:()=>{
                this.$nextTick(()=>{
                    this.$utils.lazyImg();
                })
            }});
            this.getRecomGoods({success:()=>{
                this.$nextTick(()=>{
                    this.$utils.lazyImg();
                })
            }})
        },
        computed:{
            ...mapState({
                swipers:(state)=>state.index.swipers,
                navs:(state)=>state.index.navs,
                goods:(state)=>state.index.goods,
                recomGoods:(state)=>state.index.recomGoods,
            })
        },
        mounted(){
            
        },
        methods:{
            ...mapActions({
                getSwipers:"index/getSwipers",
                getNavs:'index/getNavs',
                getGoods:'index/getGoods',
                getRecomGoods:'index/getRecomGoods'
            }),
            eventScrollTop(){
                let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                if(scrollTop >= 150){
                    if(this.isScroll){
                        this.isScroll = false;
                        this.isScrollTop = true;
                    }
                }else{
                    if(!this.isScroll){
                        this.isScroll = true;
                        this.isScrollTop = false;
                    }
                }
            },
        },
        destroyed(){
            window.removeEventListener('scroll',this.eventScrollTop);//用于解决单页面应用的bug
        },
        activated(){
            this.isScroll = true;
            window.addEventListener('scroll',this.eventScrollTop)//用于解决单页面应用的bug
        },
        deactivated(){
            window.removeEventListener('scroll',this.eventScrollTop);//用于解决单页面应用的bug
        },
    }
</script>

<style scoped>
@import url("../../../assets/css/common/swiper.css");
    .page{
        width: 100%;
        min-height: 100%;
        margin-bottom: 1.5rem;
    }    
    .header{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        background:linear-gradient(rgba(1,1,1,.2),hsla(0,0%,100%,0));
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 0.3rem;
        
    }  
    .header.scroll{
        background:linear-gradient(#eb1625,hsla(0,0%,100%,0))
    }
    .header .classify-icon{
        width: 0.6rem;
        height: 0.6rem;
        background-image: url('../../../assets/images/common/class.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .header .search-wrap{
        width: 5.26rem;
        height: 0.52rem;
        background-color: rgba(255,255,255,0.2);
        display: flex;
        border-radius: 4px;
        align-items: center;
    }
    .header .search-wrap .search-icon{
        background-image: url('../../../assets/images/common/search.png');
        width: 0.44rem;
        height: 0.44rem;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
    }
    .header .search-wrap  .text{
        color: #fff;
        font-size: 0.32rem;
    }
    .header .login{
        width: auto;
        height: 0.44rem;
        color: #fff;
        font-size: 0.32rem;
    }
    .banner-wrap{
        width: 100%;
        height: 3.66rem;
    }
    .banner-wrap img{
        width: 100%;
        height: 100%;
    }
    .quick-nav{
        width: 100%;
        height: 1.6rem;
        margin-top: 0.2rem;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.2rem;
        box-sizing: border-box;
    }
    .quick-nav .item{
        width: 1.4rem;
    }
    .quick-nav .item li:nth-child(1){
        width: 0.8rem;
        height: 0.8rem;
        margin: 0 auto;
    }
    .quick-nav .item li:nth-child(1) img{
        width: 100%;
        height: 100%;
    }
    .quick-nav .item li:nth-child(2){
        color: #7b7f82;
        font-size: 0.28rem;
        margin-top: 0.2rem;
        text-align: center;
    }
    .goods-main{
        width: 100%;
        height: 7.36rem;
        margin-top: 0.2rem;
        background-color: #fff;

    }
    .goods-main .classify-name{
        width: 100%;
        height: 0.64rem;
        border-bottom: 1px solid #efefef;
        font-size: 0.32rem;
        text-align: center;
        line-height: 0.64rem;
    }
    .goods-main .classify-name.color-0{color:#f73b61}
    .goods-main .classify-name.color-1{color:#fe6719}
    .goods-main .classify-name.color-2{color:#5fc600}
    .goods-main .goods-row-1{
        width: 100%;
        height: 3.5rem;
        border-bottom: 1px solid #efefef;
        display: flex;
        overflow: hidden;
    }
    .goods-main .goods-row-1 .goods-column,.goods-main .goods-row-1 .goods-column-2{
        width: 50%;
        height: 100%;
        border-right: 1px solid #efefef;
        position: relative;
    }
    .goods-main .goods-row-1 .goods-column .goods-title{
        width: 95%;
        height: 0.32rem;
        font-size: 0.28rem;
        font-weight: bold;
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        overflow: hidden;
    }
    .goods-main .goods-row-1 .goods-column-2 .goods-title{
        width: 95%;
        height: 0.32rem;
        font-size: 0.28rem;
        font-weight: bold;
        overflow: hidden;
    }
    .goods-main .goods-row-1 .goods-column .goods-tips{
        width: auto;
        height: auto;
        font-size: 0.28rem;
        color: #cb385d;
        position: absolute;
        left: 0.2rem;
        top: 0.6rem;
    }
    .goods-main .goods-row-1 .goods-column-2 .goods-tips{
        width: auto;
        height: auto;
        font-size: 0.28rem;
        text-align: center;
        color: #7b7b7b;
        margin-top: 0.2rem;
    }
    .goods-main .goods-row-1 .goods-column .goods-price{
        width: auto;
        height: 0.4rem;
        position: absolute;
        right: 1rem;
        top: 0.6rem;
        font-size: 0.28rem;
        color: #fff;
        border-radius: 10px;
    }
    .goods-main .goods-row-1 .goods-column .goods-price.bg-color-0{background-color:#f21d4f;}
    .goods-main .goods-row-1 .goods-column .goods-price.bg-color-2{background-color:#5fc600}
    .goods-main .goods-row-1 .goods-column .goods-image{
        width: 3rem;
        height: 2rem;
        position: absolute;
        left: 0.35rem;
        bottom: 0.3rem;
    }
    .goods-main .goods-row-1 .goods-column .goods-image img{
        width: 100%;
        height: 100%;
    }
    .goods-main .goods-row-1 .goods-column-2 .goods-image{
        width: 2rem;
        height: 2rem;
        margin: 0 auto;
        margin-top: 0.2rem;
    }
    .goods-main .goods-row-1 .goods-column-2 .goods-image img{
        width: 100%;
        height: 100%;
    }
    .goods-main .goods-row-1 .goods-column .goos-list{
        width: 100%;
        height: 50%;
        border-bottom: 1px solid #efefef;
        position: relative;
    }
    .goods-main .goods-row-1 .goods-column .goos-list .goods-list-title{
        position: absolute;
        width: 2.04rem;
        height: 0.32rem;
        overflow: hidden;
        left: 0.2rem;
        top: 0.2rem;
        font-size: 0.28rem;
        font-weight: bold;
        z-index: 1;
    }
    .goods-main .goods-row-1 .goods-column .goos-list .goods-list-tip{
        width: auto;
        height: auto;
        font-size: 0.24rem;
        color: #7b7f82;
        text-align: center;
        margin-top: 0.1rem;
        position: absolute;
        left:0.2rem;
        top:0.6rem;
    }
    .goods-main .goods-row-1 .goods-column .goods-list-image{
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        right: 0.2rem;
        top: 0.2rem;
    }
    .goods-main .goods-row-1 .goods-column .goods-list-image img{
        width: 100%;
        height: 100%;
    }
    .goods-main .goods-row-2{
        width: 100%;
        height: 3.2rem;
        overflow: hidden;
        display: flex;
    }
    .goods-main .goods-row-2 .goods-list{
        width: 25%;
        height: 100%;
        border-right: 1px solid #efefef;
    }
    .goods-main .goods-row-2 .goods-title{
        width: 100%;
        height: 0.4rem;
        font-size: 0.28rem;
        font-weight: bold;
        overflow: hidden;
        text-align: center;
        margin-top: 0.2rem;
    }
    .goods-main .goods-row-2 .goods-image{
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 auto;
        margin-top: 0.2rem;
    }
    .goods-main .goods-row-2 .goods-image img{
        width: 100%;
        height: 100%;
    }
    .goods-main .goods-row-2 .price{
        width: 100%;
        height: auto;
        font-size: 0.28rem;
        color: #d32a4e;
        text-align: center;
        margin-top: 0.1rem;
    }
    .goods-main .goods-row-2 .price.line{
        color: #7b7f82;
        margin-top: 0;
        text-decoration: line-through;
    }
    .goods-recom-nav{
        width:100%;
        height:1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .goods-recom-nav .line{
        width: 35%;
        height: 1px;
        background-color: #d4d4d4;
    }
    .goods-recom-nav .recom-wrap{
        width: 1.8rem;
        height: 0.44rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .goods-recom-nav .recom-wrap .icon{
        width: 0.4rem;
        height: 0.4rem;
        background-image: url('../../../assets/images/home/index/recom.png');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }
    .goods-recom-nav .recom-wrap .text{
        width: auto;
        height: auto;
        font-size: 0.28rem;
        font-weight: bold;
    }
    .goods-recom{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 0.2rem;
        box-sizing: border-box;
        flex-wrap: wrap;
    }
    .goods-recom .goods-list{
        width: 48%;
        height: 4.5rem;
        background-color: #fff;
        margin-top: 0.2rem;
    }
    .goods-recom .goods-list .goods-image{
        width: 2.8rem;
        height: 2.8rem;
        margin: 0 auto;
        margin-top: 0.2rem;
    }
    .goods-recom .goods-list .goods-image img{
        width: 100%;
        height: 100%;
    }
    .goods-recom .goods-list .goods-title{
        font-size: 0.28rem;
        font-weight: bold;
        width: 100%;
        height: 0.8rem;
        overflow: hidden;
        margin-top: 0.1rem;
    }
    .goods-recom .goods-list .goods-price{
        width: auto;
        height: auto;
        font-size: 0.32rem;
        color: #cb385d;
        margin-top: 0.1rem;
    }
</style>