<template>
    <div class="page">
        <div class="search-header">
            <div class="back"></div>
            <div class="search">请输入宝贝名称</div>
        </div>
        <div class="goods-main">
            <div class="classify-wrap">
                <div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                    <div class="classify-item">潮流女装</div>
                </div>
            </div>
            <div class="goods-content">
                123
            </div>
        </div>
    </div>

  
</template>

<script>
    export default {
        name:"goods-classify"
    }
</script>

<style scoped>
    .page{
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    .search-header{
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #efefef;
       background: #ffffff;
    }
    .search-header .back{
        width: 0.8rem;
        height: 0.8rem;
        background-image: url('../../../assets/images/home/goods/back.png');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
    }
    .search-header .search{
        height: 0.69rem;
        width: 80%;
        border: 1px solid #b2b2b2;
        border-radius: 0.1rem;
        font-size: 0.28rem;
        color: #626262;
        line-height: 0.69rem;
        padding-left: 0.2rem;
    }
    .goods-main{
        width: 100%;
        height: 92.5vh;
        display: flex;
    }
    .goods-main .classify-wrap{
        width: 1.72rem;
        height: 100%;
        overflow: hidden;
        margin-right: 3%;
        position: relative;
        z-index: 1;
    }
    .goods-main .classify-wrap .classify-item{
        width: 100%;
        height: 0.8rem;
        border-bottom: 1px solid #efefef;
        background-color: #ffffff;
        font-size: 0.28rem;
        text-align: center;
        line-height: 0.8rem;
        overflow: hidden;
    }
    .goods-main .classify-wrap .classify-item.active{
       color: #ff0000;
    }
    .goods-main .goods-content{
        width: 71%;
        height: 100%;
    }


</style>