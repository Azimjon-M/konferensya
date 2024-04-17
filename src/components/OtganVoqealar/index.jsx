import React, { useEffect, useState } from "react";
import APIOtganVoqealar from "../../services/otganVoqealar";

function OtganVoqealar() {
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
      <div className="grid md:grid-cols-2 gap-5 px-5 lg:px-0 max-w-6xl mx-auto my-20">
        {data &&
          data.map((item, idx) => {
            return (
              <div key={idx} className="mt-10">
                <h1 className="text-xl md:text-2xl text-blue-500 font-bold">
                  {item.title_uz}
                </h1>
                <p className="text-xl md:text-2xl mt-2">
                  <span className="text-gray-700 font-bold">Rais:</span>
                  <span>{item.rais_uz}</span>
                </p>
                <p className="text-xl md:text-2xl mt-2">
                  <span className="text-gray-700 font-bold">Mavzu:</span>
                  <span>
                    {item.mavzu_uz}
                  </span>
                </p>
                <p className="text-xl md:text-2xl mt-2">
                  <span className="text-gray-700 font-bold">Sana:</span>
                  <span>{item.sana_uz}</span>
                </p>
                <p className="text-xl md:text-2xl mt-2">
                  <span className="text-gray-700 font-bold">
                    O'tkazilish joyi:
                  </span>
                  <span>{item.joy_uz}</span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default OtganVoqealar;
