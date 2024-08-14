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

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const location = useLocation();

    const data = [
        {
            id: 1,
            title: "Home",
            img: <AiOutlineHome />,
            link: "/admin-panel",
            drop: false,
        },
        {
            id: 2,
            title: "Ma'lumotlar",
            img: <AiOutlineHome />,
            drop: true,
            children: [
                {
                    id: 1.1,
                    name: "Muhim sana",
                },
                {
                    id: 1.2,
                    name: "Qo'mita",
                },
                {
                    id: 1.3,
                    name: "Ilmiy maqola qo'mita",
                }
            ]
        },
        {
            id: 3,
            title: "Talabalar",
            img: <AiOutlineHome />,
            link: "/superadmin/talabalar",
            drop: false,
        },
        {
            id: 4,
            title: "Shartnoma olganlar",
            img: <AiOutlineHome />,
            link: "/superadmin/shartnoma-olganlar",
            drop: false,
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
                            {
                                !item.drop ? (
                            <Link
                                to={item.link}
                                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
                                ${location.pathname === item.link ? "bg-light-white" : ""}`}
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
                                )
                                : (
                                    <div className="text-white">
                                        <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
                                        {item.img}
                                        {item.title}
                                        </div>
                                        <div className="ms-4">
                                            {
                                                item.children.map(child => (
                                                    <div key={child.id}>
                                                        {child.name}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                )
                            }
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
