import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import controlImg from "../../assets/icons/control.png";
import logo from "../../assets/icons/logo.png";
// import analitikaImg from "../../assets/icons/Chart.png";
// import adminImg from "../../assets/icons/adminImg.webp";
// import talabaImg from "../../assets/icons/graduate.png";
// import shartnomaImg from "../../assets/icons/contract.png";
import Exit from "../../assets/icons/exit.svg";

import { AiOutlineHome } from "react-icons/ai";
import {GrCircleInformation, GrShareOption, GrPieChart} from "react-icons/gr"
import {RiArticleLine} from "react-icons/ri"

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const location = useLocation();

    const data = [
        {
            id: 1,
            title: "Home",
            img: <AiOutlineHome />,
            link: "/admin-panel",
            drop: true,
            children: [
                {
                    id: 1.1,
                    name: "Karusel",
                    link: "/admin-panel/carousel",
                },
                {
                    id: 1.2,
                    name: "Hush kelibsiz",
                    link: "/admin-panel/welcome",
                },
                {
                    id: 1.3,
                    name: "Konferensya bo'limlari",
                    link: "",
                },
                {
                    id: 1.4,
                    name: "Jarayonlar ko'rsatkichi",
                    link: "",
                },
                {
                    id: 1.5,
                    name: "Muhim sanalar",
                    link: "",
                },
                {
                    id: 1.6,
                    name: "Maqola talablari",
                    link: "",
                },
                {
                    id: 1.7,
                    name: "Fotogalareya",
                    link: "",
                },
                {
                    id: 1.8,
                    name: "Videogalareya",
                    link: "",
                },
            ],
        },
        {
            id: 2,
            title: "Ma'lumotlar",
            img: <GrCircleInformation />,
            drop: true,
            children: [
                {
                    id: 2.1,
                    name: "Muhim sana",
                    link: "",
                },
                {
                    id: 2.2,
                    name: "Qo'mita",
                    link: "",
                },
                {
                    id: 2.3,
                    name: "Ilmiy maqola qo'mita",
                    link: "",
                },
                {
                    id: 2.4,
                    name: "O'tgan voqealar",
                    link: "",
                },
                {
                    id: 2.5,
                    name: "Nashr",
                    link: "",
                },
            ],
        },
        {
            id: 3,
            title: "Maqola",
            img: <RiArticleLine />,
            drop: true,
            children: [
                {
                    id: 3.1,
                    name: "Maqola talablari",
                    link: "",
                },
                {
                    id: 3.2,
                    name: "Maqola jo'natish",
                    link: "",
                },
            ],
        },
        {
            id: 4,
            title: "Bog'lanish",
            img: <GrShareOption />,
            drop: false,
            link: ""
        },
        {
            id: 5,
            title: "Dastur",
            img: <GrPieChart />,
            drop: true,
            children: [
                {
                    id: 5.1,
                    name: "Asosiy maruzachi",
                    link: "",
                },
                {
                    id: 5.2,
                    name: "Taklif etilganlar",
                    link: "",
                },
            ],
        },
    ];

    return (
        <div className="flex">
            <div
                className={`${
                    open ? "w-72" : "w-20"
                } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
            >
                <img
                    src={controlImg}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
                        !open && "rotate-180"
                    }`}
                    onClick={() => setOpen(!open)}
                    alt="icon"
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src={logo}
                        className={`cursor-pointer duration-500 ${
                            open && "rotate-[360deg]"
                        }`}
                        alt="icon"
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${
                            !open && "scale-0"
                        }`}
                    >
                        Qo'qon davlat <br /> Pedagogika instituti
                    </h1>
                </div>
                <ul className="pt-6">
                    {data.map((item, index) => (
                        <li key={index}>
                            {!item.drop ? (
                                <Link
                                    to={item.link}
                                    className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-2
                                ${
                                    location.pathname === item.link
                                        ? "bg-light-white"
                                        : ""
                                }`}
                                >
                                    {item.img}
                                    <span
                                        className={`${
                                            !open && "hidden"
                                        } origin-left duration-200`}
                                    >
                                        {item.title}
                                    </span>
                                </Link>
                            ) : (
                                <div className="text-white">
                                    <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-2">
                                        {item.img}
                                        {item.title}
                                    </div>
                                    <div className="ms-4">
                                        {item.children.map((child) => (
                                            <div key={child.id} className="ps-4">
                                                <Link
                                                    to={child.link}
                                                    className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center
                                                    ${
                                                        location.pathname ===
                                                        child.link
                                                            ? "bg-light-white"
                                                            : ""
                                                    }`}
                                                >
                                                    <span
                                                        className={`${
                                                            !open && "hidden"
                                                        } origin-left duration-200`}
                                                    >
                                                        {child.name}
                                                    </span>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="absolute left-5 bottom-2">
                    <Link
                        to="/login"
                        className="flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4"
                    >
                        <img src={Exit} alt="icon" width={24} />
                        <span
                            className={`${
                                !open && "hidden"
                            } origin-left duration-200`}
                        >
                            CHIQISH
                        </span>
                    </Link>
                </div>
            </div>
            <div className="h-screen flex-1 p-7 overflow-y-scroll">
                <Outlet />
            </div>
        </div>
    );
};

export default Sidebar;
