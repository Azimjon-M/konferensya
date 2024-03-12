import React from "react";

const IlmiyYonalish = () => {
    return (
        <div className="flex flex-col bg-gray-50">
            <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">Ilmiy Yo'nalishlar</h1>
            </div>
            <div className="p-5 sm:p-8 md:px-12 lg:px-16 lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                <ol className="list-decimal">
                    <li>
                        content 1
                    </li>
                    <li>
                        content 2
                    </li>
                    <li>
                        content 3
                    </li>
                    <li>
                        content 4
                    </li>
                    <li>
                        content 5
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default IlmiyYonalish;
