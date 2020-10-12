import { message } from "antd";

const HISTORY = "http://39.97.182.43:8010/art/api/action/";

/**
 * the address of the port
 */
const Api = {
	login: HISTORY + "login/login", //login
	getUserInfo: HISTORY + "user/" //port 2
};


export default Api;

/**
 * deal with the return status
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
