import React, { useEffect, useState, useRef } from "react";
import APIMaruza from "../../services/maruzachi";
import { Formik, useFormik } from "formik";
import MyTextInput from "../MyTextInput";
import MyTextarea from "../MyTextarea";

const AdminAsosiyMaruzachi = () => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [datas, setDatas] = useState([]);

  const fileInputRefs = {
    rasm: useRef(null),
  };

  const fechtData = async () => {
    try {
      const response = await APIMaruza.getMaruza();
      setDatas(response.data);
    } catch (error) {
      console.error("Xatolik yuz berdi!", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      name_uz: "",
      name_ru: "",
      name_en: "",
      sarlavxa_uz: "",
      sarlavxa_ru: "",
      sarlavxa_en: "",
      xulosa_uz: "",
      xulosa_ru: "",
      xulosa_en: "",
      tarjima_xol_uz: "",
      tarjima_xol_ru: "",
      tarjima_xol_en: "",
      rasm: null,
    }, // Initial values for formik
    onSubmit: async (values, onSubmitProps) => {
      const data = new FormData();
      for (let key in values) {
        data.append(key, values[key]);
      }
      try {
        // POST
        if (!edit) {
          await APIMaruza.post(data);
        }
        // PATCH
        else {
          await APIMaruza.put(id, data);
          console.log(data);
          setEdit(false);
          setId(null);
        }
        // Resets file input
        Object.values(fileInputRefs).forEach((ref) => {
          if (ref.current) {
            ref.current.value = "";
          }
        });
        onSubmitProps.resetForm();
        fechtData();
      } catch (error) {
        console.error("Xatolik sodir bo'ldi!", error);
        Object.values(fileInputRefs).forEach((ref) => {
          if (ref.current) {
            ref.current.value = "";
          }
        });
        onSubmitProps.resetForm();
      }
    },
  });

  const handleEdit = (id) => {
    setEdit(true);
    setId(id);
    const data = datas.find((item) => item.id === id);
    if (data) {
      formik.setValues({
        name_uz: data.name_uz,
        name_ru: data.name_ru,
        name_en: data.name_en,
        sarlavxa_uz: data.sarlavxa_uz,
        sarlavxa_ru: data.sarlavxa_ru,
        sarlavxa_en: data.sarlavxa_en,
        xulosa_uz: data.xulosa_uz,
        xulosa_ru: data.xulosa_ru,
        xulosa_en: data.xulosa_en,
        tarjima_xol_uz: data.tarjima_xol_uz,
        tarjima_xol_ru: data.tarjima_xol_ru,
        tarjima_xol_en: data.tarjima_xol_en,
      });
    }
    fechtData();
  };

  const handleDelete = async (id) => {
    try {
      await APIMaruza.del(id);
      fechtData();
    } catch (error) {
      console.error("Xatolik yuz berdi!", error);
    }
  };

  useEffect(() => {
    fechtData();
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto">
      <h1 className="text-3xl font-medium text-gray-700 text-center my-5">
        Asosiy maruzachi
      </h1>
      <div className="">
        <div className="border p-5">
          <Formik>
            <form onSubmit={formik.handleSubmit}>
              <fieldset className="border px-5 pb-5 mb-5">
                <legend className="text-red-500 font-medium">Maruzachi</legend>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextInput
                    type="text"
                    id="name_uz"
                    name="name_uz"
                    label="F.I.SH"
                    tab="uz"
                    value={formik.values.name_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="name_ru"
                    name="name_ru"
                    label="F.I.SH"
                    tab="ru"
                    value={formik.values.name_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="name_en"
                    name="name_en"
                    label="F.I.SH"
                    tab="eng"
                    value={formik.values.name_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextInput
                    type="text"
                    id="sarlavxa_uz"
                    name="sarlavxa_uz"
                    label="Sarlavha"
                    tab="uz"
                    value={formik.values.sarlavxa_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="sarlavxa_ru"
                    name="sarlavxa_ru"
                    label="Sarlavha"
                    tab="ru"
                    value={formik.values.sarlavxa_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="sarlavxa_en"
                    name="sarlavxa_en"
                    label="Sarlavha"
                    tab="eng"
                    value={formik.values.sarlavxa_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextarea
                    type="text"
                    id="xulosa_uz"
                    name="xulosa_uz"
                    label="Xulosa"
                    tab="uz"
                    value={formik.values.xulosa_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="xulosa_ru"
                    name="xulosa_ru"
                    label="Xulosa"
                    tab="ru"
                    value={formik.values.xulosa_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="xulosa_en"
                    name="xulosa_en"
                    label="Xulosa"
                    tab="eng"
                    value={formik.values.xulosa_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextarea
                    type="text"
                    id="tarjima_xol_uz"
                    name="tarjima_xol_uz"
                    label="Tarjimai hol"
                    tab="uz"
                    value={formik.values.tarjima_xol_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="tarjima_xol_ru"
                    name="tarjima_xol_ru"
                    label="Tarjimai hol"
                    tab="ru"
                    value={formik.values.tarjima_xol_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="tarjima_xol_en"
                    name="tarjima_xol_en"
                    label="Tarjimai hol"
                    tab="eng"
                    value={formik.values.tarjima_xol_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="my-5">
                  <MyTextInput
                    type="file"
                    id="rasm"
                    name="rasm"
                    label="Rasm"
                    tab=""
                    innerRef={fileInputRefs.rasm}
                    onChange={(event) =>
                      formik.setFieldValue("rasm", event.currentTarget.files[0])
                    }
                  />
                </div>
                <button type="submit" className="btn btn-success w-full">
                  {!edit ? "Yuborish" : "Saqlash"}
                </button>
              </fieldset>
            </form>
          </Formik>
        </div>
        <div className="border p-2">
          {datas &&
            datas.map((data) => {
              return (
                <div key={data.id}>
                  <div className="grid grid-cols-5 gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                    <div className="col-span-1">
                      <img
                        src={data.rasm}
                        alt=""
                        className="w-full h- object-cover lg:max-h-32 xl:h-[460px] shadow-2xl rounded-xl opacity-85"
                      />
                    </div>
                    <div className="col-span-4">
                      <h3 className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">F.I.SH: </span>
                        {data.name_uz}
                      </h3>
                      <p className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">Sarlavha: </span>
                        {data.sarlavxa_uz}
                      </p>
                      <p className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">Xulosa: </span>
                        {data.xulosa_uz}
                      </p>
                      <p className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">Tarjimai xol: </span>
                        {data.tarjima_xol_uz}
                      </p>
                      <div className="flex justify-end py-5">
                        <button
                          type="submit"
                          className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                          onClick={() => handleEdit(data.id)}
                        >
                          Taxrirlash
                        </button>
                        <button
                          type="submit"
                          className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                          onClick={() => handleDelete(data.id)}
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

export default AdminAsosiyMaruzachi;
