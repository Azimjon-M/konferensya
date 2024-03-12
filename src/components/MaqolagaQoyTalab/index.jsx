import React from "react";


const MaqolagaQoyTalab = () => {
    return (
        <div className="flex flex-col bg-gray-50">
            <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                    Maqolaga qo'yilgan talablar
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 py-10">
                <p>Maqolaga qo'yilgan talablar pdfni yuklab olish</p>
                <a href="Download_file" className="btn btn-sm md:btn-md btn-success text-white font-bold">Download</a>
            </div>
        </div>
    );
};

export default MaqolagaQoyTalab;
