// 对api进行统一管理
import requests from "./request";

export const cateList=()=>{
    requests({url:'/app/getCateList.do', method:'GET'})
}