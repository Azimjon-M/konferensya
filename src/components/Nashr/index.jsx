import React, { useEffect, useState } from "react";
import APINash from "../../services/nashr";

function Nashr() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchNashr = async () => {
      try {
        const response = await APINash.get();
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNashr();
  }, []);
  return (
    <div>
      <div className="bg-gray-200  text-center py-6 lg:py-10 xl:py-16 2xl:py-20 ">
        <h1 className="text-[2em] lg:text-[4em] font-semibold">Nashr</h1>
      </div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id} className="max-w-6xl mx-5 lg:mx-auto mt-20">
              <div className="grid grid-cols-1 md:grid-cols-3 h-96">
                <div className="border px-5 py-4">
                  <img
                    src={item.rasm}
                    className="object-contain w-full h-full"
                    alt="Nashr rasmi"
                  />
                </div>
                <div className="col-span-2 border md:border-l-0 px-5 py-4 flex flex-col justify-center">
                  <a href="sss" className="text-2xl text-blue-700">
                    {item.title_uz}
                  </a>
                  <h3 className="text-2xl text-gray-600 font-bold">
                    {item.subtitle_uz}
                  </h3>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-lg md:text-2xl">{item.content_uz}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Nashr;
