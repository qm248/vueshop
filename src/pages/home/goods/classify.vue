<template>
    <div class="page">
        <div class="search-header" @click="searchShow.show = true">
            <div class="back" @click="goBack()"></div>
            <div class="search">请输入宝贝名称</div>
        </div>
        <div class="goods-main">
            <div class="classify-wrap" ref="scroll-classify">
                <div>
                    <div ref="item" @click="replacePage('/goods/classify/item?cid='+item.cid+'',index)" :class="{'classify-item':true,active:item.active}" v-for="(item,index) in classifys" :key="index">
                        {{ item.title }}</div>
                </div>
            </div>
            <div class="goods-content">
                <router-view></router-view>
            </div>
        </div>
        <my-search :show="searchShow"></my-search>
    </div>
  
</template>

<script>
import IScroll from '../../../assets/js/libs/iscroll';
import MySearch from '../../../components/search/index.vue'
import { mapActions , mapState , mapMutations} from 'vuex'
    export default {
        data(){
            return{
                searchShow:{
                    show:false,
                }
            }
        },
        components:{
            MySearch,
        },
        methods:{
            ...mapActions({
                getClassify:"goods/getClassify"
            }),
            ...mapMutations({
                SECELT_ITEM:"goods/SECELT_ITEM"
            }),
            goBack(){
                this.$router.go(-1)
            },
            scrollPreventDefault(e){
                e.preventDefault();
            },
            seceltItem(index){
                let topHeight=this.$refs['item'][0].offsetHeight*index;
                let halfHeight=parseInt(this.$refs['scroll-classify'].offsetHeight/3);
                let bottomHeight=parseInt(this.$refs['scroll-classify'].scrollHeight-topHeight);
                if(topHeight>halfHeight && bottomHeight>this.$refs['scroll-classify'].offsetHeight){
                    this.myScroll.scrollTo(0,-topHeight,1000,IScroll.utils.ease.elastic);
                }
                this.SECELT_ITEM({index:index})
            },
            replacePage(url,index){
                this.$router.replace(url);
                this.seceltItem(index);
            }
        },
        computed:{
            ...mapState({
                classifys:(state)=>state.goods.classifys
            })
        },
        created(){
            this.cid=this.$route.query.cid?this.$route.query.cid:'';
           this.getClassify({success:()=>{
                    this.$nextTick(()=>{
                        this.myScroll.refresh();
                        if(this.classifys.length>0 && this.cid){
                            let i=0;
                            for(;i<this.classifys.length;i++){
                                if(this.classifys[i].cid===this.cid){
                                    break;
                                }
                            }
                            this.seceltItem(i);
                        }else{
                            this.seceltItem(0);
                        }
                    });
               }});
        },
        mounted(){
            document.title = this.$route.meta.title;
            this.$refs['scroll-classify'].addEventListener('touchmove',this.scrollPreventDefault)
            this.myScroll = new IScroll(this.$refs['scroll-classify'],{
                scrollX:false,
                scrollY:true,
                preventDefault:false
            })
        },
        beforeDestory(){
            this.$refs['scroll-classify'].removeEventListener('touchmove',this.scrollPreventDefault)
        }
       
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