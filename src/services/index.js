import axios from "axios";
const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyODA4MzY0LCJpYXQiOjE3MTI1NDkxNjQsImp0aSI6IjNhY2Y2ZGUyM2E5MzRmZmU4MDBkNjlkOTdiMGZlMjdhIiwidXNlcl9pZCI6Mn0.kPkbksMsz2vZ9hj6DzR_1C5_oSPlCztOu00Stb1adwU";

const axiosInstance = axios.create({
    baseURL: "https://konfirensiya.pythonanywhere.com/",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});

axiosInstance.interceptors.request.use((req) => {
    return req;
});

axiosInstance.interceptors.response.use((res) => {
    return res;
});

export default axiosInstance;
