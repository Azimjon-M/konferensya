import React, { useEffect, useState } from "react";
import APIQomita from "../../../services/qomita";
import { Formik, useFormik } from "formik";
import MyTextInput from "../../../components/MyTextInput";

const Qomita = () => {
    const [editHomiy, setEditHomiy] = useState(false);
    const [idHomiy, setIdHomiy] = useState(null);
    const [dataHomiy, setDataHomiy] = useState([]);

    const [editMaslahatchi, setEditMaslahatchi] = useState(false);
    const [idMaslahatchi, setIdMaslahatchi] = useState(null);
    const [dataMaslahatchi, setDataMaslahatchi] = useState([]);

    const [editHammuallif, setEditHammuallif] = useState(false);
    const [idHammuallif, setIdHammuallif] = useState(null);
    const [dataHammuallif, setDataHammuallif] = useState([]);

    const [editRais, setEditRais] = useState(false);
    const [idRais, setIdRais] = useState(null);
    const [dataRais, setDataRais] = useState([]);

    const [editRaisOrinbosari, setEditRaisOrinbosari] = useState(false);
    const [idRaisOrinbosari, setIdRaisOrinbosari] = useState(null);
    const [dataRaisOrinbosari, setDataRaisOrinbosari] = useState([]);

    const [editKotibyat, setEditKotibyat] = useState(false);
    const [idKotibyat, setIdKotibyat] = useState(null);
    const [dataKotibyat, setDataKotibyat] = useState([]);

    const [editHazinabon, setEditHazinabon] = useState(false);
    const [idHazinabon, setIdHazinabon] = useState(null);
    const [dataHazinabon, setDataHazinabon] = useState([]);

    const [editIlmiyDastur, setEditIlmiyDastur] = useState(false);
    const [idIlmiyDastur, setIdIlmiyDastur] = useState(null);
    const [dataIlmiyDastur, setDataIlmiyDastur] = useState([]);

    const [editReklama, setEditReklama] = useState(false);
    const [idReklama, setIdReklama] = useState(null);
    const [dataReklama, setDataReklama] = useState([]);

    const [editLogistika, setEditLogistika] = useState(false);
    const [idLogistika, setIdLogistika] = useState(null);
    const [dataLogistika, setDataLogistika] = useState([]);

    const getDataHomiy = async () => {
        await APIQomita.getHomiy()
            .then((res) => setDataHomiy(res.data))
            .catch((err) => console.log(err));
    };
    const getDataMaslahatchi = async () => {
        await APIQomita.getMaslahatchi()
            .then((res) => setDataMaslahatchi(res.data))
            .catch((err) => console.log(err));
    };
    const getDataHammuallif = async () => {
        await APIQomita.getHammuallif()
            .then((res) => setDataHammuallif(res.data))
            .catch((err) => console.log(err));
    };
    const getDataRais = async () => {
        await APIQomita.getRais()
            .then((res) => setDataRais(res.data))
            .catch((err) => console.log(err));
    };

    const getDataRaisOrinbosari = async () => {
        await APIQomita.getRaisorinbosari()
            .then((res) => setDataRaisOrinbosari(res.data))
            .catch((err) => console.log(err));
    };
    const getDataKotibyat = async () => {
        await APIQomita.getKotibiyat()
            .then((res) => setDataKotibyat(res.data))
            .catch((err) => console.log(err));
    };

    const getDataHazinabon = async () => {
        await APIQomita.getXazinachi()
            .then((res) => setDataHazinabon(res.data))
            .catch((err) => console.log(err));
    };
    const getDataIlmiyDastur = async () => {
        await APIQomita.getIlmiydastur()
            .then((res) => setDataIlmiyDastur(res.data))
            .catch((err) => console.log(err));
    };
    const getDataReklama = async () => {
        await APIQomita.getReklama()
            .then((res) => setDataReklama(res.data))
            .catch((err) => console.log(err));
    };
    const getDataLogistika = async () => {
        await APIQomita.getLogistika()
            .then((res) => setDataLogistika(res.data))
            .catch((err) => console.log(err));
    };

    const formikHomiy = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: async (values, onSubmitProps) => {
            const data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            try {
                // POST
                if (!editHomiy) {
                    await APIQomita.postHomiy(data);
                }
                // PATCH
                else {
                    await APIQomita.editHomiy(idHomiy, data);
                    getDataHomiy();
                    setEditHomiy(false);
                    setIdHomiy(null);
                }
                onSubmitProps.resetForm();
                getDataHomiy();
            } catch (error) {
                console.error("Xatolik sodir bo'ldi!", error);
                onSubmitProps.resetForm();
            }
        },
    });

    const formikMaslahatchi = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: async (values, onSubmitProps) => {
            const data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            try {
                // POST
                if (!editMaslahatchi) {
                    await APIQomita.postMaslahatchi(data);
                }
                // PATCH
                else {
                    await APIQomita.editMaslahatchi(idMaslahatchi, data);
                    getDataMaslahatchi();
                    setEditMaslahatchi(false);
                    setIdMaslahatchi(null);
                }
                onSubmitProps.resetForm();
                getDataMaslahatchi();
            } catch (error) {
                console.error("Xatolik sodir bo'ldi!", error);
                onSubmitProps.resetForm();
            }
        },
    });

    const formikHammuallif = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: async (values, onSubmitProps) => {
            const data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            try {
                // POST
                if (!editHammuallif) {
                    await APIQomita.postHammuallif(data);
                }
                // PATCH
                else {
                    await APIQomita.editHammuallif(idHammuallif, data);
                    getDataHammuallif();
                    setEditHammuallif(false);
                    setIdHammuallif(null);
                }
                onSubmitProps.resetForm();
                getDataHammuallif();
            } catch (error) {
                console.error("Xatolik sodir bo'ldi!", error);
                onSubmitProps.resetForm();
            }
        },
    });
    const formikRais = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: async (values, onSubmitProps) => {
            const data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            try {
                // POST
                if (!editRais) {
                    await APIQomita.postRais(data);
                }
                // PATCH
                else {
                    await APIQomita.editRais(idRais, data);
                    getDataRais();
                    setEditRais(false);
                    setIdRais(null);
                }
                onSubmitProps.resetForm();
                getDataRais();
            } catch (error) {
                console.error("Xatolik sodir bo'ldi!", error);
                onSubmitProps.resetForm();
            }
        },
    });
    const formikRaisOrinbosari = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: async (values, onSubmitProps) => {
            const data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            try {
                // POST
                if (!editRaisOrinbosari) {
                    await APIQomita.postRaisorinbosari(data);
                }
                // PATCH
                else {
                    await APIQomita.editRaisorinbosari(idRaisOrinbosari, data);
                    getDataRaisOrinbosari();
                    setEditRaisOrinbosari(false);
                    setIdRaisOrinbosari(null);
                }
                onSubmitProps.resetForm();
                getDataRaisOrinbosari();
            } catch (error) {
                console.error("Xatolik sodir bo'ldi!", error);
                onSubmitProps.resetForm();
            }
        },
    });
    const formikKotibyat = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: async (values, onSubmitProps) => {
            const data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            try {
                // POST
                if (!editKotibyat) {
                    await APIQomita.postKotibiyat(data);
                }
                // PATCH
                else {
                    await APIQomita.editKotibiyat(idKotibyat, data);
                    getDataKotibyat();
                    setEditKotibyat(false);
                    setIdKotibyat(null);
                }
                onSubmitProps.resetForm();
                getDataKotibyat();
            } catch (error) {
                console.error("Xatolik sodir bo'ldi!", error);
                onSubmitProps.resetForm();
            }
        },
    });
    const formikHazinabon = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: async (values, onSubmitProps) => {
            const data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            try {
                // POST
                if (!editHazinabon) {
                    await APIQomita.postXazinachi(data);
                }
                // PATCH
                else {
                    await APIQomita.editXazinachi(idHazinabon, data);
                    getDataHazinabon();
                    setEditHazinabon(false);
                    setIdHazinabon(null);
                }
                onSubmitProps.resetForm();
                getDataHazinabon();
            } catch (error) {
                console.error("Xatolik sodir bo'ldi!", error);
                onSubmitProps.resetForm();
            }
        },
    });
    const formikIlmiyDastur = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: async (values, onSubmitProps) => {
            const data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            try {
                // POST
                if (!editIlmiyDastur) {
                    await APIQomita.postIlmiydastur(data);
                }
                // PATCH
                else {
                    await APIQomita.editIlmiydastur(idIlmiyDastur, data);
                    getDataIlmiyDastur();
                    setEditIlmiyDastur(false);
                    setIdIlmiyDastur(null);
                }
                onSubmitProps.resetForm();
                getDataIlmiyDastur();
            } catch (error) {
                console.error("Xatolik sodir bo'ldi!", error);
                onSubmitProps.resetForm();
            }
        },
    });
    const formikReklama = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: async (values, onSubmitProps) => {
            const data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            try {
                // POST
                if (!editReklama) {
                    await APIQomita.postReklama(data);
                }
                // PATCH
                else {
                    await APIQomita.editReklama(idReklama, data);
                    getDataReklama();
                    setEditReklama(false);
                    setIdReklama(null);
                }
                onSubmitProps.resetForm();
                getDataReklama();
            } catch (error) {
                console.error("Xatolik sodir bo'ldi!", error);
                onSubmitProps.resetForm();
            }
        },
    });
    const formikLogistika = useFormik({
        initialValues: {
            name_uz: "",
            name_ru: "",
            name_en: "",
        },
        onSubmit: async (values, onSubmitProps) => {
            const data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            try {
                // POST
                if (!editLogistika) {
                    await APIQomita.postLogistika(data);
                }
                // PATCH
                else {
                    await APIQomita.editLogistika(idLogistika, data);
                    getDataLogistika();
                    setEditLogistika(false);
                    setIdLogistika(null);
                }
                onSubmitProps.resetForm();
                getDataLogistika();
            } catch (error) {
                console.error("Xatolik sodir bo'ldi!", error);
                onSubmitProps.resetForm();
            }
        },
    });

    const handleEditHomiy = (id) => {
        setEditHomiy(true);
        setIdHomiy(id);
        const data = dataHomiy.find((item) => item.id === id);
        if (data) {
            formikHomiy.setValues({
                name_uz: data.name_uz,
                name_ru: data.name_ru,
                name_en: data.name_en,
            });
        }
        getDataHomiy();
    };
    const handleEditMaslahatchi = (id) => {
        setEditMaslahatchi(true);
        setIdMaslahatchi(id);
        const data = dataMaslahatchi.find((item) => item.id === id);
        if (data) {
            formikMaslahatchi.setValues({
                name_uz: data.name_uz,
                name_ru: data.name_ru,
                name_en: data.name_en,
            });
        }
        getDataMaslahatchi();
    };
    const handleEditHammuallif = (id) => {
        setEditHammuallif(true);
        setIdHammuallif(id);
        const data = dataHammuallif.find((item) => item.id === id);
        if (data) {
            formikHammuallif.setValues({
                name_uz: data.name_uz,
                name_ru: data.name_ru,
                name_en: data.name_en,
            });
        }
        getDataHammuallif();
    };
    const handleEditRais = (id) => {
        setEditRais(true);
        setIdRais(id);
        const data = dataRais.find((item) => item.id === id);
        if (data) {
            formikRais.setValues({
                name_uz: data.name_uz,
                name_ru: data.name_ru,
                name_en: data.name_en,
            });
        }
        getDataRais();
    };
    const handleEditRaisOrinbosari = (id) => {
        setEditRaisOrinbosari(true);
        setIdRaisOrinbosari(id);
        const data = dataRaisOrinbosari.find((item) => item.id === id);
        if (data) {
            formikRaisOrinbosari.setValues({
                name_uz: data.name_uz,
                name_ru: data.name_ru,
                name_en: data.name_en,
            });
        }
        getDataRaisOrinbosari();
    };
    const handleEditKotibyat = (id) => {
        setEditKotibyat(true);
        setIdKotibyat(id);
        const data = dataKotibyat.find((item) => item.id === id);
        if (data) {
            formikKotibyat.setValues({
                name_uz: data.name_uz,
                name_ru: data.name_ru,
                name_en: data.name_en,
            });
        }
        getDataKotibyat();
    };
    const handleEditHazinabon = (id) => {
        setEditHazinabon(true);
        setIdHazinabon(id);
        const data = dataHazinabon.find((item) => item.id === id);
        if (data) {
            formikHazinabon.setValues({
                name_uz: data.name_uz,
                name_ru: data.name_ru,
                name_en: data.name_en,
            });
        }
        getDataHazinabon();
    };
    const handleEditIlmiyDastur = (id) => {
        setEditIlmiyDastur(true);
        setIdIlmiyDastur(id);
        const data = dataIlmiyDastur.find((item) => item.id === id);
        if (data) {
            formikIlmiyDastur.setValues({
                name_uz: data.name_uz,
                name_ru: data.name_ru,
                name_en: data.name_en,
            });
        }
        getDataIlmiyDastur();
    };
    const handleEditReklama = (id) => {
        setEditReklama(true);
        setIdReklama(id);
        const data = dataReklama.find((item) => item.id === id);
        if (data) {
            formikReklama.setValues({
                name_uz: data.name_uz,
                name_ru: data.name_ru,
                name_en: data.name_en,
            });
        }
        getDataReklama();
    };
    const handleEditLogistika = (id) => {
        setEditLogistika(true);
        setIdLogistika(id);
        const data = dataLogistika.find((item) => item.id === id);
        if (data) {
            formikLogistika.setValues({
                name_uz: data.name_uz,
                name_ru: data.name_ru,
                name_en: data.name_en,
            });
        }
        getDataLogistika();
    };

    const handleDelHomiy = async (id) => {
        try {
            await APIQomita.delHomiy(id);
            getDataHomiy();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelMaslahatchi = async (id) => {
        try {
            await APIQomita.delMaslahatchi(id);
            getDataMaslahatchi();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelHammuallif = async (id) => {
        try {
            await APIQomita.delHammuallif(id);
            getDataHammuallif();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelRais = async (id) => {
        try {
            await APIQomita.delRais(id);
            getDataRais();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelRaisOrinbosari = async (id) => {
        try {
            await APIQomita.delRaisorinbosari(id);
            getDataRaisOrinbosari();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelKotibyat = async (id) => {
        try {
            await APIQomita.delKotibiyat(id);
            getDataKotibyat();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelHazinabon = async (id) => {
        try {
            await APIQomita.delXazinachi(id);
            getDataHazinabon();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelIlmiyDastur = async (id) => {
        try {
            await APIQomita.delIlmiydastur(id);
            getDataIlmiyDastur();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelReklama = async (id) => {
        try {
            await APIQomita.delReklama(id);
            getDataReklama();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelLogistika = async (id) => {
        try {
            await APIQomita.delLogistika(id);
            getDataLogistika();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };

    useEffect(() => {
        getDataHomiy();
        getDataMaslahatchi();
        getDataHammuallif();
        getDataRais();
        getDataRaisOrinbosari();
        getDataKotibyat();
        getDataHazinabon();
        getDataIlmiyDastur();
        getDataReklama();
        getDataLogistika();
    }, []);

    return (
        <div className="max-w-[1600px] mx-auto">
            <h1 className="text-3xl font-medium text-gray-700 text-center my-5">
                Qo'mita
            </h1>

            {/* Homiy */}
            <div className="">
                <div className="border p-5">
                    <Formik>
                        <form onSubmit={formikHomiy.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Homiy
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz_homiy"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikHomiy.values.name_uz}
                                        onChange={formikHomiy.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru_homiy"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikHomiy.values.name_ru}
                                        onChange={formikHomiy.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en_homiy"
                                        name="name_en"
                                        label="Text"
                                        tab="en"
                                        value={formikHomiy.values.name_en}
                                        onChange={formikHomiy.handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    {!editHomiy ? "Yuborish" : "Saqlash"}
                                </button>
                            </fieldset>
                        </form>
                    </Formik>
                </div>
                <div className="border p-2">
                    {dataHomiy &&
                        dataHomiy.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Sarlavha:{" "}
                                                </span>
                                                {item.name_uz}
                                            </h3>
                                            <div className="flex justify-end py-5">
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                                                    onClick={() =>
                                                        handleEditHomiy(item.id)
                                                    }
                                                >
                                                    Taxrirlash
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                                                    onClick={() =>
                                                        handleDelHomiy(item.id)
                                                    }
                                                >
                                                    O'chirish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Maslaxatchi */}
            <div className="mt-10">
                <div className="border p-5">
                    <Formik>
                        <form onSubmit={formikMaslahatchi.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Maslahatchi
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz_Maslahatchi"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikMaslahatchi.values.name_uz}
                                        onChange={
                                            formikMaslahatchi.handleChange
                                        }
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru_Maslahatchi"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikMaslahatchi.values.name_ru}
                                        onChange={
                                            formikMaslahatchi.handleChange
                                        }
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en_Maslahatchi"
                                        name="name_en"
                                        label="Text"
                                        tab="en"
                                        value={formikMaslahatchi.values.name_en}
                                        onChange={
                                            formikMaslahatchi.handleChange
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    {!editMaslahatchi ? "Yuborish" : "Saqlash"}
                                </button>
                            </fieldset>
                        </form>
                    </Formik>
                </div>
                <div className="border p-2">
                    {dataMaslahatchi &&
                        dataMaslahatchi.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Sarlavha:{" "}
                                                </span>
                                                {item.name_uz}
                                            </h3>
                                            <div className="flex justify-end py-5">
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                                                    onClick={() =>
                                                        handleEditMaslahatchi(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Taxrirlash
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                                                    onClick={() =>
                                                        handleDelMaslahatchi(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    O'chirish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Hammuallif */}
            <div className="mt-10">
                <div className="border p-5">
                    <Formik>
                        <form onSubmit={formikHammuallif.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Hammuallif
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz_Hammuallif"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikHammuallif.values.name_uz}
                                        onChange={formikHammuallif.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru_Hammuallif"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikHammuallif.values.name_ru}
                                        onChange={formikHammuallif.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en_Hammuallif"
                                        name="name_en"
                                        label="Text"
                                        tab="en"
                                        value={formikHammuallif.values.name_en}
                                        onChange={formikHammuallif.handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    {!editHammuallif ? "Yuborish" : "Saqlash"}
                                </button>
                            </fieldset>
                        </form>
                    </Formik>
                </div>
                <div className="border p-2">
                    {dataHammuallif &&
                        dataHammuallif.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Sarlavha:{" "}
                                                </span>
                                                {item.name_uz}
                                            </h3>
                                            <div className="flex justify-end py-5">
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                                                    onClick={() =>
                                                        handleEditHammuallif(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Taxrirlash
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                                                    onClick={() =>
                                                        handleDelHammuallif(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    O'chirish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Rais */}
            <div className="mt-10">
                <div className="border p-5">
                    <Formik>
                        <form onSubmit={formikRais.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Rais
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz_Rais"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikRais.values.name_uz}
                                        onChange={formikRais.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru_Rais"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikRais.values.name_ru}
                                        onChange={formikRais.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en_Rais"
                                        name="name_en"
                                        label="Text"
                                        tab="en"
                                        value={formikRais.values.name_en}
                                        onChange={formikRais.handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    {!editRais ? "Yuborish" : "Saqlash"}
                                </button>
                            </fieldset>
                        </form>
                    </Formik>
                </div>
                <div className="border p-2">
                    {dataRais &&
                        dataRais.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Sarlavha:{" "}
                                                </span>
                                                {item.name_uz}
                                            </h3>
                                            <div className="flex justify-end py-5">
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                                                    onClick={() =>
                                                        handleEditRais(item.id)
                                                    }
                                                >
                                                    Taxrirlash
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                                                    onClick={() =>
                                                        handleDelRais(item.id)
                                                    }
                                                >
                                                    O'chirish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Rais o'rinbosar */}
            <div className="mt-10">
                <div className="border p-5">
                    <Formik>
                        <form onSubmit={formikRaisOrinbosari.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Rais o'rinbosar
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz_raisorinbosar"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={
                                            formikRaisOrinbosari.values.name_uz
                                        }
                                        onChange={
                                            formikRaisOrinbosari.handleChange
                                        }
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru_raisorinbosar"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={
                                            formikRaisOrinbosari.values.name_ru
                                        }
                                        onChange={
                                            formikRaisOrinbosari.handleChange
                                        }
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en_raisorinbosar"
                                        name="name_en"
                                        label="Text"
                                        tab="en"
                                        value={
                                            formikRaisOrinbosari.values.name_en
                                        }
                                        onChange={
                                            formikRaisOrinbosari.handleChange
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    {!editRaisOrinbosari
                                        ? "Yuborish"
                                        : "Saqlash"}
                                </button>
                            </fieldset>
                        </form>
                    </Formik>
                </div>
                <div className="border p-2">
                    {dataRaisOrinbosari &&
                        dataRaisOrinbosari.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Sarlavha:{" "}
                                                </span>
                                                {item.name_uz}
                                            </h3>
                                            <div className="flex justify-end py-5">
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                                                    onClick={() =>
                                                        handleEditRaisOrinbosari(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Taxrirlash
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                                                    onClick={() =>
                                                        handleDelRaisOrinbosari(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    O'chirish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Kotibyat */}
            <div className="mt-10">
                <div className="border p-5">
                    <Formik>
                        <form onSubmit={formikKotibyat.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Kotibyat
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz_Kotibyat"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikKotibyat.values.name_uz}
                                        onChange={formikKotibyat.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru_Kotibyat"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikKotibyat.values.name_ru}
                                        onChange={formikKotibyat.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_e_Kotibyatn"
                                        name="name_en"
                                        label="Text"
                                        tab="en"
                                        value={formikKotibyat.values.name_en}
                                        onChange={formikKotibyat.handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    {!editKotibyat ? "Yuborish" : "Saqlash"}
                                </button>
                            </fieldset>
                        </form>
                    </Formik>
                </div>
                <div className="border p-2">
                    {dataKotibyat &&
                        dataKotibyat.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Sarlavha:{" "}
                                                </span>
                                                {item.name_uz}
                                            </h3>
                                            <div className="flex justify-end py-5">
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                                                    onClick={() =>
                                                        handleEditKotibyat(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Taxrirlash
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                                                    onClick={() =>
                                                        handleDelKotibyat(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    O'chirish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Hazinabon */}
            <div className="mt-10">
                <div className="border p-5">
                    <Formik>
                        <form onSubmit={formikHazinabon.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Hazinabon
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz_Hazinabon"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikHazinabon.values.name_uz}
                                        onChange={formikHazinabon.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru_Hazinabon"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikHazinabon.values.name_ru}
                                        onChange={formikHazinabon.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en_Hazinabon"
                                        name="name_en"
                                        label="Text"
                                        tab="en"
                                        value={formikHazinabon.values.name_en}
                                        onChange={formikHazinabon.handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    {!editHazinabon ? "Yuborish" : "Saqlash"}
                                </button>
                            </fieldset>
                        </form>
                    </Formik>
                </div>
                <div className="border p-2">
                    {dataHazinabon &&
                        dataHazinabon.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Sarlavha:{" "}
                                                </span>
                                                {item.name_uz}
                                            </h3>
                                            <div className="flex justify-end py-5">
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                                                    onClick={() =>
                                                        handleEditHazinabon(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Taxrirlash
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                                                    onClick={() =>
                                                        handleDelHazinabon(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    O'chirish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Ilmiy dastur */}
            <div className="mt-10">
                <div className="border p-5">
                    <Formik>
                        <form onSubmit={formikIlmiyDastur.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Ilmiy dastur
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz_Ilmiydastur"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikIlmiyDastur.values.name_uz}
                                        onChange={
                                            formikIlmiyDastur.handleChange
                                        }
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru_Ilmiydastur"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikIlmiyDastur.values.name_ru}
                                        onChange={
                                            formikIlmiyDastur.handleChange
                                        }
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en_Ilmiydastur"
                                        name="name_en"
                                        label="Text"
                                        tab="en"
                                        value={formikIlmiyDastur.values.name_en}
                                        onChange={
                                            formikIlmiyDastur.handleChange
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    {!editIlmiyDastur ? "Yuborish" : "Saqlash"}
                                </button>
                            </fieldset>
                        </form>
                    </Formik>
                </div>
                <div className="border p-2">
                    {dataIlmiyDastur &&
                        dataIlmiyDastur.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Sarlavha:{" "}
                                                </span>
                                                {item.name_uz}
                                            </h3>
                                            <div className="flex justify-end py-5">
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                                                    onClick={() =>
                                                        handleEditIlmiyDastur(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Taxrirlash
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                                                    onClick={() =>
                                                        handleDelIlmiyDastur(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    O'chirish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Reklama */}
            <div className="mt-10">
                <div className="border p-5">
                    <Formik>
                        <form onSubmit={formikReklama.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Reklama
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz_Reklama"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikReklama.values.name_uz}
                                        onChange={formikReklama.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru_Reklama"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikReklama.values.name_ru}
                                        onChange={formikReklama.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en_Reklama"
                                        name="name_en"
                                        label="Text"
                                        tab="en"
                                        value={formikReklama.values.name_en}
                                        onChange={formikReklama.handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    {!editReklama ? "Yuborish" : "Saqlash"}
                                </button>
                            </fieldset>
                        </form>
                    </Formik>
                </div>
                <div className="border p-2">
                    {dataReklama &&
                        dataReklama.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Sarlavha:{" "}
                                                </span>
                                                {item.name_uz}
                                            </h3>
                                            <div className="flex justify-end py-5">
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                                                    onClick={() =>
                                                        handleEditReklama(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Taxrirlash
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                                                    onClick={() =>
                                                        handleDelReklama(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    O'chirish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* Logistika */}
            <div className="mt-10">
                <div className="border p-5">
                    <Formik>
                        <form onSubmit={formikLogistika.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Logistika
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz_Logistika"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikLogistika.values.name_uz}
                                        onChange={formikLogistika.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru_Logistika"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikLogistika.values.name_ru}
                                        onChange={formikLogistika.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en_Logistika"
                                        name="name_en"
                                        label="Text"
                                        tab="en"
                                        value={formikLogistika.values.name_en}
                                        onChange={formikLogistika.handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success w-full"
                                >
                                    {!editLogistika ? "Yuborish" : "Saqlash"}
                                </button>
                            </fieldset>
                        </form>
                    </Formik>
                </div>
                <div className="border p-2">
                    {dataLogistika &&
                        dataLogistika.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                                        <div>
                                            <h3 className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Sarlavha:{" "}
                                                </span>
                                                {item.name_uz}
                                            </h3>
                                            <div className="flex justify-end py-5">
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                                                    onClick={() =>
                                                        handleEditLogistika(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Taxrirlash
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                                                    onClick={() =>
                                                        handleDelLogistika(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    O'chirish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Qomita;
