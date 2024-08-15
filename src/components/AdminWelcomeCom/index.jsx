import React, { useEffect, useState } from "react";
import APIWelcome from "../../services/homeWelcome";
import { Formik, useFormik } from "formik";
import MyTextInput from "../MyTextInput";
import MyTextarea from "../MyTextarea";

const AdminWelcomeCom = () => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [datas, setDatas] = useState([]);

  const fechtData = async () => {
    try {
      const response = await APIWelcome.getWelcome();
      setDatas(response.data);
    } catch (error) {
      console.error("Xatolik yuz berdi!", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      title_uz: "",
      title_ru: "",
      title_en: "",

      body_1_uz: "",
      body_1_ru: "",
      body_1_en: "",

      body_2_uz: "",
      body_2_ru: "",
      body_2_en: "",

      body_3_uz: "",
      body_3_ru: "",
      body_3_en: "",

      body_4_uz: "",
      body_4_ru: "",
      body_4_en: "",
    }, // Initial values for formik
    onSubmit: async (values, onSubmitProps) => {
      const data = new FormData();
      for (let key in values) {
        data.append(key, values[key]);
      }
      try {
        // POST
        if (!edit) {
          await APIWelcome.postWelcome(data);
        }
        // PATCH
        else {
          await APIWelcome.patchWelcome(id, data);
          console.log(data);
          setEdit(false);
          setId(null);
        }
        onSubmitProps.resetForm();
        fechtData();
      } catch (error) {
        console.error("Xatolik sodir bo'ldi!", error);
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
        title_uz: data.title_uz,
        title_ru: data.title_ru,
        title_en: data.title_en,
        body_1_uz: data.body_1_uz,
        body_1_ru: data.body_1_ru,
        body_1_en: data.body_1_en,
        body_2_uz: data.body_2_uz,
        body_2_ru: data.body_2_ru,
        body_2_en: data.body_2_en,
        body_3_uz: data.body_3_uz,
        body_3_ru: data.body_3_ru,
        body_3_en: data.body_3_en,
        body_4_uz: data.body_4_uz,
        body_4_ru: data.body_4_ru,
        body_4_en: data.body_4_en,
      });
    }
    fechtData();
  };

  const handleDelete = async (id) => {
    try {
      await APIWelcome.deleteWelcome(id);
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
        Home Welcome
      </h1>
      <div className="grid">
        <div className="border p-5">
          <Formik>
            <form onSubmit={formik.handleSubmit}>
              <fieldset className="border px-5 pb-5 mb-5">
                <legend className="text-red-500 font-medium">
                  Home Welcome
                </legend>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextInput
                    type="text"
                    id="title_uz"
                    name="title_uz"
                    label="Sarlavha"
                    tab="uz"
                    value={formik.values.title_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="title_ru"
                    name="title_ru"
                    label="Sarlavha"
                    tab="ru"
                    value={formik.values.title_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="title_en"
                    name="title_en"
                    label="Sarlavha"
                    tab="eng"
                    value={formik.values.title_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextarea
                    type="text"
                    id="body_1_uz"
                    name="body_1_uz"
                    label="Matn 1"
                    tab="uz"
                    value={formik.values.body_1_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="body_1_ru"
                    name="body_1_ru"
                    label="Matn 1"
                    tab="ru"
                    value={formik.values.body_1_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="body_1_en"
                    name="body_1_en"
                    label="Matn 1"
                    tab="eng"
                    value={formik.values.body_1_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextarea
                    type="text"
                    id="body_2_uz"
                    name="body_2_uz"
                    label="Matn 2"
                    tab="uz"
                    value={formik.values.body_2_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="body_2_ru"
                    name="body_2_ru"
                    label="Matn 2"
                    tab="ru"
                    value={formik.values.body_2_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="body_2_en"
                    name="body_2_en"
                    label="Matn 2"
                    tab="eng"
                    value={formik.values.body_2_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextarea
                    type="text"
                    id="body_3_uz"
                    name="body_3_uz"
                    label="Matn 3"
                    tab="uz"
                    value={formik.values.body_3_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="body_3_ru"
                    name="body_3_ru"
                    label="Matn 3"
                    tab="ru"
                    value={formik.values.body_3_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="body_3_en"
                    name="body_3_en"
                    label="Matn 3"
                    tab="eng"
                    value={formik.values.body_3_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextarea
                    type="text"
                    id="body_4_uz"
                    name="body_4_uz"
                    label="Matn 4"
                    tab="uz"
                    value={formik.values.body_4_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="body_4_ru"
                    name="body_4_ru"
                    label="Matn 4"
                    tab="ru"
                    value={formik.values.body_4_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="body_4_en"
                    name="body_4_en"
                    label="Matn 4"
                    tab="eng"
                    value={formik.values.body_4_en}
                    onChange={formik.handleChange}
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
                  <div className="rounded-xl bg-gray-100 shadow-md p-3 m-3">
                    <h3 className="text-lg font-bold font-source text-[#004269]">
                      <span className="text-red-500">Sarlavha: </span>
                      {data.title_uz}
                    </h3>
                    <p className="text-lg font-bold font-source text-[#004269]">
                      <span className="text-red-500">Matn (1): </span>
                      {data.body_1_uz}
                    </p>
                    <p className="text-lg font-bold font-source text-[#004269]">
                      <span className="text-red-500">Matn (2): </span>
                      {data.body_2_uz}
                    </p>
                    <p className="text-lg font-bold font-source text-[#004269]">
                      <span className="text-red-500">Matn (3): </span>
                      {data.body_3_uz}
                    </p>
                    <p className="text-lg font-bold font-source text-[#004269]">
                      <span className="text-red-500">Matn (4): </span>
                      {data.body_4_uz}
                    </p>
                    <div className="flex py-5">
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
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AdminWelcomeCom;
