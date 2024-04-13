import React, { useState, useEffect } from "react";
import TranslateMessage from "../TranslateMessage";
import APIHome from "../../services/home";
import { useSelector } from "react-redux";

const AsosiySanalar = () => {
    const Lang = useSelector((state) => state.reducerLang.isLang);
    const [data, setData] = useState(null);

    const getData = async () => {
        await APIHome.getMuhmSana()
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
                    <TranslateMessage id="homMuhimSana" />
                </h1>
            </div>
            <div className="my-10 lg:my-16 px-4 sm:px-8 md:px-10 lg:px-14 xl:px-16">
                {data &&
                    data.map((item) => (
                        <div key={item.id} className="flex lg:text-[1.2em] 2xl:text-[1.4em] gap-x-2 lg:gap-x-3">
                            <h1 className="font-bold">
                                {item[`title_${Lang}`]}
                            </h1>
                            <p>{item[`body_${Lang}`]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AsosiySanalar;
