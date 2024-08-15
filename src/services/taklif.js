import axiosInstance from ".";

const ep = "talab/taklifetilgan/";
const epPost = "talab/taklifetilgan/create/";
const epPut = "talab/taklifetilgan/update/";
const epDel = "talab/taklifetilgan/delete/";

const getTaklif = () => axiosInstance.get(ep);

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

const APITaklif = { getTaklif, getbyId, post, put, del };

export default APITaklif;