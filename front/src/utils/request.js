import axios from "axios";
import {getCaCheOrgId, getCaCheSession, removeLoaclStorage} from "./localStorage";
import {Message} from 'element-ui';
import router from "../router";
import Vue from 'vue'

const service = axios.create({
    timeout: 15000,   // 超时
});

// // 拦截器
// // 添加请求拦截器
// service.interceptors.request.use(function (config) {
//     if(config.method === 'get' || config.method === 'delete'){
//         config.params['session'] = getCaCheSession()
//         config.params['org_id'] = getCaCheOrgId()
//     }else{
//         config.data['session'] = getCaCheSession()
//         config.data['org_id'] = getCaCheOrgId()
//     }
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });
//
// // 添加响应拦截器
// service.interceptors.response.use((res) => {
//     // 不为0，即接口异常时
//     if (res.data.resCode !== 0) {
//         if (res.data.resCode === -1000) {
//             removeLoaclStorage();
//             router.currentRoute.path !== 'login' &&
//             router.replace({
//                 path: 'login',
//                 query: {redirect: router.currentRoute.path},
//             })
//         }else{
//             Message.warning(res.data.resMsg);
//         }
//         return Promise.reject(res.data);
//     } else {
//         return res.data
//     }
// },(error) => {
//     // 对响应错误做点什么
//     Message.error('接口异常:' + error);
//     return Promise.reject(error);
// });


Vue.prototype.$_get = function _get(url, data={}){
     return service.request({
        method: "get",
        url: url,
        params:data
    })
};

Vue.prototype.$_del = function _del(url, data={}){
     return service.request({
        method: "delete",
        url: url,
        params:data
    })
};

Vue.prototype.$_post = function _post(url, data={}){
     return service.request({
        method: "post",
        url: url,
        data:data
     })
};

Vue.prototype.$_put = function _put(url, data={}){
     return service.request({
        method: "put",
        url: url,
        data:data
    })
}