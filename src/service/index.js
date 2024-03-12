import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use((req) => {
    return req;
});

axiosInstance.interceptors.response.use((res) => {
    return res;
});

export default axiosInstance;
