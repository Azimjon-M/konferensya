import axiosInstance from ".";

const endPoint = "talab/asosiymaruzachi/";

const getMaruza = () => axiosInstance.get(endPoint);

const APIMaruza = { getMaruza };

export default APIMaruza;
