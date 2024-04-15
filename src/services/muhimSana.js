import axiosInstance from ".";

const endPoint = "home/muhumsana/";

const getMuhimSana = () => axiosInstance.get(endPoint);

const APIMuhimSana = { getMuhimSana };

export default APIMuhimSana;
