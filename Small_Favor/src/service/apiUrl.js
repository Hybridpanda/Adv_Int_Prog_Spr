import { message } from "antd";

const HISTORY = "http://39.97.182.43:8010/art/api/action/";

/**
 * 定义接口地址
 */
const Api = {
	login: HISTORY + "login/login", //登陆
	getUserInfo: HISTORY + "user/" //接口2
};


export default Api;

/**
 * 处理接口的返回值status
 * @param {string} status 
 * 
 */
export function processingReturnValue(status) {
    console.log(status, "6666");
    switch (status) {
        case 404:
            message.error("error 404");
            return;
        case 500:
            message.warning("error 500");
            return;
    }
}
