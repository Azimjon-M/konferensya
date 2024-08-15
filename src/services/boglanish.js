import axiosInstance from "./index.js";

const ep = "boglanish/malumot/";
const epPost = "boglanish/malumot/create/";
const epPut = "boglanish/malumot/update/";
const epDel = "boglanish/malumot/delete/";

const get = () => axiosInstance.get(ep);

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

const APIBoglanish = { get, getbyId, post, put, del };

export default APIBoglanish;
