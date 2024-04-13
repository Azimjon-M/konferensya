import axiosInstance from ".";

const endPointHammuallif = "qomita/hammuallif/";
const endPointHomiy = "qomita/homiy/";
const endPointIlmiydastur = "qomita/ilmiydastur/";
const endPointKotibiyat = "qomita/kotibiyat/";
const endPointLogistika = "qomita/logistika/";
const endPointMaslahatchi = "qomita/maslahatchi/";
const endPointRais = "qomita/rais/";
const endPointRaisorinbosari = "qomita/raisorinbosari/";
const endPointReklama = "qomita/reklama/";
const endPointXazinachi = "qomita/xazinachi/";

const getHammuallif = () => axiosInstance.get(endPointHammuallif);
const getHomiy = () => axiosInstance.get(endPointHomiy);
const getIlmiydastur = () => axiosInstance.get(endPointIlmiydastur);
const getKotibiyat = () => axiosInstance.get(endPointKotibiyat);
const getLogistika = () => axiosInstance.get(endPointLogistika);
const getMaslahatchi = () => axiosInstance.get(endPointMaslahatchi);
const getRais = () => axiosInstance.get(endPointRais);
const getRaisorinbosari = () => axiosInstance.get(endPointRaisorinbosari);
const getReklama = () => axiosInstance.get(endPointReklama);
const getXazinachi = () => axiosInstance.get(endPointXazinachi);

const APIQomita = {
  getHammuallif,
  getHomiy,
  getIlmiydastur,
  getKotibiyat,
  getLogistika,
  getMaslahatchi,
  getRais,
  getRaisorinbosari,
  getReklama,
  getXazinachi,
};

export default APIQomita;
