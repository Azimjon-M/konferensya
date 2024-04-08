import axiosInstance from ".";

const epC = "home/carusel/";
const epW = "home/welcome/"

const getCarousel = () => axiosInstance.get(epC);
const getWelcome = () => axiosInstance.get(epW);

const APIHome = { getCarousel, getWelcome };

export default APIHome;
