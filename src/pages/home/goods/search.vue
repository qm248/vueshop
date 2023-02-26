<template>
    <div class="page">
        <div class="search-top">
            <div class="search-header">
                <div class="back"></div>
                <div class="search-warp">
                    <div class="search-icon"></div>
                    <div class="search-text">大码女装</div>
                </div>
                <div class="screen-btn">筛选</div>
            </div>
            <div class="order-main">
                <div class="order-item active">
                    <div class="order-text">综合</div>
                    <div class="order-icon"></div>
                    <ul class="order-menu">

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goods-search",
        data(){
            return{
                keyword:this.$route.keyword?this.$route.keyword:""
            }
        },
    }
</script>

<style scoped>
.page{
    width: 100%;
    height: auto;
    background: #fff;
    overflow: hidden;
}
.search-top{
    width: 100%;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    background-color: #fff;
}
.search-header{
    width: 100%;
    height: 0.8rem;
    border-bottom: 1px solid #efefef;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.search-header .back{
    width: 0.8rem;
    height: 0.8rem;
    background-image: url('../../../assets/images/home/goods/back.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}
.search-header .search-warp{
    width: 75%;
    height: 80%;
    background-color: #eaeaea;
    border-radius: 0.1rem;
    display: flex;
    align-items: center;
}
.search-header .search-warp .search-icon{
    width: 0.5rem;
    height: 0.5rem;
    background-image: url("../../../assets/images/common/search.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    margin-left: 0.1rem;
    margin-right: 0.2rem;
}   
.search-header .search-warp .search-text{
    width: 90%;
    height: auto;
    font-size: 0.32rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.search-header .screen-btn{
    width: auto;
    height: auto;
    margin-right: 0.1rem;
    font-size: 0.32rem;

}
.search-top .order-main{
    width: 100%;
    height: 0.8rem;
    border-bottom: 1px solid #efefef;
    display: flex;
    align-items: center;
}
.search-top .order-main .order-item{
    width: auto;
    height: auto;
    display: flex;
    margin-left: 0.4rem;
    position: relative;
    z-index: 1;
}
.search-top .order-main .order-item .order-text{
    font-size: 0.32rem;
}
.search-top .order-main .order-item.active .order-text{
    color: #fda208;
}
.search-top .order-main .order-item .order-icon{
    width: 0.35rem;
    height: 0.35rem;
    background-image: url("../../../assets/images/home/goods/down.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-left: 0.1rem;
}
.search-top .order-main .order-item.active .order-icon{
    background-image: url("../../../assets/images/home/goods/up.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.search-top .order-main .order-item .order-menu{

}

</style>