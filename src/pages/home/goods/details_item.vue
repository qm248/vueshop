<template>
    <div class="page">
        <div class="swiper-wrap">
            <img src="//vueshop.glbuys.com/uploadfiles/1524556419.jpg" alt="">
        </div>
        <div class="goods-ele-main">
            <div class="goods-title">高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
            <div class="price">$12.8</div>
            <div class="sales-wrap">
                <span>快递20元</span>
                <span>月销量300件</span>
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
            </div>
            <div class="no-data">暂无评价！</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goods-item"
    }
</script>

<style scoped >
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
</style>