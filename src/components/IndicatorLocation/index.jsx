import React from "react";

const IndicatorLocation = () => {
    const value = 2;
    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-10 bg-gray-50">
            <div className="bg-gray-200 w-full px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                    Hozirda ketilanayotgan daraja
                </h1>
            </div>
            <div className="w-[80%] my-14">
                <input
                    type="range"
                    min="1"
                    max="4"
                    value={value}
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
                    <h1 className="text-[18px] ">Maqolani qabul qilish</h1>
                    <h1 className="text-[18px] ">Maqolani tekshirish</h1>
                    <h1 className="text-[18px] ">Maqolani tasdiqlash</h1>
                    <h1 className="text-[18px] ">Maqolani chiqarish</h1>
                </div>
            </div>
        </div>
    );
};

export default IndicatorLocation;
