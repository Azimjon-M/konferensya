import axiosInstance from ".";

const ep = "home/carusel/";

const getCarousel = () => axiosInstance.get(ep);

const APIHome = { getCarousel };

export default APIHome;
