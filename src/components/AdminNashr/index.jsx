import React, { useEffect, useState, useRef } from "react";
import APINash from "../../services/nashr";
import { Formik, useFormik } from "formik";
import MyTextInput from "../MyTextInput";
import MyTextarea from "../MyTextarea";

const AdminNashr = () => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [datas, setDatas] = useState([]);

  const fileInputRefs = {
    rasm: useRef(null),
  };

  const fechtData = async () => {
    try {
      const response = await APINash.getNashr();
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
      subtitle_uz: "",
      subtitle_ru: "",
      subtitle_en: "",
      content_uz: "",
      content_ru: "",
      content_en: "",
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
          await APINash.post(data);
        }
        // PATCH
        else {
          await APINash.put(id, data);
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
        title_uz: data.title_uz,
        title_ru: data.title_ru,
        title_en: data.title_en,
        subtitle_uz: data.subtitle_uz,
        subtitle_ru: data.subtitle_ru,
        subtitle_en: data.subtitle_en,
        content_uz: data.content_uz,
        content_ru: data.content_ru,
        content_en: data.content_en,
      });
    }
    fechtData();
  };

  const handleDelete = async (id) => {
    try {
      await APINash.del(id);
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
        Nashr
      </h1>
      <div className="">
        <div className="border p-5">
          <Formik>
            <form onSubmit={formik.handleSubmit}>
              <fieldset className="border px-5 pb-5 mb-5">
                <legend className="text-red-500 font-medium">Nashr</legend>
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
                    id="subtitle_uz"
                    name="subtitle_uz"
                    label="Qo'shimcha sarlavha"
                    tab="uz"
                    value={formik.values.subtitle_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="subtitle_ru"
                    name="subtitle_ru"
                    label="Qo'shimcha sarlavha"
                    tab="ru"
                    value={formik.values.subtitle_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="subtitle_en"
                    name="subtitle_en"
                    label="Qo'shimcha sarlavha"
                    tab="eng"
                    value={formik.values.subtitle_en}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 my-5">
                  <MyTextarea
                    type="text"
                    id="content_uz"
                    name="content_uz"
                    label="Matn"
                    tab="uz"
                    value={formik.values.content_uz}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="content_ru"
                    name="content_ru"
                    label="Matn"
                    tab="ru"
                    value={formik.values.content_ru}
                    onChange={formik.handleChange}
                  />
                  <MyTextarea
                    type="text"
                    id="content_en"
                    name="content_en"
                    label="Matn"
                    tab="eng"
                    value={formik.values.content_en}
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
                        <span className="text-red-500">Sarlavha: </span>
                        {data.title_uz}
                      </h3>
                      <p className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">Qo'shimcha sarlavha: </span>
                        {data.subtitle_uz}
                      </p>
                      <p className="text-lg font-bold font-source text-[#004269]">
                        <span className="text-red-500">Matn: </span>
                        {data.content_uz}
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

export default AdminNashr;
