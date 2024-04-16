import axiosInstance from ".";

const endPoints = {
  getHomiy: "qomita/homiy/",
  getMaslahatchi: "qomita/maslahatchi/",
  getHammuallif: "qomita/hammuallif/",
  getRais: "qomita/rais/",
  getRaisorinbosari: "qomita/raisorinbosari/",
  getKotibiyat: "qomita/kotibiyat/",
  getXazinachi: "qomita/xazinachi/",
  getIlmiydastur: "qomita/ilmiydastur/",
  getReklama: "qomita/reklama/",
  getLogistika: "qomita/logistika/",
};

const createAPIRequest = (endPoint) => () => axiosInstance.get(endPoint);

const APIQomita = Object.fromEntries(
  Object.entries(endPoints).map(([key, value]) => [
    key,
    createAPIRequest(value),
  ])
);

export default APIQomita;
