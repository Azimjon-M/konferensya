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

    const [editRaisOrinbosar, setEditRaisOrinbosar] = useState(false);
    const [idRaisOrinbosar, setIdRaisOrinbosar] = useState(null);
    const [dataRaisOrinbosar, setDataRaisOrinbosar] = useState([]);

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
            .then((res) => setDataRaisOrinbosar(res.data))
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
    const handleEditHammuallif = (id) => {
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
    const handleEditRais = (id) => {
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
    const handleEditRaisOrinbosari = (id) => {
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
    const handleEditKotibyat = (id) => {
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
    const handleEditHazinabon = (id) => {
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
    const handleEditIlmiyDastur = (id) => {
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
    const handleEditReklama = (id) => {
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
    const handleEditLogistika = (id) => {
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
            await APIQomita.delHomiy(id);
            getDataHomiy();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelHamuallif = async (id) => {
        try {
            await APIQomita.delHomiy(id);
            getDataHomiy();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelRais = async (id) => {
        try {
            await APIQomita.delHomiy(id);
            getDataHomiy();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelRaisOrinbosari = async (id) => {
        try {
            await APIQomita.delHomiy(id);
            getDataHomiy();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelKotibyat = async (id) => {
        try {
            await APIQomita.delHomiy(id);
            getDataHomiy();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelHazinabon = async (id) => {
        try {
            await APIQomita.delHomiy(id);
            getDataHomiy();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelIlmiyDastur = async (id) => {
        try {
            await APIQomita.delHomiy(id);
            getDataHomiy();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelReklama = async (id) => {
        try {
            await APIQomita.delHomiy(id);
            getDataHomiy();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };
    const handleDelLogistika = async (id) => {
        try {
            await APIQomita.delHomiy(id);
            getDataHomiy();
        } catch (error) {
            console.error("Xatolik yuz berdi!", error);
        }
    };

    useEffect(() => {
        getDataHomiy();
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
                                        id="name_uz"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikHomiy.values.name_uz}
                                        onChange={formikHomiy.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikHomiy.values.name_ru}
                                        onChange={formikHomiy.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en"
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
                                            <p className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Matn:{" "}
                                                </span>
                                                {item.body_uz}
                                            </p>
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
                        <form onSubmit={formikHomiy.handleSubmit}>
                            <fieldset className="border px-5 pb-5 mb-5">
                                <legend className="text-red-500 font-medium">
                                    Maslahatchi
                                </legend>
                                <div className="grid grid-cols-3 gap-2 my-5">
                                    <MyTextInput
                                        type="text"
                                        id="name_uz"
                                        name="name_uz"
                                        label="Text"
                                        tab="uz"
                                        value={formikHomiy.values.name_uz}
                                        onChange={formikHomiy.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_ru"
                                        name="name_ru"
                                        label="Text"
                                        tab="ru"
                                        value={formikHomiy.values.name_ru}
                                        onChange={formikHomiy.handleChange}
                                    />
                                    <MyTextInput
                                        type="text"
                                        id="name_en"
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
                                            <p className="text-lg font-bold font-source text-[#004269]">
                                                <span className="text-red-500">
                                                    Matn:{" "}
                                                </span>
                                                {item.body_uz}
                                            </p>
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
        </div>
    );
};

export default Qomita;
