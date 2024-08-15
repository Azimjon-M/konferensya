import React, { useEffect, useState } from "react";
import APIOtganVoqealar from "../../services/otganVoqealar";
import { Formik, useFormik } from "formik";
import MyTextInput from "../MyTextInput";
import MyTextarea from "../MyTextarea";

const AdminOtganVoqea = () => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [datas, setDatas] = useState([]);

  const fechtData = async () => {
    try {
      const response = await APIOtganVoqealar.getOtganVaqealar();
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
      rais_uz: "",
      rais_ru: "",
      rais_en: "",
      mavzu_uz: "",
      mavzu_ru: "",
      mavzu_en: "",
      sana_uz: "",
      sana_ru: "",
      sana_en: "",
      joy_uz: "",
      joy_ru: "",
      joy_en: "",
    }, // Initial values for formik
    onSubmit: async (values, onSubmitProps) => {
      const data = new FormData();
      for (let key in values) {
        data.append(key, values[key]);
      }
      try {
        // POST
        if (!edit) {
          await APIOtganVoqealar.post(data);
        }
        // PATCH
        else {
          await APIOtganVoqealar.put(id, data);
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
        rais_uz: data.rais_uz,
        rais_ru: data.rais_ru,
        rais_en: data.rais_en,
        mavzu_uz: data.mavzu_uz,
        mavzu_ru: data.mavzu_ru,
        mavzu_en: data.mavzu_en,
        sana_uz: data.sana_uz,
        sana_ru: data.sana_ru,
        sana_en: data.sana_en,
        joy_uz: data.joy_uz,
        joy_ru: data.joy_ru,
        joy_en: data.joy_en,
      });
    }
    fechtData();
  };

  const handleDelete = async (id) => {
    try {
      await APIOtganVoqealar.del(id);
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
        O'tgan voqealar
      </h1>
      <div className="">
        <div className="border p-5">
          <Formik>
            <form onSubmit={formik.handleSubmit}>
              <fieldset className="border px-5 pb-5 mb-5">
                <legend className="text-red-500 font-medium">Voqea</legend>
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
                  <MyTextInput
                    type="text"
                    id="rais_uz"
                    name="rais_uz"
                    label="Rais"
                    tab="uz"
                    value={formik.values.rais_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="rais_ru"
                    name="rais_ru"
                    label="Rais"
                    tab="ru"
                    value={formik.values.rais_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="rais_en"
                    name="rais_en"
                    label="Rais"
                    tab="eng"
                    value={formik.values.rais_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextarea
                    type="text"
                    id="mavzu_uz"
                    name="mavzu_uz"
                    label="Mavzu"
                    tab="uz"
                    value={formik.values.mavzu_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="mavzu_ru"
                    name="mavzu_ru"
                    label="Mavzu"
                    tab="ru"
                    value={formik.values.mavzu_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="mavzu_en"
                    name="mavzu_en"
                    label="Mavzu"
                    tab="eng"
                    value={formik.values.mavzu_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextInput
                    type="text"
                    id="sana_uz"
                    name="sana_uz"
                    label="Sana"
                    tab="uz"
                    value={formik.values.sana_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="sana_ru"
                    name="sana_ru"
                    label="Sana"
                    tab="ru"
                    value={formik.values.sana_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="sana_en"
                    name="sana_en"
                    label="Sana"
                    tab="eng"
                    value={formik.values.sana_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextInput
                    type="text"
                    id="joy_uz"
                    name="joy_uz"
                    label="Joy"
                    tab="uz"
                    value={formik.values.joy_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="joy_ru"
                    name="joy_ru"
                    label="Joy"
                    tab="ru"
                    value={formik.values.joy_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="joy_en"
                    name="joy_en"
                    label="Joy"
                    tab="eng"
                    value={formik.values.joy_en}
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
                  <div className="gap-5 rounded-xl bg-gray-100 shadow-md p-3 m-3">
                    <div>
                      <h3 className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">Sarlavha: </span>
                        {data.title_uz}
                      </h3>
                      <p className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">Rais: </span>
                        {data.rais_uz}
                      </p>
                      <p className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">Mavzu: </span>
                        {data.mavzu_uz}
                      </p>
                      <p className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">Sana: </span>
                        {data.sana_uz}
                      </p>
                      <p className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">Joy: </span>
                        {data.joy_uz}
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

export default AdminOtganVoqea;
