// import React from "react";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import APICarousel from "../../services/homeCarousel";
import { useSelector } from "react-redux";

const Carousel = () => {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState(null);

  const getData = async () => {
    await APICarousel.getCarousel()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

    return (
        <>
            {data && (
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
                    {data?.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#000] to-transparent opacity-60" />
                                    <div className="inline-block absolute top-[20%] sm:top-[30%] left-[50%] w-[80%] text-center text-white translate-x-[-50%]">
                                        <h1 className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[2rem] 2xl:text-[2.4rem]">
                                            {item[`title_${Lang}`]}
                                        </h1>
                                        <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[2rem] mt-6">
                                            {item[`content_${Lang}`]}
                                        </p>
                                    </div>
                                    <img
                                        className="block w-full h-full object-cover transition-all duration-3000 ease-linear"
                                        src={item.rasm}
                                        alt="Institut rasmi"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            )}
        </>
    );
};

export default Carousel;
