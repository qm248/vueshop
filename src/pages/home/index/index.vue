<template>
    <div class="page">
        <div class="header scroll">
            <div class="classify-icon"></div>
            <div class="search-wrap">
                <div class="search-icon"></div>
                <div class="text">请输入宝贝名称</div>
            </div>
            <div class="login">登录</div>
        </div>
        <div class="banner-wrap">
            <img alt="" src="//vueshop.glbuys.com/uploadfiles/1484285302.jpg"></img>
        </div>
        <div class="quick-nav">
            <ul class="item">
                <li><img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt=""></img></li>
                <li>潮流女装</li>
            </ul>
            <ul class="item">
                <li><img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt=""></img></li>
                <li>潮流女装</li>
            </ul>
            <ul class="item">
                <li><img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt=""></img></li>
                <li>潮流女装</li>
            </ul>
            <ul class="item">
                <li><img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt=""></img></li>
                <li>潮流女装</li>
            </ul>
        </div>
        <div class="goods-main">
            <div class="classify-name color-0">—— 潮流女装 ——</div>
            <div class="goods-row-1"></div>
        </div>
       
    </div>
</template>

<script>
   
    export default {
        name: "index",
        data(){
            return {
              
            }
        },
      
        created(){
        },
        methods:{
            
        }
    }
</script>

<style scoped>
    .page{
        width: 100%;
        min-height: 100%;
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

</style>