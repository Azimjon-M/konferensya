import React, { useEffect, useState } from "react";
import APIMaqolaTalab from "../../services/talab";
import { useSelector } from "react-redux";

const MaqolaTalab = () => {
    const Lang = useSelector((state) => state.reducerLang.isLang);
    const [data, setData] = useState(null);
    const [dataTalab, setDataTalab] = useState(null);

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
                    Maqola talablari
                </h1>
            </div>
            <div>
                {data &&
                    data.map((item) => (
                        <div key={item.id}>
                            <p>{item[`title_${Lang}`]}</p>
                            <p>{item[`subtitle_${Lang}`]}</p>
                            <ul>
                                <b>Taablar:</b>
                                {
                                    dataTalab && dataTalab.map(item => (
                                        <li key={item.id}>
                                            {item[`name_${Lang}`]}
                                        </li>
                                    ))
                                }
                            </ul>
                            <span>{item[`link_text_${Lang}`]}</span><a href={item.file} className="link">Yuklab olish</a>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MaqolaTalab;
