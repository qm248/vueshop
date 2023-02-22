<template>
  <div v-show="show.show">123</div>
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

</style>