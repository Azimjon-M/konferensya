import axiosInstance from ".";

const epWelcome = "home/welcome/";

const getWelcome = () => axiosInstance.get(epWelcome);
const getByIdWelcome = (id) => {return axiosInstance.get(`${epWelcome}${id}`)};
const postWelcome = (item) => {return axiosInstance.post(`${epWelcome}`, item)};
const patchWelcome = (id, item) => {return axiosInstance.patch(`${epWelcome}${id}/`, item)};
const deleteWelcome = (id) => {return axiosInstance.delete(`${epWelcome}${id}`)};

const APIWelcome = { getWelcome, getByIdWelcome, postWelcome, patchWelcome, deleteWelcome};

export default APIWelcome;
