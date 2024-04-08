import axiosInstance from ".";

const ep = "document/carusel/";

const getCarousel = () => axiosInstance.get(ep);

const APIHome = { getCarousel };

export default APIHome;
