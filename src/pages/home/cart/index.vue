<template>
    <div class="cart-main">
        <div class="sub-header">
            <div class="back"></div>
            <div class="title">购物车</div>
            <div class="right-btn"></div>
        </div>
        <div class="cart-list" v-for="(item,index) in cartData" :key="index">
            <div :class="{'select-btn':true, active:item.checked}" @click="selectItem(index)"></div>
            <div class="image-wrap">
                <div class="image"><img src="item.img" alt="" /></div>
                <div class="del" @click="delItem(index)">删除</div>
            </div>
            <div class="goods-wrap">
                <div class="goods-title">{{ item.title }}</div>
                <div class="goods-attr">
                    <span v-for="(item2,index2) in item.attrs" :key="index2">{{ item2.title }}:
                        <template v-for="(item3,index3) in item2.param"> {{ item3.title }}</template>
                    </span>
                </div>
                <div class="buy-wrap">
                    <div class="price">￥{{ item.price }}</div>
                    <div class="amount-input-wrap">
                        <div :class=" item.amount>1?'btn dec':'btn dec active'" @click="DEC_AMOUNT({index:index})">-</div>
                        <div class="amount-input"><input type="tel" :value="item.amount"
                            @input="SET_AMOUNT({index:index,amount:$event.target.value})">
                        </div>
                        <div class="btn inc" @click="INC_AMOUNT({index:index})">+</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="orderend-wrap">
            <div class="select-area">
                <div class="select-wrap" @click="allSelect()">
                    <div :class="{'select-btn':true, active:isAllSelect}"></div>
                    <div class="select-text">全选</div>
                </div>
                <div class="total">运费：<span>{{ freight }}</span> 合计：<span>{{ total }}</span></div>
            </div>
            <div :class="total>0? 'orderend-btn' : 'orderend-btn disable'" @click="statement()">去结算</div>
        </div>

    </div>
</template>

<script>
import {mapState, mapMutations,mapGetters } from 'vuex';
    export default {
        name: "cart",
        data(){
            return{
                isAllSelect:true
            }
        },
        created(){
            this.checkAllSelect();
        },
        computed:{
            ...mapState({
                cartData:(state)=>state.cart.cartData,
            }),
            ...mapGetters({
                freight:'cart/freight',
                total:"cart/total"
            })
        },
        methods:{
            ...mapMutations({
                DEL_ITEM:'cart/DEL_ITEM',
                SET_AMOUNT:"cart/SET_AMOUNT",
                INC_AMOUNT:'cart/INC_AMOUNT',
                DEC_AMOUNT:'cart/DEC_AMOUNT',
                SELECT_ITEM:'cart/SELECT_ITEM',
                ALL_SELECT_ITEM:"cart/ALL_SELECT_ITEM"
            }),
            delItem(index){
                this.DEL_ITEM({index:index});
                this.checkAllSelect();
            },
            selectItem(index){
                this.SELECT_ITEM({index:index})
                if(this.cartData.length>0){
                    let isChecked = true;
                    for (let i = 0; i < this.cartData.length; i++) {
                        if(!this.cartData[i].checked){
                            isChecked=false;
                            break;
                        }
                    }
                    this.isAllSelect=isChecked;
                }else{
                    this.isAllSelect=false;
                }
            },
            allSelect(){
                if(this.cartData.length>0){
                    this.isAllSelect=!this.isAllSelect;
                    this.ALL_SELECT_ITEM({checked:this.isAllSelect});
                }
            },
            checkAllSelect(){
                if(this.cartData.length>0){
                    let isChecked=true;
                    for(let i=0;i<this.cartData.length;i++){
                        if(!this.cartData[i].checked){
                            isChecked=false;
                            break;
                        }
                    }
                    this.isAllSelect=isChecked;
                }else{
                    this.isAllSelect=false;
                }
            },
            //去结算
            statement(){
                if(this.total>0){
                    
                }
            }



        }
    }
</script>

