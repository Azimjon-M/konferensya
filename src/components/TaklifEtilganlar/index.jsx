import React, { useState, useEffect } from "react";
import APITaklif from "../../services/taklif";

import TranslateMessage from "../TranslateMessage";

const TaklifEtilganlar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fechtMuhimSana = async () => {
      try {
        const response = await APITaklif.getTaklif();
        setData(response.data);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      }
    };
    fechtMuhimSana();
  }, []);
  return (
    <div>
      <div className="bg-gray-200  text-center py-6 lg:py-10 xl:py-16 2xl:py-20 mb-5">
        <h1 className="text-[2em] lg:text-[4em] font-semibold">
        <TranslateMessage id="navDromTaklifEtilgan" />
        </h1>
      </div>

      {/* Card */}
      <div className="max-w-7xl mx-auto p-3 xl:p-0 grid md:grid-cols-2 gap-5">
        {data &&
          data.map((item, idx) => (
            <div key={idx} className="text-center">
              <img
                className="md:w-84 h-64 object-cover lg:w-96 rounded mb-5 mx-auto"
                src={item.rasm}
                alt=""
              />

              <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-3">
                {item.name_uz}
              </h3>
              <p className="mb-5 text-md md:text-lg xl:text-xl">
                {item.lavozim_uz}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaklifEtilganlar;
