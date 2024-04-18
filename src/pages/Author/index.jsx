import React from "react";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { FaTelegramPlane } from "react-icons/fa";
import TranslateMessage from "../../components/TranslateMessage";

const AuthorPage = () => {
    const handleClick = () => {
        window.history.back();
    };
    const data = [
        {
            name: "Azimjon Meliboev",
            phone: "+998912022444",
            email: "azimeliboev2000@gmail.com",
            tme: "https://t.me/Azimjon_Meliboev",
        },
        {
            name: "Nurmamatov Nodirbek",
            phone: "+998992226660",
            email: "nodirjon0927@gmail.com",
            tme: "https://t.me/nodirbek2709",
        },
        {
            name: "Tuychiyev Orifxon",
            phone: "+998905863595",
            email: "orifxontuychiyev@gmail.com",
            tme: "https://t.me/Orifxon_Tuychiyev",
        },
    ];
    return (
        <div>
            <div className="sticky top-0 left-0 w-full h-auto flex justify-start border-b border-gray-200 p-2 bg-white">
                <div className="w-auto h-auto">
                    <AiOutlineLeftCircle
                        className="text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] cursor-pointer      "
                        onClick={handleClick}
                    />
                </div>
            </div>
            <div className="mt-4">
                <div className="flex justify-center items-center">
                    <h1 className="font-semibold text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem]">
                        <TranslateMessage id="authorTitle" />
                    </h1>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex justify-center items-center">
                    <h1 className="font-semibold text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.4rem]">
                        <TranslateMessage id="authorSubTitle_1" />:
                    </h1>
                </div>
            </div>
            <div className="flex flex-wrap flex-col sm:flex-row sm:justify-center xl:text-[1.1rem] 2xl:text-[1.2rem] gap-2 md:gap-3 xl:gap-8 2xl:gap-12 p-2 md:p-4 lg:py-10">
                {data?.map((item, idx) => (
                    <div key={idx} className="bg-gray-200 rounded-md p-4">
                        <div className="text-center">
                            <h1 className="font-semibold">{item.name}</h1>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <FiPhone /> <a href={`tel:${item.phone}`}>{item.phone}</a>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <GoMail className="mt-1" /> <a href={`mailto:${item.email}`}>{item.email}</a>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <FaTelegramPlane className="mt-1" /> <a href={item.tme}>{item.tme}</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <div className="flex justify-center items-center">
                    <h1 className="font-semibold text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.4rem]">
                    <TranslateMessage id="authorSubTitle_2" />:
                    </h1>
                </div>
            </div>
            <div className="flex flex-wrap flex-col sm:flex-row sm:justify-center xl:text-[1.1rem] 2xl:text-[1.2rem] p-2 md:p-4 lg:py-10">
                    <div className="bg-gray-200 rounded-md p-4">
                        <div className="text-center">
                            <h1 className="font-semibold">Hatamov Fazliddin</h1>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <FiPhone /> +998908526598
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <GoMail className="mt-1" /> hatamovfazliddin505@gmail.com
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <FaTelegramPlane className="mt-1" /> https://t.me/fazliddin98
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default AuthorPage;
