import axiosInstance from ".";

const epFotoGalareya = "home/fotogalareya/";
const epPostFotoGalareya = "home/fotogalareya/create/";
const epDelFotoGalareya = "home/fotogalareya/delete/";
const epPatchFotoGalareya = "home/fotogalareya/update/";

const getFotoGalareya = () => axiosInstance.get(epFotoGalareya);
const getByIdFotoGalareya = (id) => {return axiosInstance.get(`${epFotoGalareya}${id}`)};
const postFotoGalareya = (item) => {return axiosInstance.post(`${epPostFotoGalareya}`, item)};
const patchFotoGalareya = (id, item) => {return axiosInstance.patch(`${epPatchFotoGalareya}${id}/`, item)};
const deleteFotoGalareya = (id) => {return axiosInstance.delete(`${epDelFotoGalareya}${id}/`)};

const APIFotoGalareya = { getFotoGalareya, getByIdFotoGalareya, postFotoGalareya, patchFotoGalareya, deleteFotoGalareya};

export default APIFotoGalareya;
