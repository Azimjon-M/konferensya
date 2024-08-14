import axiosInstance from ".";

const epFotoGalareya = "home/fotogalareya/";

const getFotoGalareya = () => axiosInstance.get(epFotoGalareya);
const getByIdFotoGalareya = (id) => {return axiosInstance.get(`${epFotoGalareya}${id}`)};
const postFotoGalareya = (item) => {return axiosInstance.post(`${epFotoGalareya}`, item)};
const patchFotoGalareya = (id, item) => {return axiosInstance.patch(`${epFotoGalareya}${id}/`, item)};
const deleteFotoGalareya = (id) => {return axiosInstance.delete(`${epFotoGalareya}${id}`)};

const APIFotoGalareya = { getFotoGalareya, getByIdFotoGalareya, postFotoGalareya, patchFotoGalareya, deleteFotoGalareya};

export default APIFotoGalareya;
