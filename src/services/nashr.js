import axiosInstance from ".";

const endPoint = "talab/nashr/";

const getNashr = () => axiosInstance.get(endPoint);

const APINash = { getNashr };

export default APINash;
