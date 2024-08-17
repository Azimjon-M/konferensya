import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import controlImg from "../../assets/icons/control.png";
import logo from "../../assets/icons/logo.png";
import Exit from "../../assets/icons/exit.svg";

import { AiOutlineHome } from "react-icons/ai";
import { GrCircleInformation, GrShareOption, GrPieChart } from "react-icons/gr";
import { RiArticleLine } from "react-icons/ri";

import "./style.css";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const location = useLocation();

    const [openIndex, setOpenIndex] = useState(null);
    const menuRef = useRef([]);

    const toggleMenu = (index) => {
        if (open) {
            setOpenIndex(openIndex === index ? null : index);
        }
    };

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
                    link: "/admin-panel/home/carousel",
                },
                {
                    id: 1.2,
                    name: "Hush kelibsiz",
                    link: "/admin-panel/home/welcome",
                },
                {
                    id: 1.3,
                    name: "Konferensya bo'limlari",
                    link: "/admin-panel/home/bolim",
                },
                {
                    id: 1.4,
                    name: "Jarayonlar ko'rsatkichi",
                    link: "/admin-panel/home/jarayon",
                },
                {
                    id: 1.5,
                    name: "Muhim sanalar",
                    link: "/admin-panel/home/muhim-sana",
                },
                {
                    id: 1.7,
                    name: "Fotogalareya",
                    link: "/admin-panel/home/fotogalareya",
                },
                {
                    id: 1.8,
                    name: "Videogalareya",
                    link: "/admin-panel/home/videogalareya",
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
                    link: "/admin-panel/malumot/muhim-sana",
                },
                {
                    id: 2.2,
                    name: "Qo'mita",
                    link: "/admin-panel/malumot/qomita",
                },
                {
                    id: 2.3,
                    name: "Ilmiy maqola qo'mita",
                    link: "/admin-panel/malumot/ilmiy-maslaxat-qomita",
                },
                {
                    id: 2.4,
                    name: "O'tgan voqealar",
                    link: "/admin-panel/malumot/otgan-voqealar",
                },
                {
                    id: 2.5,
                    name: "Nashr",
                    link: "/admin-panel/malumot/nashr",
                },
            ],
        },
        {
            id: 3,
            title: "Maqola talablari",
            img: <RiArticleLine />,
            drop: false,
            link: "/admin-panel/maqola-talab",
        },
        {
            id: 4,
            title: "Bog'lanish",
            img: <GrShareOption />,
            drop: false,
            link: "/admin-panel/boglanish",
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
                    link: "/admin-panel/dastur/asosiy-maruzachi",
                },
                {
                    id: 5.2,
                    name: "Taklif etilganlar",
                    link: "/admin-panel/dastur/taklif-etilganlar",
                },
            ],
        },
    ];

    useEffect(() => {
        menuRef.current.forEach((menu, idx) => {
            if (menu) {
                if (openIndex === idx) {
                    const height = menu.scrollHeight;
                    menu.style.maxHeight = `${height}px`;
                } else {
                    menu.style.maxHeight = "0px";
                }
            }
        });
    }, [openIndex]);

    useEffect(() => {
        !open && setOpenIndex(null);
    }, [open]);

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
                    {data.map((item, index) => {
                        const isActive =
                            location.pathname === item.link ||
                            (item.children &&
                                item.children.some(
                                    (child) => location.pathname === child.link
                                ));

                        return (
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
                                        <div
                                            onClick={() => toggleMenu(index)}
                                            className={`dropdown-button flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-2
                                            ${
                                                isActive ? "bg-light-white" : ""
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
                                        </div>
                                        <div
                                            ref={(el) =>
                                                (menuRef.current[index] = el)
                                            }
                                            className="dropdown-menu ms-4 overflow-hidden transition-all duration-300"
                                            style={{
                                                maxHeight:
                                                    openIndex === index
                                                        ? "auto"
                                                        : "0px",
                                            }}
                                        >
                                            {item.children.map((child) => (
                                                <div
                                                    key={child.id}
                                                    className="ps-4"
                                                >
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
                                                                !open &&
                                                                "hidden"
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
                        );
                    })}
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
