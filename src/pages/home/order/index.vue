<template>
    <div class="page">
        <SubHeader title="确认订单"></SubHeader>
        <div class="main">
            <div class="address-wrap">
                <div class="address-border-wrap">
                    <div class='trapezoid style1'></div>
                    <div class='trapezoid style2'></div>
                    <div class='trapezoid style1'></div>
                    <div class='trapezoid style2'></div>
                    <div class='trapezoid style1'></div>
                    <div class='trapezoid style2'></div>
                    <div class='trapezoid style1'></div>
                    <div class='trapezoid style2'></div>
                    <div class='trapezoid style1'></div>
                    <div class='trapezoid style2'></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SubHeader from '../../../components/sub_header/index.vue'
    export default {
        name: "order",
        components:{
            SubHeader
        },
    }
</script>

<style scoped>
.page{
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
}
.main{
    width: 100%;
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
}
.main .address-wrap{
    width: 100%;
    height: 1.9rem;
    position: relative;
    z-index: 1;
}
.address-wrap .address-border-wrap{
    width: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    display: flex;
}
.address-wrap .address-border-wrap .trapezoid{
    width: 6%;
    margin-left: 1%;
    margin-right: 1%;
}
.address-wrap .address-border-wrap .trapezoid .style1{
    border-bottom: 0.08rem solid #fdcd4d;
    border-left: 0.08rem solid transparent;
    border-right: 0.08rem solid transparent;
}
.address-wrap .address-border-wrap .trapezoid .style2{
    border-top: 0.08rem solid #84614d;
    border-left: 0.08rem solid transparent;
    border-right: 0.08rem solid transparent;
}

</style>