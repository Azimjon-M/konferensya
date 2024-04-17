import React, { useEffect, useState } from "react";
import APIMaqolaTalab from "../../services/talab";
import { useSelector } from "react-redux";
import TranslateMessage from "../TranslateMessage";

const MaqolaTalab = () => {
    const Lang = useSelector((state) => state.reducerLang.isLang);
    const [data, setData] = useState(null);
    const [dataTalab, setDataTalab] = useState(null);
    // const [dataXalqaroTalab, setDataXalqaroTalab] = useState(null);

    const getData = async () => {
        await APIMaqolaTalab.getMaqolaTalab()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
        await APIMaqolaTalab.getMaqolaTalablar()
            .then((res) => setDataTalab(res.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <div className="bg-gray-200  text-center py-6 lg:py-10 xl:py-16 2xl:py-20 ">
                <h1 className="text-[2em] lg:text-[4em] font-semibold">
                    <TranslateMessage id="navDropMaqolaTalab" />
                </h1>
            </div>
            <div className="px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                {data &&
                    data.map((item) => (
                        <div className="mb-5 text-md md:text-lg xl:text-xl" key={item.id}>
                            <p>
                                {item[`title_${Lang}`]}
                            </p>
                            <p>
                                {item[`subtitle_${Lang}`]}:
                            </p>
                        </div>
                    ))}
                <ul className="mb-5 text-md md:text-lg xl:text-xl">
                    {dataTalab &&
                        dataTalab.map((item) => (
                            <li className="list-disc ms-6" key={item.id}>{item[`name_${Lang}`]}</li>
                        ))}
                </ul>
                {data &&
                    data.map((item) => (
                        <div className="mb-5 text-md md:text-lg xl:text-xl" key={item.id}>
                            <span>
                                {item[`link_text_${Lang}`]}
                            </span>
                            <a href={item.file} className="link ms-3 text-blue-500">
                                <TranslateMessage id="MaqolaTalabBtn" />
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MaqolaTalab;
