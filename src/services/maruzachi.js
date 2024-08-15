import axiosInstance from ".";

const ep = "talab/asosiymaruzachi/";
const epPost = "talab/asosiymaruzachi/create/";
const epPut = "talab/asosiymaruzachi/update/";
const epDel = "talab/asosiymaruzachi/delete/";

const getMaruza = () => axiosInstance.get(ep);

const getbyId = (id) => {
  return axiosInstance.get(`${ep}${id}/`);
};
const post = (item) => {
  return axiosInstance.post(`${epPost}`, item);
};
const put = (id, item) => {
  return axiosInstance.put(`${epPut}${id}/`, item);
};
const del = (id) => {
  return axiosInstance.delete(`${epDel}${id}/`);
};

const APIMaruza = { getMaruza, getbyId, post, put, del };

export default APIMaruza;
