import axiosInstance from ".";

const epMuhumSana = "home/muhumsana/";

const getMuhumSana = () => axiosInstance.get(epMuhumSana);
const getByIdMuhumSana = (id) => {return axiosInstance.get(`${epMuhumSana}${id}`)};
const postMuhumSana = (item) => {return axiosInstance.post(`${epMuhumSana}`, item)};
const patchMuhumSana = (id, item) => {return axiosInstance.patch(`${epMuhumSana}${id}/`, item)};
const deleteMuhumSana = (id) => {return axiosInstance.delete(`${epMuhumSana}${id}`)};

const APIMuhumSana = { getMuhumSana, getByIdMuhumSana, postMuhumSana, patchMuhumSana, deleteMuhumSana};

export default APIMuhumSana;
