<template>
  <div class="search-component" v-show="show.show">
    <div class="search-header">
        <div class="close" @click="show.show=false"></div>
        <div class="search-wrap">
            <div class="search-input-wrap">
                <input type="text" placeholder="请输入宝贝名称" class="search" v-model="keyword"/>
            </div>
            <button type="button" class="search-btn"></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"my-search",
    data(){
        return{
            keyword:'',
        }
    },
    props:{
        show:{
            type:Object,
            default:{}
        },
    }

}
</script>

<style scoped>
.search-component{width:100%;height:100%;position: fixed;z-index:99;left:0px;top:0px;background-color:#ffffff;}
.search-component .search-header{width:100%;height:1rem;border-bottom:#EFEFEF solid 1px;display:flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;}
.search-component .search-header .close{width:0.5rem;height: 0.5rem;background-image:url("../../assets/images/common/search_x.png");background-size:100%;background-repeat: no-repeat;background-position: center;margin-left:0.2rem;margin-right:0.2rem;}
.search-component .search-header .search-wrap{width:78%;height:0.64rem;border:#B2B2B2 solid 1px;border-radius: 0.1rem;display:flex;display:-webkit-flex;align-items: center;-webkit-align-items: center;}
.search-component .search-header .search-wrap .search-input-wrap{width:85%;height:100%;border-right: #B2B2B2 solid 1px;}
.search-component .search-header .search-wrap .search{width:80%;height:93%;margin-left:0.2rem;font-size:0.28rem;}
.search-component .search-header .search-wrap .search-btn{width:0.5rem;height:0.5rem;background-image:url("../../assets/images/common/search_icon.png");background-size:100%;background-repeat: no-repeat;background-position: center;background-color:#ffffff;border:0px none;outline: none;margin-left:0.15rem;}
</style>