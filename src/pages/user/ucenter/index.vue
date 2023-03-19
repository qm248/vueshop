<template>
    <div>
        <SubHeader title="个人中心" :isBack="false"></SubHeader>
        <div class="user-info-wrap">
            <div class="head">
                <img src="../../../assets/images/user/my/default-head.png" alt="">
            </div>
            <div class="nickname">昵称</div>
            <div class="points">我的积分：0</div>
        </div>
        <div class="order-name-wrap">
            <div class="order-name">全部订单</div>
            <div class="show-order">查看全部订单></div>
        </div>
        <div class="order-status-wrap">
            <div class="item">
                <div class="icon wait"></div>
                <div class="text">待支付</div>
            </div>
            <div class="item">
                <div class="icon take"></div>
                <div class="text">待收货</div>
            </div>
            <div class="item">
                <div class="icon comment"></div>
                <div class="text">待评价</div>
            </div>
        </div>
    </div>
</template>

<script>
import SubHeader from '../../../components/sub_header/index.vue'
    export default {
        name: "ucenter",
        data(){
            return {

            }
        },
        created(){
        },
        components:{
            SubHeader
        },
        methods:{
           
        },
    }
</script>

<style scoped>
.user-info-wrap{
    width: 100%;
    height: 2.8rem;
    background-image:url('../../../assets/images/user/my/mybg.png') ;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
    margin-top: 1.02rem;
    position: relative;
    z-index: 1;
}
.user-info-wrap .head{
    height: 1.2rem;
    width: 1.2rem;
    position:absolute;
    left: 5%;
    bottom: 15%;
    z-index: 1;
}
.user-info-wrap .head img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
.user-info-wrap .nickname{
    width: auto;
    height: auto;
    white-space: nowrap;
    position: absolute;
    z-index: 1;
    left: 27%;
    bottom: 35%;
    font-size: 0.24rem;
    color: #fff;
}
.user-info-wrap .points{
    width: auto;
    height: auto;
    white-space: nowrap;
    position: absolute;
    z-index: 1;
    left: 27%;
    bottom: 20%;
    font-size: 0.24rem;
    color: #fff;
}
.order-name-wrap{
    width: 100%;
    height: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    overflow: hidden;
    margin-bottom: 1px;
}
.order-name-wrap .order-name{
    font-size: 0.28rem;
    margin-left: 3%;
}
.order-name-wrap .show-order{
    font-size: 0.24rem;
    margin-right: 3%;
}
.order-status-wrap{
    width: 80%;
    height: 1.4rem;
    background-color: #fff;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order-status-wrap .item{
    height: auto;
    width: 1rem;
}
.order-status-wrap .item .icon{
    width:0.5rem;
    height:0.5rem;
    margin:0 auto;
}
.order-status-wrap .item .icon.wait{
    background-image:url("../../../assets/images/user/my/pay.png");
    background-size:100%;
    background-repeat:no-repeat;
    background-position: center;
}
.order-status-wrap .item .icon.take{
    background-image:url("../../../assets/images/user/my/shouhuo.png");
    background-size:100%;
    background-repeat:no-repeat;
    background-position: center;
}
.order-status-wrap .item .icon.comment{
    background-image:url("../../../assets/images/user/my/comment.png");
    background-size:100%;
    background-repeat:no-repeat;
    background-position: center;
}
.order-status-wrap .item .text{
    width:100%;
    font-size:0.24rem;
    text-align:center;
}
</style>