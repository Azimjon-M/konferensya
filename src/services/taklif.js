import axiosInstance from ".";

const endPoint = "talab/taklifetilgan/";

const getTaklif = () => axiosInstance.get(endPoint);

const APITaklif = { getTaklif };

export default APITaklif;