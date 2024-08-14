import axiosInstance from ".";

const epBolim = "home/bolim/";

const getBolim = () => axiosInstance.get(epBolim);
const getByIdBolim = (id) => {return axiosInstance.get(`${epBolim}${id}`)};
const postBolim = (item) => {return axiosInstance.post(`${epBolim}`, item)};
const patchBolim = (id, item) => {return axiosInstance.patch(`${epBolim}${id}/`, item)};
const deleteBolim = (id) => {return axiosInstance.delete(`${epBolim}${id}`)};


const APIBolim = { getBolim, getByIdBolim, postBolim, patchBolim, deleteBolim};

export default APIBolim;
