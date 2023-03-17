<template>
    <div class="page">
        <SubHeader title="会员注册" rightText="保存"></SubHeader>
       <div class="main">
            <div class="inputs" style="margin-top:0px"><input type="text" placeholder="验证码" v-model="vCode">
                <div class="vcode-img"><img :src="showCode" alt="" @click="changeVCode($event)"></div>
            </div>
            <div class="cellphone-wrap">
                <div class="cellphone"><input type="tel" placeholder="请输入手机号" v-model="cellphone"></div>
                <div :class="{'code-btn':true, 'success':isSendMsgCode}" @click="getMsgCode()">{{ msgCodeText }}</div>
            </div>
            <div class="code-wrap">
                <input type="text" placeholder="请输入短信验证码" v-model="msgcode">
            </div>
            <div class="password-wrap">
                <div class="password"><input :type="isOpen? 'text':'password'" placeholder="请输入密码" v-model="password"></div>
                <div class="switch-wrap">
                    <van-switch v-model="isOpen" active-color="#eb1625"></van-switch>
                </div>
            </div>
            <div class="sure-btn" @click="submit()">注册</div>
       </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import SubHeader from '../../../components/sub_header/index.vue'
    import {Switch ,Toast} from 'vant'
    import { mapActions } from 'vuex'
    Vue.use(Switch)
    Vue.use(Toast)

    export default {
        name: "reg",
        data(){
            return {
                showCode:this.$config.baseApi+"/vcode/chkcode?token="+this.$config.token,
                vCode:"",
                cellphone:"",
                msgCodeText:"获取短信验证码",
                msgcode:"",
                password:"",
                isOpen:false,
                isSendMsgCode:false,

            }
        },
        components:{
            SubHeader
        },
        created(){
            this.timer=null;
        },
        methods:{
            ...mapActions({
                checkVCode:"user/checkVCode",
                isReg:"user/isReg",
            }),
            //重新获取验证码
            changeVCode(e){
                e.target.src=this.$config.baseApi+"/vcode/chkcode?token="+this.$config.token+'&random'+new Date().getTime();
            },
            async submit(){
                if(this.vCode.match(/^\s*$/)){
                    Toast('请输入图文验证码');
                    return;
                }
                let vcodeData = await this.checkVCode({vcode:this.vCode});
                // if(vcodeData.code !== 200){
                //     Toast('您输入的图文验证码不正确');
                //     return;
                // }
                if(this.cellphone.match(/^\s*$/)){
                    Toast('请输入手机号');
                    return;
                }
                if(!this.cellphone.match(/^1[0-9][0-9]\d{8}$/)){
                    Toast('您输入的手机号格式不正确');
                    return;
                }
                let regData = await this.isReg({username:this.cellphone});
                if(regData.data.isReg=== '1'){
                    Toast("此手机号已注册过，请更换手机号");
                    return;
                }
                if(this.msgcode.match(/^\s*$/)){
                    Toast("请输入短信验证码");
                    return;
                }
                if(this.password.match(/^\s*$/)){
                    Toast("请输入密码");
                    return;
                }

            },
            async getMsgCode(){
                if(isSendMsgCode){
                    if(this.vCode.match(/^\s*$/)){
                        Toast('请输入图文验证码');
                        return;
                    }
                    let vcodeData = await this.checkVCode({vcode:this.vCode});
                    // if(vcodeData.code !== 200){
                    //     Toast('您输入的图文验证码不正确');
                    //     return;
                    // }
                    if(this.cellphone.match(/^\s*$/)){
                        Toast('请输入手机号');
                        return;
                    }
                    if(!this.cellphone.match(/^1[0-9][0-9]\d{8}$/)){
                        Toast('您输入的手机号格式不正确');
                        return;
                    }
                    let regData = await this.isReg({username:this.cellphone});
                    if(regData.data.isReg=== '1'){
                        Toast("此手机号已注册过，请更换手机号");
                        return;
                    }
                    this.isSendMsgCode=false;
                    let time = 10;
                    this.msgCodeText='重新获取('+time+')';
                    this.timer= setInterval(()=>{
                        if(time>0){
                            time--;
                            this.msgCodeText='重新获取('+time+')';
                        }else{
                            clearInterval(this.timer);
                            this.msgCodeText='获取短信验证码';
                            this.isSendMsgCode=true;
                        }
                    },1000)
                

                }
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
.inputs{
    width: 90%;
    height: 0.84rem;
    margin: 0 auto;
    border-radius: 2px;
    border: #efefef solid 1px;
    margin-top: 0.4rem;
    line-height: 0.84rem;
    font-size: 0.28rem;
    padding-left: 0.2rem;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 0.4rem;
}
.inputs .vcode-img{
    width: 20%;
    height: 60%;
    position: absolute;
    right: 0;
    top: 20%;
    border-left: 1px solid #efefef;
    text-align: center;
}
.inputs .vcode-img img{
    width: 80%;
    height: 100%;
}
.inputs input{
    width: 80%;
    height: 88%;
}
</style>