import axiosInstance from "./index.js";

const epF = "talab/maqolatalabfile/"
const epT = "talab/maqolatalaba/"
const epX = "talab/xalqaromaqola/"
const getMaqolaTalab = () => axiosInstance.get(epF);
const getMaqolaTalablar = () => axiosInstance.get(epT);
const getXalqaroTalab = () => axiosInstance.get(epX);

const APIMaqolaTalab = { getMaqolaTalab, getMaqolaTalablar,getXalqaroTalab };

export default APIMaqolaTalab;
