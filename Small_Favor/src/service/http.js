let userInfo = {
	token: ""
};
if (window.localStorage.getItem("userInfo")) {
	userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
}

const headers = {
	headers: {
		Authorization: userInfo.token,
		method: "login",
		modular: "user",
		appType: "web"
	}
};
export default headers;
