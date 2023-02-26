import config from "../../assets/js/conf/config";
import {request} from "../../assets/js/utils/request";

//热门搜索
export function getHotKeywordData(){
    return request(config.baseApi+"/home/public/hotwords?token="+config.token);
}