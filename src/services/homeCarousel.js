import axiosInstance from ".";

const epCarousel = "home/carusel/";
const epPostCarousel = "home/carusel/create/";
const epDelCarousel = "home/carusel/delete/";
const epPatchCarousel = "home/carusel/update/";

const getCarousel = () => axiosInstance.get(epCarousel);

const getByIdCarousel = (id) => {
  return axiosInstance.get(`${epCarousel}${id}`);
};
const postCarousel = (item) => axiosInstance.post(`${epPostCarousel}`, item);

const patchCarousel = (id, item) => {
  return axiosInstance.patch(`${epPatchCarousel}${id}/`, item);
};
const deleteCarousel = (id) => {
  return axiosInstance.delete(`${epDelCarousel}${id}/`);
};

const APICarousel = {
  getCarousel,
  getByIdCarousel,
  postCarousel,
  patchCarousel,
  deleteCarousel,
};

export default APICarousel;
