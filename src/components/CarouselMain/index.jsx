import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import img_1 from "../../assets/images/01.jpg";
import img_2 from "../../assets/images/02.jpg";
import img_3 from "../../assets/images/03.jpg";

const Carousel = () => {
    const data = [
        {
            content: "O'zbekiston, Fergana, Qo'qon",
            title: "Talim sifatini yaxshilash Talim sifatini yaxshilash",
            img: img_1,
        },
        {
            content: "O'zbekiston, Fergana, Qo'qon",
            title: "Talim sifatini yaxshilash Talim sifatini yaxshilash",
            img: img_2,
        },
        {
            content: "O'zbekiston, Fergana, Qo'qon",
            title: "Talim sifatini yaxshilash Talim sifatini yaxshilash",
            img: img_3,
        },
    ];

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-full h-[70vh] object-cover md:h-[90vh] transition-all duration-2000 ease-in-out z-0"
        >
            {data.map((item, idx) => (
                <SwiperSlide key={idx}>
                    <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#000] to-transparent opacity-60" />
                        <div className="hidden sm:inline-block absolute top-[50%] left-[50%] w-[80%] text-center text-white translate-x-[-50%]">
                            <h1 className="text-[3em]">{item.title}</h1>
                            <p className="text-[1.5em]">{item.content}</p>
                        </div>

                        <img
                            className="block w-full h-full object-cover transition-all duration-3000 ease-linear"
                            src={item.img}
                            alt="Institut rasmi"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
