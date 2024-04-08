import React from "react";
import TranslateMessage from "../../components/TranslateMessage/index";

const KonferensyaBolimlari = () => {
    return (
        <div className="flex flex-col bg-gray-50">
            <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                    <TranslateMessage id="homKonferensyaBolim" />
                </h1>
            </div>
            <div className="p-5 sm:p-8 md:px-12 lg:px-16 lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                <ol className="list-decimal">
                    <li><TranslateMessage id="homKonferensyaBolimContent_1" /></li>
                    <li><TranslateMessage id="homKonferensyaBolimContent_2" /></li>
                    <li><TranslateMessage id="homKonferensyaBolimContent_3" /></li>
                    <li><TranslateMessage id="homKonferensyaBolimContent_4" /></li>
                    <li><TranslateMessage id="homKonferensyaBolimContent_5" /></li>
                </ol>
            </div>
        </div>
    );
};

export default KonferensyaBolimlari;
