import axios from "axios";
import Api from './apiUrl'
import Headers from './http'
import qs from 'qs'

export const getUserInfo = async (data) => {
	return await axios.get(`${Api.getUserInfo}?${qs.stringify(data)}`,Headers).then(response => {
		console.log(response)
		return {
			status: response.status,
			statusText: response.statusText,
			result: response.data
		};
	});
};



