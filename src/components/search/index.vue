<template>
  <div class="search-component" v-show="show.show">123</div>
</template>

<script>
export default {
    name:"my-search",
    data(){
        return{

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
.search-component{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    background-color: #ffffff;
}
</style>