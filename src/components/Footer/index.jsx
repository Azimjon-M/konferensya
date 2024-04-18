import React from "react";
import { Link, useLocation } from "react-router-dom";
import Telegram from "../../assets/icons/icon-telegram.png";
import Instagram from "../../assets/icons/icon-instagram.png";
import Facebook from "../../assets/icons/icon-facebook.png";
import Youtube from "../../assets/icons/icon-youtube.png";
import Rivojlanish from "../Rivojlanish";
import ItPark from "../../assets/icons/ItPark.png";

const Footer = () => {
    const location = useLocation();

    if (location.pathname === "/authors") {
        return null;
    }
    return (
        <footer className="bg-gray-50">
            <div className="w-full my-10">
                <Rivojlanish />
            </div>
            <div className="flex justify-center sm:justify-end">
                <ul className="w-full flex sm:justify-end gap-2 sm:gap-3 md:gap-4 py-4 px-4 bg-gray-200">
                    <li className="w-[40px] h-auto">
                        <Link target="_blank" to="https://t.me/kspi_rector">
                            <img
                                className="w-full h-auto"
                                src={Telegram}
                                alt="Telegram"
                            />
                        </Link>
                    </li>
                    <li className="w-[40px] h-auto">
                        <Link
                            target="_blank"
                            to="https://www.facebook.com/kspi.official"
                        >
                            <img
                                className="w-full h-auto"
                                src={Instagram}
                                alt="Facebookk"
                            />
                        </Link>
                    </li>
                    <li className="w-[40px] h-auto">
                        <Link
                            target="_blank"
                            to="https://www.instagram.com/kspi_uz/"
                        >
                            <img
                                className="w-full h-auto"
                                src={Facebook}
                                alt="Instagram"
                            />
                        </Link>
                    </li>
                    <li className="w-[40px] h-auto">
                        <Link
                            target="_blank"
                            to="https://www.youtube.com/channel/UCBsyccBLWP39G2HnTZjzmYA"
                        >
                            <img
                                className="w-full h-auto"
                                src={Youtube}
                                alt="Youtube"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <Link to="authors">
                <div className="bg-black text-white text-center py-4">
                    <p>
                        Barcha huquqlar QDPI IT PARK tomonidan himoyalangan ©
                        2024.
                    </p>
                    <p className="flex flex-wrap justify-center items-center m-0">
                        Ishlab chqaruvchi{" "}
                        <img
                            className="w-[20px] h-[20px] ms-2 me-[2px]"
                            src={ItPark}
                            alt="it park Logo"
                        />{" "}
                        IT PARK
                    </p>
                </div>
            </Link>
        </footer>
    );
};

export default Footer;
