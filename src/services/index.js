import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzOTYzNTY1LCJpYXQiOjE3MjM3MDQzNjUsImp0aSI6ImIxY2RmNzJlYjhiYjRiOWJhOWExNDJkZjM0ZjMxMmE0IiwidXNlcl9pZCI6MX0.04l4ygrOGjJpZYv3JPS6haGtApeNgjTDW2u-3ozr-Ww";

const axiosInstance = axios.create({
  baseURL: "https://conferencesapi.kspi.uz/",
  headers: {
    "Content-Type": "multipart/form-data",
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
