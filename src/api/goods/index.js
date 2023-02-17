import config from "../../assets/js/conf/config";
import {request} from '../../assets/js/utils/request';

export function getClassifyData(){
    return request(config.baseApi+'/home/category/menu?token='+config.token)
}

export function getGoodsData(cid=""){
    return request(config.baseApi+'/home/category/show?cid='+cid+'&token='+config.token)
}

export function getDetailsData(gid=""){
    return request(config.baseApi+'/home/goods/info?gid='+gid+'&type=details&token='+config.token)

}

export function getSpecData(gid=""){
    return request(config.baseApi+"/home/goods/info?gid="+gid+"&type=spec&token="+config.token);
}

export function addFavData(data){
    return request(config.baseApi+"/goods/fav?uid="+data.uid+"&gid="+data.gid+"&token="+config.token+"");
}