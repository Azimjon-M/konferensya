import axiosInstance from ".";

const epBolim = "home/bolim/";
const epPostBolim = "home/bolim/create/";
const epDelBolim = "home/bolim/delete/";
const epPatchBolim = "home/bolim/update/";

const getBolim = () => axiosInstance.get(epBolim);
const getByIdBolim = (id) => {return axiosInstance.get(`${epBolim}${id}`)};
const postBolim = (item) => {return axiosInstance.post(`${epPostBolim}`, item)};
const patchBolim = (id, item) => {return axiosInstance.patch(`${epPatchBolim}${id}/`, item)};
const deleteBolim = (id) => {return axiosInstance.delete(`${epDelBolim}${id}/`)};


const APIBolim = { getBolim, getByIdBolim, postBolim, patchBolim, deleteBolim};

export default APIBolim;
