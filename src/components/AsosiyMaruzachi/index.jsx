import React, { useState, useEffect } from "react";
import APIMaruza from "../../services/maruzachi";
import rasm from "../../assets/images/03.jpg";

// import TranslateMessage from "../TranslateMessage";

const AsosiyMaruzachi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fechtMuhimSana = async () => {
      try {
        const response = await APIMaruza.getMaruza();
        setData(response.data);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      }
    };
    fechtMuhimSana();
  }, []);

  return (
    <div>
      <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16 mb-5">
        <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
          {/* <TranslateMessage id="AsosiyMaruzachilar" /> */}
          Asosiy Maruzachilar
        </h1>
      </div>
      {data &&
        data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center max-w-7xl mx-auto text-center p-3 xl:p-0"
          >
            <img className="w-96 rounded mb-5" src={item.rasm} alt="" />

            <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-3">
              {item.name_uz}
            </h3>
            <p className="mb-5 text-md md:text-lg xl:text-xl">
              <b>Mavzu: </b>
              {item.sarlavxa_uz}
            </p>

            <h3 className="text-xl md:text-2xl xl:text-3xl mb-3">
              Annotatsiya
            </h3>
            <div className="mb-5 text-md md:text-lg xl:text-xl">
              {item.xulosa_uz}
            </div>

            <h3 className="text-xl md:text-2xl xl:text-3xl mb-3">
              Biografiyasi:
            </h3>
            <div className="mb-5 text-md md:text-lg xl:text-xl">
              {item.tarjima_xol_uz}
            </div>
          </div>
        ))}
    </div>
  );
};

export default AsosiyMaruzachi;
