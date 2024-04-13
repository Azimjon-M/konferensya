import React from "react";
import rasm from "../../assets/images/03.jpg";
import rasm1 from "../../assets/images/02.jpg";

// import TranslateMessage from "../TranslateMessage";

const TaklifEtilganlar = () => {
  return (
    <div>
      <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16 mb-5">
        <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
          {/* <TranslateMessage id="AsosiyMaruzachilar" /> */}
          Taklif etilganlar
        </h1>
      </div>

      {/* Card */}
      <div className="max-w-7xl mx-auto p-3 xl:p-0 grid md:grid-cols-2 gap-5">
        <div className="text-center">
          <img className="md:w-84 h-64 object-cover lg:w-96 rounded mb-5 mx-auto" src={rasm} alt="" />

          <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-3">
            Palonchiyev Pistonchi
          </h3>
          <p className="mb-5 text-md md:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            eos. Veritatis placeat ex magnam
          </p>
        </div>

        {/* Card */}
        <div className="text-center">
          <img className="md:w-84 h-64 object-cover lg:w-96 rounded mb-5 mx-auto" src={rasm1} alt="" />

          <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-3">
            Palonchiyev Pistonchi
          </h3>
          <p className="mb-5 text-md md:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            eos. Veritatis placeat ex magnam
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaklifEtilganlar;
