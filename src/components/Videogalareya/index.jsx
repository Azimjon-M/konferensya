import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../App/style.css";
import { Pagination, Navigation } from "swiper/modules";
import video from "../../assets/video/train.mp4";

const Videogalareya = () => {
    return (
        <div className="flex flex-col bg-gray-100">
            <div className="bg-gray-200 px-4 py-4 sm:px-8 md:px-12 md:py-8 lg:px-16">
                <h1 className="font-medium sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                    Videogalareya
                </h1>
            </div>
            <div className="w-full bg-gray-50 py-10">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                        type: "progressbar",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <video className="-z-20" controls src={video}></video>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video className="-z-20" controls src={video}></video>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video className="-z-20" controls src={video}></video>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video className="-z-20" controls src={video}></video>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Videogalareya;
