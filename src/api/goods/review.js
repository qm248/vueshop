import config from "../../assets/js/conf/config";
import {request} from '../../assets/js/utils/request';


//获取商品评价
export function getReviewsData(gid="",page=1) {
    return request(config.baseApi+"/home/reviews/index?gid="+gid+"&token="+config.token+"&page="+page)
}