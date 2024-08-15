import axiosInstance from ".";

const epWelcome = "home/welcome/";
const epPostWelcome = "home/welcome/create/";
const epDelWelcome = "home/welcome/delete/";
const epPatchWelcome = "home/welcome/update/";

const getWelcome = () => axiosInstance.get(epWelcome);
const getByIdWelcome = (id) => {return axiosInstance.get(`${epWelcome}${id}`)};
const postWelcome = (item) => {return axiosInstance.post(`${epPostWelcome}`, item)};
const patchWelcome = (id, item) => {return axiosInstance.patch(`${epPatchWelcome}${id}/`, item)};
const deleteWelcome = (id) => {return axiosInstance.delete(`${epDelWelcome}${id}/`)};

const APIWelcome = { getWelcome, getByIdWelcome, postWelcome, patchWelcome, deleteWelcome};

export default APIWelcome;
