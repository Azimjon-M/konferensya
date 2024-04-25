import axiosInstance from ".";

const ep = "token/";

const getToken = (item) => axiosInstance.post(ep, item);

const APItoken = { getToken };

export default APItoken;
