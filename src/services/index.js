import axios from "axios";
// const token = "";

const axiosInstance = axios.create({
  baseURL: "https://conferencesapi.kspi.uz/",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

axiosInstance.interceptors.request.use((req) => {
  return req;
});

axiosInstance.interceptors.response.use((res) => {
  return res;
});

export default axiosInstance;
