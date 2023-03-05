<template>
    <div>
        <div class="details-header">
            <div class="back"></div>
            <div class="tab-wrap">
                <div class="tab-name active">商品</div>
                <div class="tab-name">详情</div>
                <div class="tab-name">评价</div>
            </div>
            <div class="cart-icon">
                <div class="spot"></div>
            </div>
        </div>
        <div class="sub-page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goods-details"
    }
</script>

<style scoped>
.details-header{
    width: 100%;
    height: 1rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
}
.details-header .back{
    width: 0.8rem;
    height: 0.8rem;
    background-image: url('../../../assets/images/home/goods/back.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
}
.details-header .tab-wrap{
    width: 70%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
}
.details-header .tab-name{
    width: auto;
    height: 96%;
    overflow: hidden;
    line-height: 1rem;
    text-align: center;
    margin-left: 9%;
    margin-right: 9%;
    font-size: 0.36rem;
}
.details-header .tab-name.active{
   border-bottom: solid 2px #fda208;
}
.details-header .cart-icon{
    width: 0.8rem;
    height: 0.8rem;
    background-image: url('../../../assets/images/home/goods/cart.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    margin-right: 0.2rem;
    position: relative;
    z-index: 1;
}
.details-header .cart-icon .spot{
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: #cc0004;
    z-index: 1;
    position: absolute;
    top: 0.15rem;
    right: 0;
}
.sub-page{
    width: 100%;
}
</style>