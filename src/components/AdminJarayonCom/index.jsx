import React, { useEffect, useState } from "react";
import APIJarayon from "../../services/homeJarayon";
import { Formik, useFormik } from "formik";
import MyTextInput from "../MyTextInput";

const AdminJarayonCom = () => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [datas, setDatas] = useState([]);

  const fechtData = async () => {
    try {
      const response = await APIJarayon.getJarayon();
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
    }, // Initial values for formik
    onSubmit: async (values, onSubmitProps) => {
      const data = new FormData();
      for (let key in values) {
        data.append(key, values[key]);
      }
      try {
        // POST
        if (!edit) {
          await APIJarayon.postJarayon(data);
        }
        // PATCH
        else {
          await APIJarayon.patchJarayon(id, data);
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
      });
    }
    fechtData();
  };

  const handleDelete = async (id) => {
    try {
      await APIJarayon.deleteJarayon(id);
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
        Home Jarayon
      </h1>
      <div className="grid">
        <div className="border p-5">
          <Formik>
            <form onSubmit={formik.handleSubmit}>
              <fieldset className="border px-5 pb-5 mb-5">
                <legend className="text-red-500 font-medium">
                  Home Jarayon
                </legend>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextInput
                    type="number"
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

export default AdminJarayonCom;
