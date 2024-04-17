import React, { useEffect, useState } from "react";
import APIMuhimSana from "../../services/muhimSana";

const MuhimSanalar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fechtMuhimSana = async () => {
      try {
        const response = await APIMuhimSana.getMuhimSana();
        setData(response.data);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      }
    };
    fechtMuhimSana();
  }, []);
  return (
    <main>
      <div className="bg-gray-200  text-center py-6 lg:py-10 xl:py-16 2xl:py-20 ">
        <h1 className="text-[2em] lg:text-[4em] font-semibold">
          Muhim Sanalar
        </h1>
      </div>
      <div className="max-w-6xl mx-auto my-10 lg:my-16 px-4 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        {data &&
          data.map((item, idx) => (
            <div
              key={idx}
              className="flex mt-2 lg:text-[1.2em] 2xl:text-[1.4em] gap-x-2 lg:gap-x-3"
            >
              <h1 className="font-bold">{item.title_uz}:</h1>
              <p>{item.body_uz}</p>
            </div>
          ))}
      </div>
    </main>
  );
};
export default MuhimSanalar;
