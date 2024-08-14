import axiosInstance from ".";

const epJarayon = "home/jarayon/";

const getJarayon = () => axiosInstance.get(epJarayon);
const getByIdJarayon = (id) => {return axiosInstance.get(`${epJarayon}${id}`)};
const postJarayon = (item) => {return axiosInstance.post(`${epJarayon}`, item)};
const patchJarayon = (id, item) => {return axiosInstance.patch(`${epJarayon}${id}/`, item)};
const deleteJarayon = (id) => {return axiosInstance.delete(`${epJarayon}${id}`)};

const APIJarayon = { getJarayon, getByIdJarayon, postJarayon, patchJarayon, deleteJarayon};

export default APIJarayon;
