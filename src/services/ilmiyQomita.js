import axiosInstance from ".";

const ep = "talab/ilmiyqomita/";
const epPost = "talab/ilmiyqomita/create/";
const epPut = "talab/ilmiyqomita/update/";
const epDel = "talab/ilmiyqomita/delete/";

const getIlmiyQomita = () => axiosInstance.get(ep);

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

const APIIlmiyQomita = { getIlmiyQomita, getbyId, post, put, del };

export default APIIlmiyQomita;
