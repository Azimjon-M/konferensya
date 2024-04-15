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
    <div>
      <p>
        <span>Homiy:</span>
        <span>ssss</span>
      </p>
    </div>
  );
}

export default Qomita;
