import React, { useEffect, useState } from "react";
import APIBoglanish from "../../services/boglanish";
import { Formik, useFormik } from "formik";
import MyTextInput from "../MyTextInput";

const AdminBoglanish = () => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [datas, setDatas] = useState([]);

  const fechtData = async () => {
    try {
      const response = await APIBoglanish.get();
      setDatas(response.data);
    } catch (error) {
      console.error("Xatolik yuz berdi!", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      tel_1: "",
      tel_2: "",
      email_1: "",
      email_2: "",
    }, // Initial values for formik
    onSubmit: async (values, onSubmitProps) => {
      const data = new FormData();
      for (let key in values) {
        data.append(key, values[key]);
      }
      try {
        // POST
        if (!edit && datas.length === 0) {
          await APIBoglanish.post(data);
        }
        // PATCH
        else {
          await APIBoglanish.put(id, data);
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
        tel_1: data.tel_1,
        tel_2: data.tel_2,
        email_1: data.email_1,
        email_2: data.email_2,
      });
    }
    fechtData();
  };

  const handleDelete = async (id) => {
    try {
      await APIBoglanish.del(id);
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
        Bog'lanish
      </h1>
      <div className="">
        <div className="border p-5">
          <Formik>
            <form onSubmit={formik.handleSubmit}>
              <fieldset className="border px-5 pb-5 mb-5">
                <legend className="text-red-500 font-medium">Contact</legend>
                <div className="grid grid-cols-4 gap-2 my-5">
                  <MyTextInput
                    type="text"
                    id="tel_1"
                    name="tel_1"
                    label="Telefon nomer - 1"
                    tab=""
                    value={formik.values.tel_1}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="tel_2"
                    name="tel_2"
                    label="Telefon nomer - 2"
                    tab=""
                    value={formik.values.tel_2}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="email_1"
                    name="email_1"
                    label="Email - 1"
                    tab=""
                    value={formik.values.email_1}
                    onChange={formik.handleChange}
                  />
                  <MyTextInput
                    type="text"
                    id="email_2"
                    name="email_2"
                    label="Email - 2"
                    tab=""
                    value={formik.values.email_2}
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
                  <h3 className="text-lg font-bold font-source text-[#004269]">
                    {data.title_uz}
                  </h3>
                  <p className="text-md"><b>Telefon - 1:</b> {data.tel_1}</p>
                  <p className="text-md"><b>Telefon - 2:</b> {data.tel_2}</p>
                  <p className="text-md"><b>Email - 1:</b> {data.email_1}</p>
                  <p className="text-md"><b>Email - 1:</b> {data.email_2}</p>
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
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AdminBoglanish;
