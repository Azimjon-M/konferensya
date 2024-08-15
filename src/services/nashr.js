import axiosInstance from ".";

const ep = "talab/nashr/";
const epPost = "talab/nashr/create/";
const epPut = "talab/nashr/update/";
const epDel = "talab/nashr/delete/";

const getNashr = () => axiosInstance.get(ep);

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

const APINash = { getNashr, getbyId, post, put, del };

export default APINash;
