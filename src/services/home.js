import axiosInstance from ".";

const epC = "home/carusel/";
const epW = "home/welcome/";
const epB = "home/bolim/";
const epJ = "home/jarayon/";
const epMS = "home/muhumsana/";
const epMT = "talab/maqolatalabfile/"

const getCarousel = () => axiosInstance.get(epC);
const getWelcome = () => axiosInstance.get(epW);
const getBolim = () => axiosInstance.get(epB);
const getJarayon = () => axiosInstance.get(epJ);
const getMuhmSana = () => axiosInstance.get(epMS);
const getMaqolaTalab = () => axiosInstance.get(epMT);

const APIHome = { getCarousel, getWelcome, getBolim, getJarayon, getMuhmSana, getMaqolaTalab };

export default APIHome;
