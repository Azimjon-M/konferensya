import axiosInstance from "./index";

const ep = "talab/maqolatalabfile/";
const epPost = "talab/maqolatalabfile/create/";
const epPut = "talab/maqolatalabfile/update/";
const epDel = "talab/maqolatalabfile/delete/";
const epTalab = "talab/maqolatalaba/";
const epTalabPost = "talab/maqolatalaba/create/";
const epTalabPut = "talab/maqolatalaba/update/";
const epTalabDel = "talab/maqolatalaba/delete/";

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

const getTalab = () => axiosInstance.get(epTalab);
const getbyIdTalab = (id) => {
  return axiosInstance.get(`${epTalab}${id}/`);
};
const postTalab = (item) => {
  return axiosInstance.post(`${epTalabPost}`, item);
};
const putTalab = (id, item) => {
  return axiosInstance.put(`${epTalabPut}${id}/`, item);
};
const delTalab = (id) => {
  return axiosInstance.delete(`${epTalabDel}${id}/`);
};

const APIMaqolaTalab = { get, getbyId, post, put, del, getTalab, getbyIdTalab, postTalab, putTalab, delTalab };

export default APIMaqolaTalab;