<style scoped>
.cart-main{
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2.2rem;
}
.sub-header{
    width: 100%;
    height: 1rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    justify-content: space-between;
    padding: 0 0.1rem;
    box-sizing: border-box;
}
.sub-header .back{
    width: 0.8rem;
    height: 0.8rem;
    background-image: url('../../../assets/images/home/goods/back.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.sub-header .title{
    width: 79%;
    height: auto;
    font-size: 0.32rem;
    text-align: center;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.sub-header .right-btn{
    width: auto;
    height: auto;
    font-size: 0.32rem;
}
.cart-main .cart-list{
    width: 100%;
    height: 2.2rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-top: 0.1rem;
}
.cart-main .cart-list .select-btn{
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 100%;
    border: #efefef 1px solid;
    margin-left: 0.2rem;
    margin-right: 0.3rem;
}
.cart-main .cart-list .select-btn.active{
    background-image: url('../../../assets/images/home/cart/checkmark.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    border: #fff solid 1px;
}
.cart-main .cart-list .image-wrap{
    width: 1.2rem;
    margin-right: 0.3rem;
}
.cart-main .cart-list .image-wrap .image{
    width: 100%;
    height: 1.2rem;
}
.cart-main .cart-list .image-wrap .image img{
    width: 100%;
    height: 100%;
}
.cart-main .cart-list .image-wrap .del{
    width: 100%;
    text-align: center;
    font-size: 0.24rem;
    color: #b5b5b5;
    margin-top: 0.2rem;
}
.cart-main .cart-list .goods-wrap{
    width: 64%;
    font-size: 0.24rem;
}
.cart-main .cart-list .goods-wrap .goods-title{
    width: 100%;
}   
.cart-main .cart-list .goods-wrap .goods-attr{
    width: 100%;
    margin-top: 0.1rem;
}
.cart-main .cart-list .goods-wrap .goods-attr span{
    padding-right: 0.3rem;
}
.cart-main .cart-list .goods-wrap .buy-wrap{
    width: 100%;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cart-main .cart-list .goods-wrap .buy-wrap .price{
    font-size:0.28rem;
    color: #cc0004;
    margin-top: 0.2rem;
}
.cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap{
    width: 2.04rem;
    height: 0.5rem;
    border: 1px solid #000;
    margin-right: 0.2rem;
    border-radius: 0.08rem;
    display: flex;
    align-items: center;
}
.cart-main .amount-input-wrap .btn{
    width: 0.6rem;
    height: 0.4rem;
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.4rem;
}
.cart-main .amount-input-wrap .btn.active{
    color: #b5b5b5;
}
.cart-main .amount-input-wrap .dec{
    border-right: 1px solid #000;
}
.cart-main .amount-input-wrap .amount-input{
    width: 0.76rem;
    height: 100%;
}
.cart-main .amount-input-wrap .amount-input input{
    width: 100%;
    height: 92%;
    text-align: center;
}
.cart-main .cart-list .goods-wrap .buy-wrap .amount-input-wrap  .inc{
    border-left: 1px solid #000;
}
.orderend-wrap{
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 1.2rem;
    border-top: 1px solid #efefef;
    left: 0;
    background-color: #fff;
    z-index: 10;
    display: flex;
}
.orderend-wrap .select-area{
    width: auto;
    height: 100%;
    flex: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.orderend-wrap .select-area .select-wrap{
    width: auto;
    display: flex;
    align-items: center;
}
.orderend-wrap .select-area .select-wrap .select-btn{
    width: 0.4rem;
    height: 0.4rem;
    border: #efefef solid 1px;
    border-radius: 100%;
    margin-left: 0.2rem;
    margin-right: 0.1rem;
}
.orderend-wrap .select-area .select-wrap .select-btn.active{
    background-image: url('../../../assets/images/home/cart/checkmark.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.orderend-wrap .select-area .select-wrap .select-text{
    font-size: 0.24rem;
}
.orderend-wrap .select-area .total{
    font-size: 0.24rem;
    margin-right: 0.2rem;
}
.orderend-wrap .select-area .total span{
    color: #cc0004;
}
.orderend-wrap .orderend-btn{
    width: auto;
    height: 100%;
    flex: 1;
    background: #cc0004;
    font-size: 0.32rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
}
.orderend-wrap .orderend-btn.disable{
    background: #bfbfbf;
}


</style>