import axios from "axios";
const token =
<<<<<<< HEAD
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzNDEzNjY4LCJpYXQiOjE3MTMxNTQ0NjgsImp0aSI6ImNmMTYyMDM5MGYxMjQ3ZThiNzliMDVhMGJiZDNhYWZhIiwidXNlcl9pZCI6Mn0.KGdByiVNxXKB8n--T9RKgGmDGGiyXN9ZQqWszWxjyG4";
=======
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMjQzMjkwLCJpYXQiOjE3MTI5ODQwOTAsImp0aSI6ImEyNTk2MmRiMjY3ZTRjNGQ4YWEyMDZkZTI3NzNkZjQxIiwidXNlcl9pZCI6Mn0.Y9DDvQr-Yi_HygulT4vNyaPFII2zNb5aCUpWHx6Ap94";
>>>>>>> ffdf5c638d486c022e07f0b3aa2ad2d7c366bf30

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
