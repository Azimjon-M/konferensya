import React from "react";
import CardRivoj from "../CardRivoj";
import img_1 from "../../assets/icons/Rivojlanish/01.png";
import img_2 from "../../assets/icons/Rivojlanish/02.png";
import img_3 from "../../assets/icons/Rivojlanish/03.png";
import img_4 from "../../assets/icons/Rivojlanish/04.png";
import img_5 from "../../assets/icons/Rivojlanish/05.png";
import img_6 from "../../assets/icons/Rivojlanish/06.png";
import img_7 from "../../assets/icons/Rivojlanish/07.png";
import img_8 from "../../assets/icons/Rivojlanish/08.png";
import img_9 from "../../assets/icons/Rivojlanish/09.png";
import img_10 from "../../assets/icons/Rivojlanish/10.png";
import img_11 from "../../assets/icons/Rivojlanish/11.png";
import img_12 from "../../assets/icons/Rivojlanish/12.png";
import img_13 from "../../assets/icons/Rivojlanish/13.png";
import img_14 from "../../assets/icons/Rivojlanish/14.png";
import img_15 from "../../assets/icons/Rivojlanish/15.png";
import img_16 from "../../assets/icons/Rivojlanish/16.png";
import img_17 from "../../assets/icons/Rivojlanish/17.png";
import TranslateMessage from "../TranslateMessage";

const Rivojlanish = () => {
    const data = [
        {
            numb: 1,
            phaparagph: "ENDING EXTREME POVERTY",
            img: img_1,
            bg: "#FE0023",
        },
        {
            numb: 2,
            phaparagph: "END HUNGER",
            img: img_2,
            bg: "#EAA635",
        },
        {
            numb: 3,
            phaparagph: "HEALTH AND WELFARE",
            img: img_3,
            bg: "#09A141",
        },
        {
            numb: 4,
            phaparagph: "QUALITY EDUCATION",
            img: img_4,
            bg: "#DB0014",
        },
        {
            numb: 5,
            phaparagph: "GENDER EQUALITY",
            img: img_5,
            bg: "#FF1500",
        },
        {
            numb: 6,
            phaparagph: "CLEAN WATER AND SANITATION",
            img: img_6,
            bg: "#00C0E4",
        },
        {
            numb: 7,
            phaparagph: "CHEAP AND CLEAN ENERGY",
            img: img_7,
            bg: "#FFBD00",
        },
        {
            numb: 8,
            phaparagph: "DECENT JOBS AND ECONOMIC GROWTH",
            img: img_8,
            bg: "#B4003A",
        },
        {
            numb: 9,
            phaparagph: "INDUSTRIALIZATION, INNOVATION AND INFRASTRUCTURE",
            img: img_9,
            bg: "#FF5D00",
        },
        {
            numb: 10,
            phaparagph: "REDUCING INEQUALITY",
            img: img_10,
            bg: "#F5005D",
        },
        {
            numb: 11,
            phaparagph: "SUSTAINABLE CITIES AND PLACES OF POPULATION",
            img: img_11,
            bg: "#FF9800",
        },
        {
            numb: 12,
            phaparagph: "RESPONSIBLE CONSUMPTION AND PRODUCTION",
            img: img_12,
            bg: "#CB8928",
        },
        {
            numb: 13,
            phaparagph: "FIGHT AGAINST CLIMATE CHANGE",
            img: img_13,
            bg: "#188048",
        },
        {
            numb: 14,
            phaparagph: "PROTECTING MARINE ECOSYSTEMS",
            img: img_14,
            bg: "#009ADA",
        },
        {
            numb: 15,
            phaparagph: "PRESERVING ECOSYSTEMS IN DRYLANDS",
            img: img_15,
            bg: "#00C23D",
        },
        {
            numb: 16,
            phaparagph: "PEACE, JUSTICE AND EFFECTIVE GOVERNANCE",
            img: img_16,
            bg: "#006A9D",
        },
        {
            numb: 17,
            phaparagph: "COOPERATION FOR SUSTAINABLE DEVELOPMENT",
            img: img_17,
            bg: "#00496A",
        },
    ];
    return (
        <div className="w-full bg-gray-50">
            <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                    <TranslateMessage id="UzbBarqarorRivoj" />
                </h1>
            </div>
            <p className="p-5 sm:p-8 md:px-12 lg:px-16 lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                <TranslateMessage id="UzbBarqarorRivojContent" />
            </p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center place-content-center gap-4 px-4 lg:px-20 xl:px-14">
                {data.map((item) => (
                    <CardRivoj
                        key={item.numb}
                        numb={item.numb}
                        phaparagph={item.phaparagph}
                        img={item.img}
                        bg={item.bg}
                    />
                ))}
            </div>
        </div>
    );
};

export default Rivojlanish;
