import axios from "axios";
const token = JSON.parse(localStorage.getItem("data")).token;

const axiosInstance = axios.create({
    baseURL: "https://conferencesapi.kspi.uz/",
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

axiosInstance.interceptors.request.use((req) => {
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

axiosInstance.interceptors.response.use((res) => {
    return res;
});

export default axiosInstance;
