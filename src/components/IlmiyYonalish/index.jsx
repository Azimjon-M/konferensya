import React, { useState, useEffect } from "react";
import TranslateMessage from "../../components/TranslateMessage/index";
import APIHome from "../../services/home";
import { useSelector } from "react-redux";

const KonferensyaBolimlari = () => {
    const Lang = useSelector((state) => state.reducerLang.isLang);
    const [data, setData] = useState(null);

    const getData = async () => {
        await APIHome.getBolim()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex flex-col bg-gray-50">
            <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                    <TranslateMessage id="homKonferensyaBolim" />
                </h1>
            </div>
            <div className="p-5 sm:p-8 md:px-12 lg:px-16 lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                <ol className="list-decimal">
                    {data &&
                        data.map((item) => <li key={item.id}>{item[`title_${Lang}`]}</li>)}
                </ol>
            </div>
        </div>
    );
};

export default KonferensyaBolimlari;
