import axiosInstance from ".";

const epVideoGalareya = "home/videogalareya/";
const epPostVideoGalareya = "home/videogalareya/create/";
const epDelVideoGalareya = "home/videogalareya/delete/";
const epPatchVideoGalareya = "home/videogalareya/update/";

const getVideoGalareya = () => axiosInstance.get(epVideoGalareya);
const getByIdVideoGalareya = (id) => {
  return axiosInstance.get(`${epVideoGalareya}${id}`);
};
const postVideoGalareya = (item) => {
  return axiosInstance.post(`${epPostVideoGalareya}`, item);
};
const patchVideoGalareya = (id, item) => {
  return axiosInstance.patch(`${epPatchVideoGalareya}${id}/`, item);
};
const deleteVideoGalareya = (id) => {
  return axiosInstance.delete(`${epDelVideoGalareya}${id}/`);
};

const APIVideoGalareya = {
  getVideoGalareya,
  getByIdVideoGalareya,
  postVideoGalareya,
  patchVideoGalareya,
  deleteVideoGalareya,
};

export default APIVideoGalareya;
