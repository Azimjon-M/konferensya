import axiosInstance from ".";

const epCarousel = "home/carusel/";
const epPostCarousel = "home/carusel/create/"

const getCarousel = () => axiosInstance.get(epCarousel);
const getByIdCarousel = (id) => {return axiosInstance.get(`${epCarousel}${id}`)};
const postCarousel = (item) => {return axiosInstance.post(`${epPostCarousel}`, item)};
const patchCarousel = (id, item) => {return axiosInstance.patch(`${epCarousel}${id}/`, item)};
const deleteCarousel = (id) => {return axiosInstance.delete(`${epCarousel}${id}`)};

const APICarousel = { getCarousel, getByIdCarousel, postCarousel, patchCarousel, deleteCarousel};

export default APICarousel;
