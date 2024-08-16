import React, { useEffect, useState } from "react";
import APIQomita from "../../services/qomita";
import { useSelector } from "react-redux";
import TranslateMessage from "../TranslateMessage";

function Qomita() {
    const Lang = useSelector((state) => state.reducerLang.isLang);

    const [rais, setRais] = useState([]);
    const [raisorinbosari, setRaisorinbosari] = useState([]);
    const [hammuallif, setHammuallif] = useState([]);
    const [maslahatchi, setMaslahatchi] = useState([]);
    const [ilmiydastur, setIlmiydastur] = useState([]);
    const [kotibiyat, setKotibiyat] = useState([]);
    const [logistika, setLogistika] = useState([]);
    const [homiy, setHomiy] = useState([]);
    const [reklama, setReklama] = useState([]);
    const [xazinachi, setXazinachi] = useState([]);

    const getData = async () => {
        await APIQomita.getRais()
            .then((res) => setRais(res.data))
            .catch((err) => console.log(err));

        await APIQomita.getRaisorinbosari()
            .then((res) => setRaisorinbosari(res.data))
            .catch((err) => console.log(err));

        await APIQomita.getHammuallif()
            .then((res) => setHammuallif(res.data))
            .catch((err) => console.log(err));

        await APIQomita.getMaslahatchi()
            .then((res) => setMaslahatchi(res.data))
            .catch((err) => console.log(err));

        await APIQomita.getIlmiydastur()
            .then((res) => setIlmiydastur(res.data))
            .catch((err) => console.log(err));

        await APIQomita.getKotibiyat()
            .then((res) => setKotibiyat(res.data))
            .catch((err) => console.log(err));

        await APIQomita.getLogistika()
            .then((res) => setLogistika(res.data))
            .catch((err) => console.log(err));

        await APIQomita.getHomiy()
            .then((res) => setHomiy(res.data))
            .catch((err) => console.log(err));

        await APIQomita.getReklama()
            .then((res) => setReklama(res.data))
            .catch((err) => console.log(err));

        await APIQomita.getXazinachi()
            .then((res) => setXazinachi(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="grid gap-10 bg-gray-50 px-5 lg:px-0 mx-auto text-center pb-10">
            <div className="bg-gray-200  text-center py-6 lg:py-10 xl:py-16 2xl:py-20 ">
                <h1 className="text-[2em] lg:text-[4em] font-semibold">
                    <TranslateMessage id="navDropQomita" />
                </h1>
            </div>
            <p>
                <span className="text-2xl font-bold">
                    <TranslateMessage id="qomitaHomiy" />:
                </span>
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
                <span className="text-2xl font-bold">
                    <TranslateMessage id="qomitaMaslahatchi" />:
                </span>
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
                <span className="text-2xl font-bold">
                    <TranslateMessage id="qomitaHammuallif" />:
                </span>
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
                <span className="text-2xl font-bold">
                    <TranslateMessage id="qomitaRais" />:
                </span>
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
                <span className="text-2xl font-bold">
                    <TranslateMessage id="qomitaRaisOrinbosari" />:
                </span>
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
                <span className="text-2xl font-bold">
                    <TranslateMessage id="qomitaKotibiyat" />:
                </span>
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
                <span className="text-2xl font-bold">
                    <TranslateMessage id="qomitaXazinachi" />:
                </span>
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
                <span className="text-2xl font-bold">
                    <TranslateMessage id="qomitaIlmiyDastur" />:
                </span>
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
                <span className="text-2xl font-bold">
                    <TranslateMessage id="qomitaReklama" />:
                </span>
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
                <span className="text-2xl font-bold">
                    <TranslateMessage id="qomitaLogistika" />:
                </span>
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
