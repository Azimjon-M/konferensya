import React, {useState, useEffect} from "react";
import { Marquee, MarqueeGroup, ImageGroup, Image } from "./styled";
import TranslateMessage from "../TranslateMessage";
import APIHome from "../../services/home";

const Fotogalareya = () => {
    const [data, setData] = useState(null);

    const getData = async () => {
        await APIHome.getFotoGalareya()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex flex-col bg-gray-100">
            <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                    <TranslateMessage id="Fotogalareya" />
                </h1>
            </div>
            <div className="bg-gray-50 py-10">
                <Marquee>
                    <MarqueeGroup>
                        {data && data.map((item, idx) => (
                            <ImageGroup className="w-[100px] h-[60px] sm:w-[150px] sm:h-[90px] md:w-[200px] md:h-[120px] lg:w-[250px] lg:h-[150px] xl:w-[300px] xl:h-[180px] 2xl:w-[400px] 2xl:h-[240px] " key={idx}>
                                <Image src={item.rasm} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                    <MarqueeGroup>
                        {data && data.map((item, idx) => (
                            <ImageGroup className="w-[100px] h-[60px] sm:w-[150px] sm:h-[90px] md:w-[200px] md:h-[120px] lg:w-[250px] lg:h-[150px] xl:w-[300px] xl:h-[180px] 2xl:w-[400px] 2xl:h-[240px] " key={idx}>
                                <Image src={item.rasm} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                    <MarqueeGroup>
                        {data && data.map((item, idx) => (
                            <ImageGroup className="w-[100px] h-[60px] sm:w-[150px] sm:h-[90px] md:w-[200px] md:h-[120px] lg:w-[250px] lg:h-[150px] xl:w-[300px] xl:h-[180px] 2xl:w-[400px] 2xl:h-[240px] " key={idx}>
                                <Image src={item.rasm} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                </Marquee>
            </div>
        </div>
    );
};

export default Fotogalareya;
