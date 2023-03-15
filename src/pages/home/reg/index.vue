<template>
    <div class="page">
        <SubHeader title="会员注册" rightText="保存"></SubHeader>
       <div class="main">
            <div class="code-wrap" style="margin-top:0px"><input type="text" placeholder="验证码"
                v-model="cellphone"></div>
            <div class="password-wrap">
                <div class="password"><input type="text" placeholder="请输入手机号"
                v-model="password"></div>
            </div>
            <div class="password-wrap">
                <div class="password"><input type="text" placeholder="请输入短信验证码"
                v-model="password"></div>
            </div>
            <div class="password-wrap">
                <div class="password"><input type="text" placeholder="请输入密码"
                v-model="password"></div>
            </div>
            <div class="sure-btn" @click="doLogin">注册</div>
            
       </div>
    </div>
</template>

<script>
    import SubHeader from '../../../components/sub_header/index.vue'

    export default {
        name: "reg",
        data(){
            return {
              
            }
        },
        components:{
            SubHeader
        },
        methods:{
           
                        
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

</style>