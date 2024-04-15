import axiosInstance from ".";

const endPoints = {
  hammuallif: "qomita/hammuallif/",
  homiy: "qomita/homiy/",
  ilmiydastur: "qomita/ilmiydastur/",
  kotibiyat: "qomita/kotibiyat/",
  logistika: "qomita/logistika/",
  maslahatchi: "qomita/maslahatchi/",
  rais: "qomita/rais/",
  raisorinbosari: "qomita/raisorinbosari/",
  reklama: "qomita/reklama/",
  xazinachi: "qomita/xazinachi/",
};

const createAPIRequest = (endPoint) => () => axiosInstance.get(endPoint);

const APIQomita = Object.fromEntries(
  Object.entries(endPoints).map(([key, value]) => [
    key,
    createAPIRequest(value),
  ])
);

export default APIQomita;
