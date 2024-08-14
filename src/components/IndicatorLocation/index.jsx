import React, { useState, useEffect } from "react";
import APIJarayon from "../../services/homeJarayon";
import TranslateMessage from "../TranslateMessage";

const JarayonlarKorsatkichi = () => {
    const [data, setData] = useState('');

    const getData = async () => {
        await APIJarayon.getJarayon()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-10 bg-gray-50">
            <div className="bg-gray-200 w-full px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                    <TranslateMessage id="homJarayonKorsatkich" />
                </h1>
            </div>
            <div className="w-[80%] my-14">
                <input
                    readOnly
                    type="range"
                    min="1"
                    max="4"
                    value={`${data[0]?.son}`}
                    className="range range-success"
                    step="1"
                />
                <div className="w-full flex justify-between text-xs px-[10px] mt-4">
                    <span className="text-[20px] font-bold">|</span>
                    <span className="text-[20px] font-bold">|</span>
                    <span className="text-[20px] font-bold">|</span>
                    <span className="text-[20px] font-bold">|</span>
                </div>
                <div className="w-full flex justify-between text-xs mt-4">
                    <h1 className="text-[18px] ">
                        <TranslateMessage id="homJarayonKorsatkichContent_1" />
                    </h1>
                    <h1 className="text-[18px] ">
                        <TranslateMessage id="homJarayonKorsatkichContent_2" />
                    </h1>
                    <h1 className="text-[18px] ">
                        <TranslateMessage id="homJarayonKorsatkichContent_3" />
                    </h1>
                    <h1 className="text-[18px] ">
                        <TranslateMessage id="homJarayonKorsatkichContent_4" />
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default JarayonlarKorsatkichi;
