import React, { useState, useEffect } from "react";
import APIHome from "../../services/homeWelcome";
import { useSelector } from "react-redux";

const WelcomeSec = () => {
    const Lang = useSelector((state) => state.reducerLang.isLang);
    const [data, setData] = useState(null);

    const getData = async () => {
        await APIHome.getWelcome()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {data &&
                data.map((item) => (
                    <div key={item.id} className="flex flex-col bg-gray-50">
                        <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                            <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                                {item && item[`title_${Lang}`]}
                            </h1>
                        </div>
                        <div className="p-5 sm:p-8 md:px-12 lg:px-16 lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                            <p className="">{item && item[`body_1_${Lang}`]}</p>
                            <p className="">{item && item[`body_2_${Lang}`]}</p>
                            <p className="">{item && item[`body_3_${Lang}`]}</p>
                            <p className="">{item && item[`body_4_${Lang}`]}</p>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default WelcomeSec;
