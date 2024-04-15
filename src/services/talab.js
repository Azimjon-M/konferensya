import axiosInstance from "./index.js";

const epF = "talab/maqolatalabfile/"
const epT = "talab/maqolatalaba/"
const getMaqolaTalab = () => axiosInstance.get(epF);
const getMaqolaTalablar = () => axiosInstance.get(epT);

const APIMaqolaTalab = { getMaqolaTalab, getMaqolaTalablar };

export default APIMaqolaTalab;
