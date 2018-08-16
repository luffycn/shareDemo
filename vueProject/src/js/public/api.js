/* eslint-disable */
/**
 * axios 访问后台封装，拦截处理等
 * Luffy 2018-7-27
 */
import Vue from 'vue'
import { router, CONST, tools, storages, axios, store } from '@/js/public/port'

// 路由拦截器
router.beforeEach((to, from, next) => {
    next();
})

axios.defaults.timeout = 10000
axios.defaults.responseType = "json"
axios.defaults.withCredentials = true // 是否允许带cookie这些
axios.defaults.headers = {
    "Tech": "VUE", //说明从Vue过去的请求,
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json;charset=UTF-8"
}

let removeUser = function () {
    storages.removeSession("user");
    storages.removeSession("userName");
    storages.removeSession("money");
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

//返回状态判断(响应拦截器)
axios.interceptors.response.use(
    res => {
        //对响应数据处理
        if (res.data && !res.data.success) {
            return Promise.reject(res.data.msg === null ? res.data.message : res.data.msg)
        }
        return res.data
    },
    error => {
        return Promise.reject(error.response.status)
    }

)

const Axios = (method, url, data, success, showload = true) => {
    data = filterParams(data);
    // let params = null;
    // if (method === 'get') {
    //     params = data;
    //     data = null;
    // } else {
    //     data = JSON.stringify(data);
    // }
    let params = data;
    axios({
        method,
        url,
        baseURL: CONST.AGENCY,
        data,
        params,
        withCredentials: true,
        // onUploadProgress: function (progressEvent) {
        //     // 对原生进度事件的处理
        //   },
        transformRequest: [function (data) {
            if (showload) {
                store.commit('showLoading',true);
            }
            return data;

        }],
        transformResponse: [function (data) {
            store.commit('showLoading',false);
            return data;

        }],
    }).then(function (response) {
        success(true, response.data);
    }).catch(function (error) {
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            tools.showMessege(getErrMess(error.response.status));
            success(false, getErrMess(error.response.status))
        } else {
            // Something happened in setting up the request that triggered an Error
            tools.showMessege(getErrMess(error));
            success(false, error);
        }
    });
}



const filterParams = (params) => { //过滤处理参数
    for (let index in params) {
        if (params[index] === null)
            delete params[index];
        else {
            switch (typeof (params[index])) {
                case 'string':
                    params[index] = params[index].trim();
                    break;
                case 'object':
                    params[index] = filterParams(params[index]);
                    break;
                case 'array':
                    params[index] = filterParams(params[index]);
                    break;
            }
        }
    }
    return params;

}


const getErrMess = (status) => {
    switch (status) {
        case 600:
            removeUser()
            return '登录状态信息过期,请重新登录'
        case 606:
            removeUser()
            return '您的账号，在别处登录，已踢出'
        case 607:
            removeUser()
            return '网站维护'
        case 400:
            return '错误的请求'
        case 407:
            return '资源未授权'
        case 403:
            return '所在地区禁止访问'
        case 404:
            return '资源不存在'
        case 500:
            return '服务出错了'
        case 502:
            return '服务器暂时不可用'
        case 503:
            return '服务忙'
        case 504:
            return '请求超时'
        case 701: // 无效的授权
            return '登录已过期'
        case 702:
            return '账号未激活'
        case 703:
            return '账号被冻结'
        case 704:
            return '账号已停用'
        case 705:
            return '账号审核失败'
        case 706:
            return '账号被踢出'
        case 707:
            return '非法的授权'
        case 708:
            return '账号密码错误'
        case 709:
            return '登录超时请重新登录'
    }
}

export default {
    Axios
}
