<template>
    <div class="page">
        <SubHeader title="会员登录"></SubHeader>
       <div class="main">
            <div class="code-wrap" style="margin-top:0px"><input type="text" placeholder="手机号"></div>
            <div class="password-wrap">
                <div class="password"><input type="text" placeholder="密码"></div>
                <div class="switch-wrap">
                    <van-switch active-color="#eb1625"></van-switch>
                </div>
            </div>
            <div class="sure-btn">登录</div>
            <div class="fastreg-wrap">
                <div><img src="../../../assets/images/home/index/forget.png" alt="忘记密码">忘记密码</div>
                <div><img src="../../../assets/images/home/index/reg.png" alt="忘记密码">快速注册</div>
            </div>
       </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapActions} from "vuex";
    import {Switch,Toast} from 'vant';
    import SubHeader from '../../../components/sub_header/index.vue'
    Vue.use(Switch);
    Vue.use(Toast)
    export default {
        name: "login",
        data(){
            return {
                username:"",
                password:""
            }
        },
        components:{
            SubHeader
        },
        methods:{
            ...mapActions({
                login:"user/login"
            }),
            doLogin(){
                if (this.username.match(/^\s*$/)){
                    alert("请输入用户名");
                    return;
                }
                if (this.password.match(/^\s*$/)){
                    alert("请输入密码");
                    return;
                }
                this.login({cellphone:this.username,password:this.password,success:(res)=>{
                        // console.log(res);
                        if (res.code===200){
                            this.$router.go(-1)
                        } else{
                            alert(res.data);
                        }
                    }});
                // request(process.env.VUE_APP_API+"/home/user/pwdlogin?token=1ec949a15fb709370f","post",{cellphone:this.username,password:this.password}).then(res=>{
                //     // console.log(res);
                //     if (res.code===200){
                //         localStorage['uid']=res.data.uid;
                //         localStorage['nickname']=res.data.nickname;
                //         localStorage['isLogin']=true;
                //         this.$router.go(-1);
                //     } else{
                //         alert(res.data);
                //     }
                // })
            }
        }
    }
</script>

<style scoped>
.page{
    width: 100%;
    height: 100vh;
    background-color: #fff;
}
.main{
    width: 100%;
    padding-top: 1.4rem;
}
.cellphone-wrap{width:90%;height:0.84rem;margin:0 auto;display: flex;display: -webkit-flex;justify-content: space-between;-webkit-justify-content: space-between;}
.cellphone-wrap .cellphone{width:62%;height:100%;border:#EFEFEF solid 1px;border-radius: 2px;}
.cellphone-wrap .cellphone input,.code-wrap input,.password-wrap .password input{width:92%;height:95%;font-size:0.28rem;padding-left:0.2rem;}
.cellphone-wrap .code-btn{width:35%;height:0.82rem;background:#EAEAEA;color:#717376;border:#EAEAEA solid 1px;border-radius: 2px;font-size:0.28rem;text-align:center;line-height:0.82rem;}
.cellphone-wrap .code-btn.success{background:#FFFFFF;border:1px solid #EB1625;color:#EB1625}
.code-wrap{
    width: 90%;
    height: 0.84rem;
    margin: 0 auto;
    border-radius: 2px;
    border: #efefef solid 1px;
    margin-top: 0.4rem;
}
.code-wrap input{
    width: 100%;
    /* height: 98%; */

}
.password-wrap{
    width: 90%;
    height: 0.84rem;
    margin: 0 auto;
    border-radius: 2px;
    border: #efefef solid 1px;
    margin-top: 0.4rem;
    display: flex;
}
.password-wrap .password{
    width: 80%;
    height: 100%;
}
.sure-btn{
    width: 85%;
    height: 0.8rem;
    margin: 0 auto;
    background: #eb1625;
    font-size: 0.36rem;
    color: #fff;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.4rem;
    border-radius: 4px;
}
.fastreg-wrap{
    width: 85%;
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    margin: 0 auto;
    margin-top: 0.3rem;
}
.fastreg-wrap img{
    width: 0.32rem;
    height: 0.32rem;
    vertical-align: middle;
}


</style>