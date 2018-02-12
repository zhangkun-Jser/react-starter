import {getData,postData} from "../utils/fetchData"
import {  message,notification     } from 'antd';
import NProgress from 'nprogress';

export function act_index_tit(data) {
    return {
        type: "INDEX_TIT",
        data: data
    };
}
export function act_list(data) {
    return {
        type: "LIST",
        data: data
    };
}


//整合的一个get请求
export const get = (url = "", parm = {}, succeed = function () {
},erro=()=>{}) => async (dispatch, getState) => {
    try {
        NProgress.start();
        let response = await getData(url, parm);
        console.log(response.data)
        if (response.status) {
            succeed(response,dispatch, getState);
        } else {
            erro()
            notification['error']({
                message: '警告',
                description: response.data.errorMsg,
            });
        }
        NProgress.done();
    } catch (error) {
        console.log('error: ', error)
    }
}