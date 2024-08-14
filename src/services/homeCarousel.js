import axiosInstance from ".";

const epCarousel = "home/carusel/";

const getCarousel = () => axiosInstance.get(epCarousel);
const getByIdCarousel = (id) => {return axiosInstance.get(`${epCarousel}${id}`)};
const postCarousel = (item) => {return axiosInstance.post(`${epCarousel}`, item)};
const patchCarousel = (id, item) => {return axiosInstance.patch(`${epCarousel}${id}/`, item)};
const deleteCarousel = (id) => {return axiosInstance.delete(`${epCarousel}${id}`)};

const APICarousel = { getCarousel, getByIdCarousel, postCarousel, patchCarousel, deleteCarousel};

export default APICarousel;
