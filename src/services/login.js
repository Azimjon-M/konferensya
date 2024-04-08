import axiosInstance from "./index.js";

const ep = "";

const post = (data) => axiosInstance.post(ep, data);
const AxiosLogin = {
    post,
};

export default AxiosLogin;
