<template>
    <div>
        <div class="details-header">
            <div class="back" @click="$router.go(-1)"></div>
            <div class="tab-wrap">
                <div :class="{'tab-name':true,active:itemStyle}" @click="$router.replace('/goods/details?gid='+gid)">商品</div>
                <div :class="{'tab-name':true,active:contentStyle}" @click="$router.replace('/goods/details/content?gid='+gid)">详情</div>
                <div :class="{'tab-name':true,active:reviewsStyle}" @click="$router.replace('/goods/details/review?gid='+gid)">评价</div>
            </div>
            <div id="cart-icon" class="cart-icon" @click="$route.push('/cart?from=goods_details')">
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
        name: "goods-details",
        data(){
            return{
                gid:this.$route.query.gid?this.$route.query.gid:"",
                itemStyle:true,
                contentStyle:false,
                reviewsStyle:false
            }
        },
        create(){
            this.changeTabStyle(this.$route.name);
        },
        methods:{
            changeTabStyle(name){
                switch (name) {
                    case 'goods-item':
                        this.itemStyle=true;
                        this.contentStyle=false;
                        this.reviewsStyle=false;
                        break;
                    case 'goods-content':
                        this.itemStyle=false;
                        this.contentStyle=true;
                        this.reviewsStyle=false;
                        break;
                    case 'goods-review':
                        this.itemStyle=false;
                        this.contentStyle=false;
                        this.reviewsStyle=true;
                        break;    
                    default:
                        this.itemStyle=true;
                        this.contentStyle=false;
                        this.reviewsStyle=false;
                        break;
                }
            }
        },
        beforeRouteUpdate(to,from,next){
            this.changeTabStyle(to.name);
            next();
        }
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