import axiosInstance from ".";

const ep = "talab/otganvoqea/";
const epPost = "talab/otganvoqea/create/";
const epPut = "talab/otganvoqea/update/";
const epDel = "talab/otganvoqea/delete/";

const getOtganVaqealar = () => axiosInstance.get(ep);

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

const APIOtganVoqealar = { getOtganVaqealar, getbyId, post, put, del };

export default APIOtganVoqealar;
