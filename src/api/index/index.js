import config from "../../assets/js/conf/config";
import {request} from "../../assets/js/utils/request";

export function getNavsData() {
    return request(config.baseApi+"/home/index/nav?token="+config.token);
}

export function getSwiperData() {
    return request(config.baseApi+"/home/index/slide?token="+config.token);
}

export function getGoodsData(){
    return request(config.baseApi+'/home/index/goodsLevel?token='+config.token)
}

export function getRecomGoodsData(){
    return request(config.baseApi+'/home/index/recom?token='+config.token)
}