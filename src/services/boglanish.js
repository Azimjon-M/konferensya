import axiosInstance from "./index.js";

const ep = "boglanish/malumot/";

const getBoglanish = () => axiosInstance.get(ep);

const APIBoglanish = { getBoglanish };

export default APIBoglanish;
