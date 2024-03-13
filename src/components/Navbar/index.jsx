import React from "react";
import icon from "../../assets/icons/kspi-icon.jpeg";
import { Link } from "react-router-dom";

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
                                <Link to="https://www.google.com">Asosiy</Link>
                            </li>
                            <li>
                                <details>
                                    <summary>Ma'lumotlar</summary>
                                    <ul className="p-2">
                                        <li>
                                            <Link to="https://www.google.com">
                                                Muxim sanalar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.google.com">
                                                Qo'mita
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.google.com">
                                                Ilmiy maslaxat qo'mita
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.google.com">
                                                O'tgan voqealar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.google.com">
                                                Nashrlar
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link to="https://www.google.com">To'lovlar</Link>
                            </li>
                            <li>
                                <details>
                                    <summary>Maqola</summary>
                                    <ul className="p-2">
                                        <li>
                                            <Link to="https://www.google.com">
                                                Maqola talablari
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.google.com">
                                                Maqola jo'natish
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link to="https://www.google.com">Bog'lanish</Link>
                            </li>
                            <li>
                                <details>
                                    <summary>Dastur</summary>
                                    <ul className="p-2">
                                        <li>
                                            <Link to="https://www.google.com">
                                                Asosiy ma'ruzachilar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.google.com">
                                                Taklif etilganlar
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    {/* Emblema */}
                    <Link
                        to="/"
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
                    </Link>
                    {/* /Emblema */}
                </div>
                {/* lg top */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-semibold px-1">
                        <li>
                            <Link to="/">Asosiy</Link>
                        </li>
                        <li>
                            <details>
                                <summary>Ma'lumotlar</summary>
                                <ul className="p-2">
                                    <li>
                                        <Link className="whitespace-nowrap" to="muhim-sanalar">
                                            Muhim sanalar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="whitespace-nowrap" to="qo'mita">
                                            Qo'mita
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="whitespace-nowrap" to="ilmiy-maslaxat-qo'mita">
                                            Ilmiy maslaxat qo'mita
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="whitespace-nowrap" to="o'tgan-voqealar">
                                            O'tgan voqealar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="whitespace-nowrap" to="nashrlar">
                                            Nashrlar
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link to="to'lovlar">To'lovlar</Link>
                        </li>
                        <li>
                            <details>
                                <summary>Maqola</summary>
                                <ul className="p-2">
                                    <li>
                                        <Link className="whitespace-nowrap" to="maqola-talablari">
                                            Maqola talablari
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="whitespace-nowrap" to="maqola-jo'natish">
                                            Maqola jo'natish
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link to="bog'lanish">Bog'lanish</Link>
                        </li>
                        <li>
                            <details>
                                <summary>Dastur</summary>
                                <ul className="p-2">
                                    <li>
                                        <Link className="whitespace-nowrap" to="asosiy-maruzachilar">
                                            Asosiy ma'ruzachilar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="whitespace-nowrap" to="taklif-etilganlar">
                                            Taklif etilganlar
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link
                        to="login"
                        className="btn btn-sm md:btn-md btn-success text-white font-bold"
                    >
                            Kirish
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
