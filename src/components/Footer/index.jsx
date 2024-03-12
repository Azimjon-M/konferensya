import React from "react";
import { Link } from "react-router-dom";
import Telegram from "../../assets/icons/icon-telegram.png";
import Instagram from "../../assets/icons/icon-instagram.png";
import Facebook from "../../assets/icons/icon-facebook.png";
import Youtube from "../../assets/icons/icon-youtube.png";
import Rivojlanish from "../Rivojlanish";

const Footer = () => {
    return (
        <footer className="bg-gray-50">
            <div className="w-full my-10">
                <Rivojlanish />
            </div>
            <div class="flex justify-center sm:justify-end">
                <ul class="w-full flex sm:justify-end gap-2 sm:gap-3 md:gap-4 py-4 px-4 bg-gray-200">
                    <li class="w-[40px] h-auto">
                        <Link target="_blank" to="https://t.me/kspi_rector">
                            <img
                                class="w-full h-auto"
                                src={Telegram}
                                alt="Telegram"
                            />
                        </Link>
                    </li>
                    <li class="w-[40px] h-auto">
                        <Link
                            target="_blank"
                            to="https://www.facebook.com/kspi.official"
                        >
                            <img
                                class="w-full h-auto"
                                src={Instagram}
                                alt="Facebookk"
                            />
                        </Link>
                    </li>
                    <li class="w-[40px] h-auto">
                        <Link
                            target="_blank"
                            to="https://www.instagram.com/kspi_uz/"
                        >
                            <img
                                class="w-full h-auto"
                                src={Facebook}
                                alt="Instagram"
                            />
                        </Link>
                    </li>
                    <li class="w-[40px] h-auto">
                        <Link
                            target="_blank"
                            to="https://www.youtube.com/channel/UCBsyccBLWP39G2HnTZjzmYA"
                        >
                            <img
                                class="w-full h-auto"
                                src={Youtube}
                                alt="Youtube"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="bg-black text-white text-center py-1">
                <p class="m-0">
                    © 2024 IT PARK. All Rights Reserved By KSPI IT PARK.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
