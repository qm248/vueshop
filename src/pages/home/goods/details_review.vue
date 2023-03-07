<template>
    <div class="page">
        <div class="reviews-main">
            <div class="reviews-title">商品评价（10000）</div>
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
            <div class="no-data">暂无评价！</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goods-review"
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