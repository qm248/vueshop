<template>
  <div class="search-component" v-show="show.show">
    <div class="search-header">
        <div class="close" @click="show.show=false"></div>
        <div class="search-wrap">
            <div class="search-input-wrap">
                <input type="text" placeholder="请输入宝贝名称" class="search" v-model="keyword"/>
            </div>
            <button type="button" class="search-btn" @click="goSearch()"></button>
        </div>
        
    </div>
    <div class="search-main" v-if="historyKeywords.length>0">
        <div class="search-title-wrap">
            <div class="search-title">最近搜索</div>
            <div class="bin" @click="clearHistoryKeywords()"></div>
        </div>
        <div class="search-keywords-wrap">
            <div class="keywords" v-for="(item,index) in historyKeywords" :key="index"  @click="goSearch(item)">{{ item }}</div>
        </div>
    </div>
    <div class='search-main'>
            <div class='search-title-wrap'>
                <div class='search-title'>热门搜索</div>
            </div>
            <div class='search-keywords-wrap'>
                <div class='keywords' v-for="(item,index) in hotkeywords" :key="index"  @click="goSearch(item.title)">{{item.title}}</div>               

            </div>
        </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import { Dialog } from 'vant';
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
        isLocal:{
            type:Boolean,
            default:false,
        }
    },
    created(){
        this.keywords =this.historyKeywords? this.historyKeywords : [];    
        this.getHotKeywords();
    },
    computed:{
        ...mapState({
            historyKeywords:(state)=>state.search.historyKeywords,
            hotkeywords:(state)=>state.search.hotkeywords
        })
    },
    methods:{
        ...mapMutations({
           'SET_KEYWORDS':'search/SET_KEYWORDS',  
           'CLEAR_KEYWORDS':"search/CLEAR_KEYWORDS"
        }),
        ...mapActions({
            'getHotKeywords':'search/getHotKeywords'
        }),
        goSearch(keyword){
                let tmpKeyword=keyword || this.keyword || "";
                if(tmpKeyword){
                    if(this.keywords.length>0){
                        for(let i=0;i<this.keywords.length;i++){
                            if(this.keywords[i]===tmpKeyword){
                                this.keywords.splice(i--,1);
                            }
                        }
                    }
                    this.keywords.unshift(tmpKeyword);
                    this.SET_KEYWORDS({historyKeywords:this.keywords})
                }
                this.show.show = false;
                if(this.isLocal){
                    this.$router.replace("/goods/search?keyword=" + tmpKeyword)
                }else{
                    this.$router.push("/goods/search?keyword="+tmpKeyword)
                }
                
            },
        clearHistoryKeywords(){
            Dialog.confirm({
                title: '提示',
                message: '确定删除吗？'
            }).then(() => {
                this.CLEAR_KEYWORDS();
            }).catch(() => {
            // on cancel
            });
           
        }
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
.search-component .search-main{
    width: 100%;
    margin-top: 0.2rem;
}
.search-component .search-main .search-title-wrap{
    width: auto;
    display: flex;
    justify-content: space-between;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}
.search-component .search-main .search-title-wrap .search-title{
    width: auto;
    font-size: 0.28rem;
}
.search-component .search-main .search-title-wrap .bin{
    width: 0.4rem;
    height: 0.4rem;
    background-image: url('../../assets/images/common/bin.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.search-component .search-main .search-keywords-wrap{
    width: auto;
    display: flex;
    justify-content: flex-start;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    margin-top: 0.3rem;
    flex-wrap: wrap;
}
.search-component .search-main .search-keywords-wrap .keywords{
    width: 26%;
    height: 0.6rem;
    color: #717376;
    border: #efefef solid 1px;
    border-radius: 0.64rem;
    font-size: 0.28rem;
    text-align: center;
    overflow: hidden;
    line-height: 0.6rem;
    margin-right: 1.3%;
    margin-left: 1.3%;
    margin-bottom: 0.2rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
}


</style>