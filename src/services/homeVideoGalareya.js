import axiosInstance from ".";

const epVideoGalareya = "home/videogalareya/"

const getVideoGalareya = () => axiosInstance.get(epVideoGalareya);
const getByIdVideoGalareya = (id) => {return axiosInstance.get(`${epVideoGalareya}${id}`)};
const postVideoGalareya = (item) => {return axiosInstance.post(`${epVideoGalareya}`, item)};
const patchVideoGalareya = (id, item) => {return axiosInstance.patch(`${epVideoGalareya}${id}/`, item)};
const deleteVideoGalareya = (id) => {return axiosInstance.delete(`${epVideoGalareya}${id}`)};

const APIVideoGalareya = { getVideoGalareya, getByIdVideoGalareya, postVideoGalareya, patchVideoGalareya, deleteVideoGalareya};

export default APIVideoGalareya;
