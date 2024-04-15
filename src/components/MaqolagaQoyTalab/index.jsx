import React, { useState, useEffect } from "react";
import TranslateMessage from "../TranslateMessage";
import APIHome from "../../services/home";

const MaqolagaQoyTalab = () => {
    const [data, setData] = useState(null);

    const getData = async () => {
        await APIHome.getMaqolaTalab()
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
                    <TranslateMessage id="MaqolaTalab" />
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 py-10">
                <p>
                    <TranslateMessage id="MaqolaTalabContent" />
                </p>
                {data &&
                    data.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.file}
                            className="btn btn-sm md:btn-md btn-success text-white font-bold"
                        >
                            <TranslateMessage id="MaqolaTalabBtn" />
                        </a>
                    ))}
            </div>
        </div>
    );
};

export default MaqolagaQoyTalab;
