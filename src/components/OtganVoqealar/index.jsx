import React, { useEffect, useState } from "react";
import APIOtganVoqealar from "../../services/otganVoqealar";
import TranslateMessage from "../TranslateMessage";
import { useSelector } from "react-redux";

function OtganVoqealar() {

  const Lang = useSelector((state) => state.reducerLang.isLang)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOtganVoqealar = async () => {
      try {
        const response = await APIOtganVoqealar.getOtganVaqealar();
        setData(response.data);
      } catch (error) {
        console.error("Ma'lumotlar olishda xatolik yuz berdi:", error);
      }
    };
    fetchOtganVoqealar();
  }, []);

  return (
    <div>
      <div className="bg-gray-200  text-center py-6 lg:py-10 xl:py-16 2xl:py-20 ">
        <h1 className="text-[2em] lg:text-[4em] font-semibold">
          <TranslateMessage id="navDropOtganVoqea" />
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-5 px-5 lg:px-0 max-w-6xl mx-auto my-20">
        {data &&
          data.map((item, idx) => {
            return (
              <div key={idx} className="mt-10">
                <h1 className="text-xl md:text-2xl text-blue-500 font-bold">
                  {item[`title_${Lang}`]}
                </h1>
                <p className="text-xl md:text-2xl mt-2">
                  <span className="text-gray-700 font-bold">Rais:</span>
                  <span>{item[`rais_${Lang}`]}</span>
                </p>
                <p className="text-xl md:text-2xl mt-2">
                  <span className="text-gray-700 font-bold">Mavzu:</span>
                  <span>
                  {item[`mavzu_${Lang}`]}
                  </span>
                </p>
                <p className="text-xl md:text-2xl mt-2">
                  <span className="text-gray-700 font-bold">Sana:</span>
                  <span>{item[`sana_${Lang}`]}</span>
                </p>
                <p className="text-xl md:text-2xl mt-2">
                  <span className="text-gray-700 font-bold">
                    O'tkazilish joyi:
                  </span>
                  <span>{item[`joy_${Lang}`]}</span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default OtganVoqealar;
