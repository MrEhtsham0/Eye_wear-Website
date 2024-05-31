"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import glass1 from '../../../public/assets/slider01 (1).jpg';
import glass2 from '../../../public/assets/slider01 (2).jpg';
import glass3 from '../../../public/assets/slider01 (3).jpg';
import glass4 from '../../../public/assets/slider01 (4).jpg';
import glass5 from '../../../public/assets/slider01 (5).jpg';
import glass6 from '../../../public/assets/slider01 (6).jpg';
import glass7 from '../../../public/assets/slider01 (7).jpg';

const HomeSlider = () => {
    return (
        <div className="w-full mt-2 rounded-md" id="section-1">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay]}
                className="w-full rounded-md"
                id="section-1"
                style={{ height: '450px' }} // Set a specific height for the swiper
            >
                <SwiperSlide>
                    <div className="relative w-full h-full" data-aos="fade-up">
                        <Image
                            src={glass1}
                            alt="slider1"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full" data-aos="fade-up">
                        <Image
                            src={glass2}
                            alt="slider2"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full" data-aos="fade-up">
                        <Image
                            src={glass3}
                            alt="slider3"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full" data-aos="fade-up">
                        <Image
                            src={glass4}
                            alt="slider4"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full" data-aos="fade-up">
                        <Image
                            src={glass5}
                            alt="slider5"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full" data-aos="fade-up">
                        <Image
                            src={glass6}
                            alt="slider6"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full" data-aos="fade-up">
                        <Image
                            src={glass7}
                            alt="slider7"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HomeSlider;
