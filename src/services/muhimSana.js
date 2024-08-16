import axiosInstance from ".";

const ep = "home/muhumsana/";
const epPost = "home/muhumsana/create/";
const epPut = "home/muhumsana/update/";
const epDel = "home/muhumsana/delete/";

const getMuhimSana = () => axiosInstance.get(ep);

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

const APIMuhimSana = { getMuhimSana, getbyId, post, put, del };

export default APIMuhimSana;
