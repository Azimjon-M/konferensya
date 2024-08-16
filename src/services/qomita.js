import axiosInstance from ".";

const epHomiy = "qomita/homiy/";
const epMaslahatchi = "qomita/maslahatchi/";
const epHammuallif = "qomita/hammuallif/";
const epRais = "qomita/rais/";
const epRaisorinbosari = "qomita/raisorinbosari/";
const epKotibiyat = "qomita/kotibiyat/";
const epXazinachi = "qomita/xazinachi/";
const epIlmiydastur = "qomita/ilmiydastur/";
const epReklama = "qomita/reklama/";
const epLogistika = "qomita/logistika/";

const epPostHomiy = "qomita/homiy/create/";
const epPostMaslahatchi = "qomita/maslahatchi/create/";
const epPostHammuallif = "qomita/hammuallif/create/";
const epPostRais = "qomita/rais/create/";
const epPostRaisorinbosari = "qomita/raisorinbosari/create/";
const epPostKotibiyat = "qomita/kotibiyat/create/";
const epPostXazinachi = "qomita/xazinachi/create/";
const epPostIlmiydastur = "qomita/ilmiydastur/create/";
const epPostReklama = "qomita/reklama/create/";
const epPostLogistika = "qomita/logistika/create/";

const epEditHomiy = "qomita/homiy/update/";
const epEditMaslahatchi = "qomita/maslahatchi/update/";
const epEditHammuallif = "qomita/hammuallif/update/";
const epEditRais = "qomita/rais/update/";
const epEditRaisorinbosari = "qomita/raisorinbosari/update/";
const epEditKotibiyat = "qomita/kotibiyat/update/";
const epEditXazinachi = "qomita/xazinachi/update/";
const epEditIlmiydastur = "qomita/ilmiydastur/update/";
const epEditReklama = "qomita/reklama/update/";
const epEditLogistika = "qomita/logistika/update/";

const epDelHomiy = "qomita/homiy/delete/";
const epDelMaslahatchi = "qomita/maslahatchi/delete/";
const epDelHammuallif = "qomita/hammuallif/delete/";
const epDelRais = "qomita/rais/delete/";
const epDelRaisorinbosari = "qomita/raisorinbosari/delete/";
const epDelKotibiyat = "qomita/kotibiyat/delete/";
const epDelXazinachi = "qomita/xazinachi/delete/";
const epDelIlmiydastur = "qomita/ilmiydastur/delete/";
const epDelReklama = "qomita/reklama/delete/";
const epDelLogistika = "qomita/logistika/delete/";

const getHomiy = () => axiosInstance.get(epHomiy);
const getMaslahatchi = () => axiosInstance.get(epMaslahatchi);
const getHammuallif = () => axiosInstance.get(epHammuallif);
const getRais = () => axiosInstance.get(epRais);
const getRaisorinbosari = () => axiosInstance.get(epRaisorinbosari);
const getKotibiyat = () => axiosInstance.get(epKotibiyat);
const getXazinachi = () => axiosInstance.get(epXazinachi);
const getIlmiydastur = () => axiosInstance.get(epIlmiydastur);
const getReklama = () => axiosInstance.get(epReklama);
const getLogistika = () => axiosInstance.get(epLogistika);

const postHomiy = (item) => axiosInstance.post(`${epPostHomiy}`, item);
const postMaslahatchi = (item) =>
    axiosInstance.post(`${epPostMaslahatchi}`, item);
const postHammuallif = (item) =>
    axiosInstance.post(`${epPostHammuallif}`, item);
const postRais = (item) => axiosInstance.post(`${epPostRais}`, item);
const postRaisorinbosari = (item) =>
    axiosInstance.post(`${epPostRaisorinbosari}`, item);
const postKotibiyat = (item) => axiosInstance.post(`${epPostKotibiyat}`, item);
const postXazinachi = (item) => axiosInstance.post(`${epPostXazinachi}`, item);
const postIlmiydastur = (item) =>
    axiosInstance.post(`${epPostIlmiydastur}`, item);
const postReklama = (item) => axiosInstance.post(`${epPostReklama}`, item);
const postLogistika = (item) => axiosInstance.post(`${epPostLogistika}`, item);

const editHomiy = (id, item) =>
    axiosInstance.patch(`${epEditHomiy}${id}/`, item);
const editMaslahatchi = (id, item) =>
    axiosInstance.patch(`${epEditMaslahatchi}${id}/`, item);
const editHammuallif = (id, item) =>
    axiosInstance.patch(`${epEditHammuallif}${id}/`, item);
const editRais = (id, item) => axiosInstance.patch(`${epEditRais}${id}/`, item);
const editRaisorinbosari = (id, item) =>
    axiosInstance.patch(`${epEditRaisorinbosari}${id}/`, item);
const editKotibiyat = (id, item) =>
    axiosInstance.patch(`${epEditKotibiyat}${id}/`, item);
const editXazinachi = (id, item) =>
    axiosInstance.patch(`${epEditXazinachi}${id}/`, item);
const editIlmiydastur = (id, item) =>
    axiosInstance.patch(`${epEditIlmiydastur}${id}/`, item);
const editReklama = (id, item) =>
    axiosInstance.patch(`${epEditReklama}${id}/`, item);
const editLogistika = (id, item) =>
    axiosInstance.patch(`${epEditLogistika}${id}/`, item);

const delHomiy = (id) => axiosInstance.delete(`${epDelHomiy}${id}/`);
const delMaslahatchi = (id) =>
    axiosInstance.delete(`${epDelMaslahatchi}${id}/`);
const delHammuallif = (id) => axiosInstance.delete(`${epDelHammuallif}${id}/`);
const delRais = (id) => axiosInstance.delete(`${epDelRais}${id}/`);
const delRaisorinbosari = (id) =>
    axiosInstance.delete(`${epDelRaisorinbosari}${id}/`);
const delKotibiyat = (id) => axiosInstance.delete(`${epDelKotibiyat}${id}/`);
const delXazinachi = (id) => axiosInstance.delete(`${epDelXazinachi}${id}/`);
const delIlmiydastur = (id) =>
    axiosInstance.delete(`${epDelIlmiydastur}${id}/`);
const delReklama = (id) => axiosInstance.delete(`${epDelReklama}${id}/`);
const delLogistika = (id) => axiosInstance.delete(`${epDelLogistika}${id}/`);

const APIQomita = {
    getHomiy,
    getMaslahatchi,
    getHammuallif,
    getRais,
    getRaisorinbosari,
    getKotibiyat,
    getXazinachi,
    getIlmiydastur,
    getReklama,
    getLogistika,

    postHomiy,
    postMaslahatchi,
    postHammuallif,
    postRais,
    postRaisorinbosari,
    postKotibiyat,
    postXazinachi,
    postIlmiydastur,
    postReklama,
    postLogistika,

    editHomiy,
    editMaslahatchi,
    editHammuallif,
    editRais,
    editRaisorinbosari,
    editKotibiyat,
    editXazinachi,
    editIlmiydastur,
    editReklama,
    editLogistika,

    delHomiy,
    delMaslahatchi,
    delHammuallif,
    delRais,
    delRaisorinbosari,
    delKotibiyat,
    delXazinachi,
    delIlmiydastur,
    delReklama,
    delLogistika,
};

export default APIQomita;
