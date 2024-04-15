import React, { useEffect, useState } from "react";
import APIQomita from "../../services/qomita";

function Qomita() {
  const [hammuallif, setHammuallif] = useState([]);
  const [homiy, setHomiy] = useState([]);
  const [ilmiydastur, setIlmiydastur] = useState([]);
  const [kotibiyat, setKotibiyat] = useState([]);
  const [logistika, setLogistika] = useState([]);
  const [maslahatchi, setMaslahatchi] = useState([]);
  const [rais, setRais] = useState([]);
  const [raisorinbosari, setRaisorinbosari] = useState([]);
  const [reklama, setReklama] = useState([]);
  const [xazinachi, setXazinachi] = useState([]);

  useEffect(() => {
    const fechtQomita = async () => {
      try {
        const resHammuallif = await APIQomita.hammuallif();
        const resHomiy = await APIQomita.homiy();
        const resIlmiydastur = await APIQomita.ilmiydastur();
        const resKotibiyat = await APIQomita.kotibiyat();
        const resLogistika = await APIQomita.logistika();
        const resMaslahatchi = await APIQomita.maslahatchi();
        const resRais = await APIQomita.rais();
        const resRaisorinbosari = await APIQomita.raisorinbosari();
        const resReklama = await APIQomita.reklama();
        const resXazinachi = await APIQomita.xazinachi();

        setHammuallif(resHammuallif.data);
        setHomiy(resHomiy.data);
        setIlmiydastur(resIlmiydastur.data);
        setKotibiyat(resKotibiyat.data);
        setLogistika(resLogistika.data);
        setMaslahatchi(resMaslahatchi.data);
        setRais(resRais.data);
        setRaisorinbosari(resRaisorinbosari.data);
        setReklama(resReklama.data);
        setXazinachi(resXazinachi.data);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      }
    };
    fechtQomita();
  }, []);

  console.log(hammuallif, homiy, ilmiydastur, maslahatchi, rais);

  return (
    <div className="grid gap-10 bg-gray-50 px-5 lg:px-0 mx-auto text-center py-10 ">
      <p>
        <span className="text-2xl font-bold">Homiy:</span>
        <br />
        {homiy &&
          homiy.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold">Maslahatchi:</span>
        <br />
        {maslahatchi &&
          maslahatchi.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold">Hammuallif:</span>
        <br />
        {hammuallif &&
          hammuallif.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold">Rais:</span>
        <br />
        {rais &&
          rais.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold">Rais o'rinbosari:</span>
        <br />
        {raisorinbosari &&
          raisorinbosari.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold">Kotibiyat:</span>
        <br />
        {kotibiyat &&
          kotibiyat.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold">Xazinachi:</span>
        <br />
        {xazinachi &&
          xazinachi.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold">Ilmiy dastur:</span>
        <br />
        {ilmiydastur &&
          ilmiydastur.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold">Reklama:</span>
        <br />
        {reklama &&
          reklama.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold">Logistika:</span>
        <br />
        {logistika &&
          logistika.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item.name_uz}
              </span>
            );
          })}
      </p>
    </div>
  );
}

export default Qomita;
