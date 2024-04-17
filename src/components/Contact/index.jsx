import React, { useState, useEffect } from "react";
import icon_top from "../../assets/images/icon_top.jpg";
import icon_bottom from "../../assets/images/icon_bottom.jpg";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import APIBoglanish from "../../services/boglanish";

const Contact = () => {
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
            <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16 mb-5">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                    Bog'lanish
                </h1>
            </div>
            <div className="flex flex-col items-center mt-10 mb-5">
                <img src={icon_top} alt="icon" />
                <div className="flex flex-col items-center my-5 px-5 text-center">
                    <h2 className="font-bold mb-5 text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        Institut address
                    </h2>
                    <p className="mb-10 text-md md:text-lg lg:text-xl xl:text-2xl">
                        Farg'ona viloyati Qo'qon shaxri Turon ko'chasi 17-uy
                    </p>
                    {data &&
                        data.map((item) => (
                            <div key={item.id}>
                                <div className="flex items-center justify-center text-md md:text-lg lg:text-xl xl:text-2xl mb-3">
                                    <FaPhone className="mr-3" /> {item.tel_1}
                                </div>
                                <div className="flex items-center justify-center text-md md:text-lg lg:text-xl xl:text-2xl mb-3">
                                    <FaPhone className="mr-3" /> {item.tel_2}
                                </div>
                                <div className="flex items-center justify-center text-md md:text-lg lg:text-xl xl:text-2xl mb-3">
                                    <IoIosMail className="mr-3 w-[22px] h-auto" /> {item.email_1}
                                </div>
                                <div className="flex items-center justify-center text-md md:text-lg lg:text-xl xl:text-2xl">
                                    <IoIosMail className="mr-3 w-[22px] h-auto" /> {item.email_2}
                                </div>
                            </div>
                        ))}
                </div>
                <img src={icon_bottom} alt="icon" />
            </div>
        </div>
    );
};

export default Contact;
