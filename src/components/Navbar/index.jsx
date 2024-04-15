import React, { useState } from "react";
import icon from "../../assets/icons/kspi-icon.jpeg";
import { Link } from "react-router-dom";
import uzIcon from "../../assets/icons/flag-uz.png";
import ruIcon from "../../assets/icons/flag-ru.png";
import enIcon from "../../assets/icons/flag-en.png";
import {
    setLangUz,
    setLangRu,
    setLangEn,
} from "../../redux/moduls/isLanguage/action";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import TranslateMessage from "../TranslateMessage";

const Navbar = () => {
    const dispatch = useDispatch();
    const Lang = useSelector((state) => state.reducerLang.isLang);
    const [togglerMenu, setTogglerMenu] = useState(false);

    const handliTogleLang = (numb) => {
        switch (numb) {
            case "1":
                dispatch(setLangUz());
                break;
            case "2":
                dispatch(setLangRu());
                break;
            case "3":
                dispatch(setLangEn());
                break;
            default:
                dispatch(setLangUz());
                break;
        }
    };
    const data = { uz: uzIcon, ru: ruIcon, en: enIcon };
    return (
        <nav className="z-50 sticky top-0 left-0">
            <div className="navbar bg-base-100 shadow-lg py-3 px-5">
                {/* lg bottom mobil */}
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* Mobil menu */}
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost xl:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {/* /Mobil menu */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/">
                                    <TranslateMessage id="navAsosiy" />
                                </Link>
                            </li>
                            <li>
                                <details>
                                    <summary>
                                        <TranslateMessage id="navMalumot" />
                                    </summary>
                                    <ul className="p-2">
                                        <li>
                                            <Link to="muhim-sanalar">
                                                <TranslateMessage id="navDropMuhmSana" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="qo'mita">
                                                <TranslateMessage id="navDropQomita" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="ilmiy-maslaxat-qo'mita">
                                                <TranslateMessage id="navDropIMQomita" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="o'tgan-voqealar">
                                                <TranslateMessage id="navDropOtganVoqea" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="nashrlar">
                                                <TranslateMessage id="navDropNashr" />
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            {/* <li>
                                <Link to="https://www.google.com">
                                    To'lovlar
                                </Link>
                            </li> */}
                            <li>
                                <details>
                                    <summary>
                                        <TranslateMessage id="navMaqola" />
                                    </summary>
                                    <ul className="p-2">
                                        <li>
                                            <Link to="maqola-talablari">
                                                <TranslateMessage id="navDropMaqolaTalab" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="maqola-jo'natish">
                                                <TranslateMessage id="navDropMaqolaJonat" />
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link to="bog'lanish">
                                    <TranslateMessage id="navBoglanish" />
                                </Link>
                            </li>
                            <li>
                                <details>
                                    <summary>
                                        <TranslateMessage id="navDastur" />
                                    </summary>
                                    <ul className="p-2">
                                        <li>
                                            <Link to="asosiy-maruzachilar">
                                                <TranslateMessage id="navDropAsosiyMaruzachi" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="taklif-etilganlar">
                                                <TranslateMessage id="navDromTaklifEtilgan" />
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    {/* Emblema */}
                    <Link to="/" className="text-xl flex items-center gap-3">
                        <img
                            className="w-[45px] h-auto"
                            src={icon}
                            alt="icon"
                        />
                        <p
                            className={`${
                                Lang === "ru" ? "w-[220px]" : "w-[160px]"
                            } hidden sm:inline-block  text-[0.8em] leading-5 font-medium`}
                        >
                            <TranslateMessage id="navLogo" />
                        </p>
                    </Link>
                    {/* /Emblema */}
                </div>
                {/* lg top */}
                <div className="navbar-center hidden xl:flex">
                    <ul className="menu menu-horizontal font-semibold px-1">
                        <li>
                            <Link to="/">
                                <TranslateMessage id="navAsosiy" />
                            </Link>
                        </li>
                        <li>
                            <div className="dropdown dropdown-hover dropdown-bottom">
                                <div tabIndex={0} role="button" className="before:absolute before:top-[40%] before:right-[10px] before:rotate-[-45deg] before:w-[8px] before:h-[8px] before:border-l-[2px] before:border-b-[2px] before:border-black pe-[10px]">
                                    <TranslateMessage id="navMalumot" />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box"
                                >
                                    <li>
                                        <Link
                                            className="whitespace-nowrap"
                                            to="muhim-sanalar"
                                        >
                                            <TranslateMessage id="navDropMuhmSana" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="whitespace-nowrap"
                                            to="qo'mita"
                                        >
                                            <TranslateMessage id="navDropQomita" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="whitespace-nowrap"
                                            to="ilmiy-maslaxat-qo'mita"
                                        >
                                            <TranslateMessage id="navDropIMQomita" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="whitespace-nowrap"
                                            to="o'tgan-voqealar"
                                        >
                                            <TranslateMessage id="navDropOtganVoqea" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="whitespace-nowrap"
                                            to="nashrlar"
                                        >
                                            <TranslateMessage id="navDropNashr" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* <li>
                            <Link to="to'lovlar">
                                <TranslateMessage id="navTolovlar" />
                            </Link>
                        </li> */}
                        <li>
                            <div className="dropdown dropdown-hover dropdown-bottom">
                                <div tabIndex={0} role="button" className="before:absolute before:top-[40%] before:right-[10px] before:rotate-[-45deg] before:w-[8px] before:h-[8px] before:border-l-[2px] before:border-b-[2px] before:border-black pe-[10px]">
                                    <TranslateMessage id="navMaqola" />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box"
                                >
                                    <li>
                                        <Link
                                            className="whitespace-nowrap"
                                            to="maqola-talablari"
                                        >
                                            <TranslateMessage id="navDropMaqolaTalab" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="whitespace-nowrap"
                                            to="maqola-jo'natish"
                                        >
                                            <TranslateMessage id="navDropMaqolaJonat" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="bog'lanish">
                                <TranslateMessage id="navBoglanish" />
                            </Link>
                        </li>
                        <li>
                            <div className="dropdown dropdown-hover dropdown-bottom">
                                <div tabIndex={0} role="button" className="before:absolute before:top-[40%] before:right-[10px] before:rotate-[-45deg] before:w-[8px] before:h-[8px] before:border-l-[2px] before:border-b-[2px] before:border-black pe-[10px]">
                                    <TranslateMessage id="navDastur" />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box"
                                >
                                    <li>
                                        <Link
                                            className="whitespace-nowrap"
                                            to="asosiy-maruzachilar"
                                        >
                                            <TranslateMessage id="navDropAsosiyMaruzachi" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="whitespace-nowrap"
                                            to="taklif-etilganlar"
                                        >
                                            <TranslateMessage id="navDromTaklifEtilgan" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-x-8 navbar-end">
                    <div className="relative font-medium">
                        <div>
                            <button
                                onClick={() => setTogglerMenu((prev) => !prev)}
                                className="btn btn-sm btn-ghost px-4 flex flex-nowrap"
                            >
                                <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                                    <img
                                        className="w-full h-full"
                                        src={data[Lang]}
                                        alt="icon"
                                    />
                                </div>
                                <TranslateMessage id="navTil" />
                                <FaAngleRight
                                    className={`${
                                        togglerMenu
                                            ? "rotate-[270deg]"
                                            : "rotate-[90deg]"
                                    }  text-[1rem] style-slide-nav`}
                                />
                            </button>
                        </div>
                        <ul
                            className={`${
                                togglerMenu ? "" : "hidden"
                            } font-medium absolute bottom-[-130px] left-[50%] translate-x-[-50%] bg-gray-50 rounded-lg p-2`}
                        >
                            <button
                                onClick={() => handliTogleLang("1")}
                                className="btn btn-sm btn-ghost px-8"
                            >
                                <li className="flex items-center gap-x-2">
                                    <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                                        <img
                                            className="w-full h-full"
                                            src={uzIcon}
                                            alt="icon"
                                        />
                                    </div>
                                    <TranslateMessage id="navDropUz" />
                                </li>
                            </button>
                            <button
                                onClick={() => handliTogleLang("2")}
                                className="btn btn-sm btn-ghost px-8"
                            >
                                <li className="flex items-center gap-x-2">
                                    <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                                        <img
                                            className="w-full h-full"
                                            src={ruIcon}
                                            alt="icon"
                                        />
                                    </div>
                                    <TranslateMessage id="navDropRu" />
                                </li>
                            </button>
                            <button
                                onClick={() => handliTogleLang("3")}
                                className="btn btn-sm btn-ghost px-8"
                            >
                                <li className="flex items-center gap-x-2">
                                    <div className="w-[20px] h-[20px] overflow-hidden rounded-full">
                                        <img
                                            className="w-full h-full"
                                            src={enIcon}
                                            alt="icon"
                                        />
                                    </div>
                                    <TranslateMessage id="navDropEn" />
                                </li>
                            </button>
                        </ul>
                    </div>
                    <Link
                        to="login"
                        className="btn btn-sm md:btn-md btn-success text-white font-bold"
                    >
                        <TranslateMessage id="navKirish" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
