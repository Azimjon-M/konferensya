import React from "react";
import image_1 from "../../assets/images/01.jpg";
import image_2 from "../../assets/images/02.jpg";
import image_3 from "../../assets/images/03.jpg";
import { Marquee, MarqueeGroup, ImageGroup, Image } from "./styled";

const Fotogalareya = () => {
    const row = [image_1, image_2, image_3, image_1, image_2, image_3];
    return (
        <div className="flex flex-col bg-gray-100">
            <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                    Fotogalareya
                </h1>
            </div>
            <div className="bg-gray-50 py-10">
                <Marquee>
                    <MarqueeGroup>
                        {row.map((el, idx) => (
                            <ImageGroup className="w-[100px] h-[60px] sm:w-[150px] sm:h-[90px] md:w-[200px] md:h-[120px] lg:w-[250px] lg:h-[150px] xl:w-[300px] xl:h-[180px] 2xl:w-[350px] 2xl:h-[210px] " key={idx}>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                    <MarqueeGroup>
                        {row.map((el, idx) => (
                            <ImageGroup className="w-[100px] h-[60px] sm:w-[150px] sm:h-[90px] md:w-[200px] md:h-[120px] lg:w-[250px] lg:h-[150px] xl:w-[300px] xl:h-[180px] 2xl:w-[350px] 2xl:h-[210px] " key={idx}>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                    <MarqueeGroup>
                        {row.map((el, idx) => (
                            <ImageGroup className="w-[100px] h-[60px] sm:w-[150px] sm:h-[90px] md:w-[200px] md:h-[120px] lg:w-[250px] lg:h-[150px] xl:w-[300px] xl:h-[180px] 2xl:w-[350px] 2xl:h-[210px] " key={idx}>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                </Marquee>
            </div>
        </div>
    );
};

export default Fotogalareya;
