import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router=new Router({
    mode:"hash",//1、hash哈希：有#号。2、history历史：没有#号
    base:process.env.BASE_URL, //自动获取根目录路径
    scrollBehavior:(to,from,position)=>{
        if(position){
            return position
        }else{
            return {x:0,y:0}
        }
    },
    routes:[
        {
            path:"/",
            name:"home",
            component:()=>import("./pages/home/main"),//路由懒加载解决首屏加载慢，性能优化
            meta:{keepAlive:false},
            redirect:"./index",
            children:[
                {
                    path:"index",
                    name:"index",
                    component:()=>import("./pages/home/index"),
                    meta:{keepAlive:true,title:"vueCli"}
                },
                {
                    path:"cart",
                    name:"cart",
                    component:()=>import("./pages/home/cart"),
                    meta:{keepAlive:false,title:"cart"}
                },
                {
                    path:"my",
                    name:"ucenter",
                    component:()=>import("./pages/user/ucenter"),
                    meta:{keepAlive:false,title:"my"}
                },
            ]
        },
        {
            path:"/login",
            name:"login",
            component:()=>import("./pages/home/login"),
            meta:{keepAlive:false}
        },
        {
            path:"/reg",
            name:"reg",
            component:()=>import("./pages/home/reg"),
            meta:{keepAlive:false}
        },
        // {
        //     path:"/ucenter",
        //     name:"ucenter",
        //     component:()=>import("./pages/user/ucenter")
        // },
        {
            path:"/goods/classify",
            name:"goods-classify",
            component:()=>import("./pages/home/goods/classify"),
            redirect:"/goods/classify/item",
            children:[
                {
                    path:"item",
                    name:"goods-classify-item",
                    component:()=>import('./pages/home/goods/classify-item'),
                    meta:{title:"商品分类"}
                }
            ]
        },
        {
            path:"/skip",
            name:"skip",
            component:()=>import("./pages/skip")
        },
        {
            path:'/goods/search',
            name:"goods-search",
            component:()=>import('./pages/home/goods/search')
        },
        {
            path:'/order',
            name:"order",
            component:()=>import('./pages/home/order/index')
        },
        {
            path:"/goods/details",
            name:"goods-details",
            component:()=>import("./pages/home/goods/details"),
            redirect:"/goods/details/item",
            children:[
                {
                    path:"item",
                    name:"goods-item",
                    component:()=>import("./pages/home/goods/details_item")
                },
                {
                    path:"content",
                    name:"goods-content",
                    component:()=>import("./pages/home/goods/details_content")
                },
                {
                    path:"review",
                    name:"goods-review",
                    component:()=>import("./pages/home/goods/details_review")
                }
            ]
        },
    ]
});
router.beforeEach((to,from,next)=>{
    if (to.meta.auth){
        if (Boolean(localStorage['isLogin'])){
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});
export default router;