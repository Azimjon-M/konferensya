import React, { useState, useEffect } from "react";
import TranslateMessage from "../TranslateMessage";
import APIBoglanish from "../../services/boglanish";

const MaqolaJonatishCom = () => {
    const [data, setData] = useState(null);

    const getData = async () => {
        await APIBoglanish.getBoglanish()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <div className="bg-gray-200  text-center py-6 lg:py-10 xl:py-16 2xl:py-20 mb-5">
                <h1 className="text-[2em] lg:text-[4em] font-semibold">
                    <TranslateMessage id="navDropMaqolaJonat" />
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-4 sm:px-8 md:px-12 lg:px-16">
                <h2 className="font-bold text-lg text-center md:text-start mb-5">
                    <TranslateMessage id="maqolaJonatish" />:
                </h2>
                {data && (
                    <a
                        className="link text-blue-400 text-lg mb-5"
                        href={`mailto:${data[0].email_1}`}
                    >
                        {data[0].email_1}
                    </a>
                )}
            </div>
        </div>
    );
};

export default MaqolaJonatishCom;
