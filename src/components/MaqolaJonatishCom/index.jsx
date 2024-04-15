import React from "react";

const MaqolaJonatishCom = () => {
  return (
    <div>
      <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16 mb-5">
        <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
          Maqola jo'natish
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-4 sm:px-8 md:px-12 lg:px-16">
        <h2 className="font-bold text-lg text-center md:text-start mb-5">
          Maqolangizni ushbu elektron pochta manziliga yuborishingiz mumkin
        </h2>
        <a
          className="link text-blue-400 text-lg mb-5"
          href="mailto:example@mail.ru"
        >
          example@mail.ru
        </a>
      </div>
    </div>
  );
};

export default MaqolaJonatishCom;
