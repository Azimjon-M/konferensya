import React, { useEffect, useState, useRef } from "react";
import APITaklif from "../../services/taklif";
import { Formik, useFormik } from "formik";
import MyTextInput from "../MyTextInput";

const AdminTaklifEtilganlar = () => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [datas, setDatas] = useState([]);

  const fileInputRefs = {
    rasm: useRef(null),
  };

  const fechtData = async () => {
    try {
      const response = await APITaklif.getTaklif();
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
      lavozim_uz: "",
      lavozim_ru: "",
      lavozim_en: "",
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
          await APITaklif.post(data);
        }
        // PATCH
        else {
          await APITaklif.put(id, data);
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
        lavozim_uz: data.lavozim_uz,
        lavozim_ru: data.lavozim_ru,
        lavozim_en: data.lavozim_en,
      });
    }
    fechtData();
  };

  const handleDelete = async (id) => {
    try {
      await APITaklif.del(id);
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
        Taklif etilganlar
      </h1>
      <div className="">
        <div className="border p-5">
          <Formik>
            <form onSubmit={formik.handleSubmit}>
              <fieldset className="border px-5 pb-5 mb-5">
                <legend className="text-red-500 font-medium">Mehmonlar</legend>
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
                    id="lavozim_uz"
                    name="lavozim_uz"
                    label="Lavozim"
                    tab="uz"
                    value={formik.values.lavozim_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="lavozim_ru"
                    name="lavozim_ru"
                    label="Lavozim"
                    tab="ru"
                    value={formik.values.lavozim_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="lavozim_en"
                    name="lavozim_en"
                    label="Lavozim"
                    tab="eng"
                    value={formik.values.lavozim_en}
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
                        <span className="text-red-500">Lavozim: </span>
                        {data.lavozim_uz}
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

export default AdminTaklifEtilganlar;
