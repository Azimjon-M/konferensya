import axios from "axios";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzNDEzNjY4LCJpYXQiOjE3MTMxNTQ0NjgsImp0aSI6ImNmMTYyMDM5MGYxMjQ3ZThiNzliMDVhMGJiZDNhYWZhIiwidXNlcl9pZCI6Mn0.KGdByiVNxXKB8n--T9RKgGmDGGiyXN9ZQqWszWxjyG4";

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
