import React, { useEffect, useState } from "react";
import APIQomita from "../../services/qomita";

function Qomita() {
  const [services, setServices] = useState({
    homiy: [],
    maslahatchi: [],
    hammuallif: [],
    rais: [],
    raisorinbosari: [],
    kotibiyat: [],
    xazinachi: [],
    ilmiydastur: [],
    reklama: [],
    logistika: [],
  });

  useEffect(() => {
    const fechtData = async () => {
      try {
        const data = await Promise.all([
          APIQomita.getHomiy(),
          APIQomita.getMaslahatchi(),
          APIQomita.getHammuallif(),
          APIQomita.getRais(),
          APIQomita.getRaisorinbosari(),
          APIQomita.getKotibiyat(),
          APIQomita.getXazinachi(),
          APIQomita.getIlmiydastur(),
          APIQomita.getReklama(),
          APIQomita.getLogistika(),
        ]);

        const servicesData = data.map((response) => response.data);

        setServices({
          homiy: servicesData[0],
          maslahatchi: servicesData[1],
          hammuallif: servicesData[2],
          rais: servicesData[3],
          raisOrinbosari: servicesData[4],
          kotibiyat: servicesData[5],
          xazinachi: servicesData[6],
          ilmiyDastur: servicesData[7],
          reklama: servicesData[8],
          logistika: servicesData[9],
        });
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      }
    };
    fechtData();
  }, []);

  return (
    <div className="grid gap-10 bg-gray-50 px-5 lg:px-0 mx-auto text-center py-10 ">
      {Object.entries(services).map(([serviceName, serviceData]) => (
        <p key={serviceName}>
          <span className="text-2xl font-bold">
            {serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}:
          </span>
          <br />
          {serviceData &&
            serviceData.map((item) => (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            ))}
        </p>
      ))}
    </div>
  );
}

export default Qomita;
