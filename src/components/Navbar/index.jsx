import React from "react";
import icon from "../../assets/icons/kspi-icon.jpeg";

const Navbar = () => {
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
                            className="btn btn-ghost lg:hidden"
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
                                <a href="https://www.google.com">Asosiy</a>
                            </li>
                            <li>
                                <details>
                                    <summary>Ma'lumotlar</summary>
                                    <ul className="p-2">
                                        <li>
                                            <a href="https://www.google.com">
                                                Muxim sanalar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">
                                                Qo'mita
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">
                                                Ilmiy maslaxat qo'mita
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">
                                                O'tgan voqealar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">
                                                Nashrlar
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <a href="https://www.google.com">To'lovlar</a>
                            </li>
                            <li>
                                <details>
                                    <summary>Maqola</summary>
                                    <ul className="p-2">
                                        <li>
                                            <a href="https://www.google.com">
                                                Maqola talablari
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">
                                                Maqola jo'natish
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <a href="https://www.google.com">Bog'lanish</a>
                            </li>
                            <li>
                                <details>
                                    <summary>Dastur</summary>
                                    <ul className="p-2">
                                        <li>
                                            <a href="https://www.google.com">
                                                Asosiy ma'ruzachilar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com">
                                                Taklif etilganlar
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    {/* Emblema */}
                    <a
                        href="www.google.com"
                        className="text-xl flex items-center gap-3"
                    >
                        <img
                            className="w-[45px] h-auto"
                            src={icon}
                            alt="icon"
                        />
                        <p className="hidden sm:inline-block w-[150px] text-[0.8em] leading-5 font-medium">
                            Qo'qon davlat pedagogika instituti
                        </p>
                    </a>
                    {/* /Emblema */}
                </div>
                {/* lg top */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-semibold px-1">
                        <li>
                            <a href="https://www.google.com">Asosiy</a>
                        </li>
                        <li>
                            <details>
                                <summary>Ma'lumotlar</summary>
                                <ul className="p-2">
                                    <li>
                                        <a className="whitespace-nowrap" href="https://www.google.com">
                                            Muxim sanalar
                                        </a>
                                    </li>
                                    <li>
                                        <a className="whitespace-nowrap" href="https://www.google.com">
                                            Qo'mita
                                        </a>
                                    </li>
                                    <li>
                                        <a className="whitespace-nowrap" href="https://www.google.com">
                                            Ilmiy maslaxat qo'mita
                                        </a>
                                    </li>
                                    <li>
                                        <a className="whitespace-nowrap" href="https://www.google.com">
                                            O'tgan voqealar
                                        </a>
                                    </li>
                                    <li>
                                        <a className="whitespace-nowrap" href="https://www.google.com">
                                            Nashrlar
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a href="https://www.google.com">To'lovlar</a>
                        </li>
                        <li>
                            <details>
                                <summary>Maqola</summary>
                                <ul className="p-2">
                                    <li>
                                        <a className="whitespace-nowrap" href="https://www.google.com">
                                            Maqola talablari
                                        </a>
                                    </li>
                                    <li>
                                        <a className="whitespace-nowrap" href="https://www.google.com">
                                            Maqola jo'natish
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a href="https://www.google.com">Bog'lanish</a>
                        </li>
                        <li>
                            <details>
                                <summary>Dastur</summary>
                                <ul className="p-2">
                                    <li>
                                        <a className="whitespace-nowrap" href="https://www.google.com">
                                            Asosiy ma'ruzachilar
                                        </a>
                                    </li>
                                    <li>
                                        <a className="whitespace-nowrap" href="https://www.google.com">
                                            Taklif etilganlar
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href="www.google.com"
                        className="btn btn-sm md:btn-md btn-success text-white font-bold"
                    >
                        Ro'yxatdan o'tish
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
