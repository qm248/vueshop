import config from "../../assets/js/conf/config";
import {request} from "../../assets/js/utils/request";

export function getNavsData() {
    return request(config.baseApi+"/home/index/nav?token="+config.token);
}