import axiosInstance from ".";

const epJarayon = "home/jarayon/";
const epPostJarayon = "home/jarayon/create/";
const epDelJarayon = "home/jarayon/delete/";
const epPatchJarayon = "home/jarayon/update/";

const getJarayon = () => axiosInstance.get(epJarayon);
const getByIdJarayon = (id) => {return axiosInstance.get(`${epJarayon}${id}`)};
const postJarayon = (item) => {return axiosInstance.post(`${epPostJarayon}`, item)};
const patchJarayon = (id, item) => {return axiosInstance.patch(`${epPatchJarayon}${id}/`, item)};
const deleteJarayon = (id) => {return axiosInstance.delete(`${epDelJarayon}${id}/`)};

const APIJarayon = { getJarayon, getByIdJarayon, postJarayon, patchJarayon, deleteJarayon};

export default APIJarayon;