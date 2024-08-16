import React, { useEffect, useState, useRef } from "react";
import APIVideoGalareya from "../../services/homeVideoGalareya";
import { MdEdit, MdDelete } from "react-icons/md";
import { Formik, useFormik } from "formik";
import MyTextInput from "../MyTextInput";

const AdminVideoGalareyaCom = () => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [datas, setDatas] = useState([]);

  const fileInputRefs = {
    video: useRef(null),
  };

  const fechtData = async () => {
    try {
      const response = await APIVideoGalareya.getVideoGalareya();
      setDatas(response.data);
    } catch (error) {
      console.error("Xatolik yuz berdi!", error);
    }
  };

  const formik = useFormik({
    initialValues: {
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
          await APIVideoGalareya.postVideoGalareya(data);
        }
        // PATCH
        else {
          await APIVideoGalareya.patchVideoGalareya(id, data);
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
      formik.setValues({});
    }
    fechtData();
  };

  const handleDelete = async (id) => {
    try {
      await APIVideoGalareya.deleteVideoGalareya(id);
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
        Home VideoGalareya
      </h1>
      <div className="grid">
        <div className="border p-5">
          <Formik>
            <form onSubmit={formik.handleSubmit}>
              <fieldset className="border px-5 pb-5 mb-5">
                <legend className="text-red-500 font-medium">
                  Home VideoGalareya
                </legend>
                <div className="my-5">
                  <MyTextInput
                    type="file"
                    id="video"
                    name="video"
                    label="Video"
                    tab=""
                    innerRef={fileInputRefs.video}
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
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 border p-2">
          {datas &&
            datas.map((data) => {
              return (
                <div key={data.id}>
                  <div className="rounded-xl bg-gray-100 shadow-md p-3">
                    <div>
                      <video
                        src={data.rasm}
                        alt=""
                        className="w-full h-32 shadow-2xl rounded-xl opacity-85"
                      />
                    </div>
                    <div className="flex justify-around pt-5">
                      <button
                        type="submit"
                        className="px-3 py-0.5 text-xs rounded-lg border border-teal-500 bg-teal-500 active:bg-white active:text-teal-500 text-gray-800 font-semibold"
                        onClick={() => handleEdit(data.id)}
                      >
                        <MdEdit />
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-0.5 text-xs rounded-lg border border-red-500 bg-red-500 active:bg-white active:text-red-500 text-gray-800 font-semibold ml-2"
                        onClick={() => handleDelete(data.id)}
                      >
                        <MdDelete />
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

export default AdminVideoGalareyaCom;
