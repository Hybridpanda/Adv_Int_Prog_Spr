import axios from "axios";
import Api from "../apiUrl";
import Headers from "../http";
import qs from "qs";

export const login2 = async data => {
	return await axios.get(`${Api.login}?${qs.stringify(data)}`, Headers).then(response => {
		console.log(response);
		return {
			status: response.status,
			statusText: response.statusText,
			result: response.data
		};
	});
};


export const login = async data => {
	return await axios({
        method: 'get',
        url: Api.login,
        data: data
      });
};




