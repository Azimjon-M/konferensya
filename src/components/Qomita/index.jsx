import React, { useEffect, useState } from "react";
import APIQomita from "../../services/qomita";
import { useSelector } from "react-redux";
import TranslateMessage from "../TranslateMessage";

function Qomita() {

  const Lang = useSelector((state) => state.reducerLang.isLang);

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
        const resHammuallif = await APIQomita.getHammuallif();
        const resHomiy = await APIQomita.getHomiy();
        const resIlmiydastur = await APIQomita.getIlmiydastur();
        const resKotibiyat = await APIQomita.getKotibiyat();
        const resLogistika = await APIQomita.getLogistika();
        const resMaslahatchi = await APIQomita.getMaslahatchi();
        const resRais = await APIQomita.getRais();
        const resRaisorinbosari = await APIQomita.getRaisorinbosari();
        const resReklama = await APIQomita.getReklama();
        const resXazinachi = await APIQomita.getXazinachi();

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

  return (
    <div className="grid gap-10 bg-gray-50 px-5 lg:px-0 mx-auto text-center pb-10">
      <div className="bg-gray-200  text-center py-6 lg:py-10 xl:py-16 2xl:py-20 ">
        <h1 className="text-[2em] lg:text-[4em] font-semibold">
          <TranslateMessage id="navDropQomita"/>
        </h1>
      </div>
      <p>
        <span className="text-2xl font-bold"><TranslateMessage id="qomitaHomiy"/>:</span>
        <br />
        {homiy &&
          homiy.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item[`name_${Lang}`]}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold"><TranslateMessage id="qomitaMaslahatchi"/>:</span>
        <br />
        {maslahatchi &&
          maslahatchi.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item[`name_${Lang}`]}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold"><TranslateMessage id="qomitaHammuallif"/>:</span>
        <br />
        {hammuallif &&
          hammuallif.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item[`name_${Lang}`]}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold"><TranslateMessage id="qomitaRais"/>:</span>
        <br />
        {rais &&
          rais.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item[`name_${Lang}`]}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold"><TranslateMessage id="qomitaRaisOrinbosari"/>:</span>
        <br />
        {raisorinbosari &&
          raisorinbosari.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item[`name_${Lang}`]}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold"><TranslateMessage id="qomitaKotibiyat"/>:</span>
        <br />
        {kotibiyat &&
          kotibiyat.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item[`name_${Lang}`]}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold"><TranslateMessage id="qomitaXazinachi"/>:</span>
        <br />
        {xazinachi &&
          xazinachi.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item[`name_${Lang}`]}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold"><TranslateMessage id="qomitaIlmiyDastur"/>:</span>
        <br />
        {ilmiydastur &&
          ilmiydastur.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item[`name_${Lang}`]}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold"><TranslateMessage id="qomitaReklama"/>:</span>
        <br />
        {reklama &&
          reklama.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item[`name_${Lang}`]}
              </span>
            );
          })}
      </p>
      <p>
        <span className="text-2xl font-bold"><TranslateMessage id="qomitaLogistika"/>:</span>
        <br />
        {logistika &&
          logistika.map((item) => {
            return (
              <span className="text-2xl" key={item.id}>
                {item[`name_${Lang}`]}
              </span>
            );
          })}
      </p>
    </div>
  );
}

export default Qomita;