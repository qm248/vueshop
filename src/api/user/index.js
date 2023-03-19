import config from "../../assets/js/conf/config";
import {request} from "../../assets/js/utils/request";

//会员登录
export function loginData(data) {
    return request(config.baseApi+"/home/user/pwdlogin?token="+config.token,"post",data)
}

//会员安全认证
export function safeUserData(data) {
    return request(config.baseApi+"/home/user/safe?token="+config.token, "post",data)
}

//安全退出
export function safeOutLoginData(data) {
    return request(config.baseApi+"/home/user/safeout?token="+config.token, "post",data)
}

//检测图文验证码是否正确
export function checkVCodeData(vcode){
    return request(config.baseApi+"/home/user/checkvcode?token="+config.token,'post',vcode)
}
//是否注册过会员
export function isRegData(username){
    return request(config.baseApi+"/home/user/isreg?token="+config.token,"post",{username:username});
}

//会员注册
export function regUserData(data){
    return request(config.baseApi+"/home/user/reg?token="+config.token,"post",data);
}
