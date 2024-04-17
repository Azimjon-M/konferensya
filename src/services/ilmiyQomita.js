import axiosInstance from ".";

const endPoint = "talab/ilmiyqomita/";

const getIlmiyQomita = () => axiosInstance.get(endPoint);

const APIIlmiyQomita = { getIlmiyQomita };

export default APIIlmiyQomita;
