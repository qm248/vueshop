<template>
    <div class="page">
        <div class="content" v-html="$store.state.goods.details.bodys"></div>
    </div>
</template>

<script>
    export default {
        name: "goods-review"
    }
</script>

<style scoped>
.page{
    margin-top: 1.2rem;
}
.content{
    width: 90%;
    margin: 0 auto;
    font-size: 0.32rem;
    line-height: 0.5rem;
}


</style>