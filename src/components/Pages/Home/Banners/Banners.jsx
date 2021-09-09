import React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

function Banners() {
    SwiperCore.use([Pagination])
    return (
        <section className="slider-banner">
            <Swiper
                className={'banner-slider-container'}
                slidesPerView={1}
                loop={true}
                spaceBetween={0}
                speed={900}
                pagination={
                    {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            >
                <SwiperSlide>
                    <div className="banner-content-area">
                        <div className="slider-image slider-image2"></div>
                        <div className="container">
                            <div className="banner-content text-center text-lg-left">
                                <h6>Organic and fresh food</h6>
                                <h2>Get freshness delivered<br/>on your doorstep.</h2>
                                <a href="abc.html" className="banner-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-content-area">
                        <div className="slider-image slider-image1"></div>
                        <div className="container">
                            <div className="banner-content text-center">
                                <h6>Organic and fresh food</h6>
                                <h2>Get freshness delivered<br/>on your doorstep.</h2>
                                <a href="abc.html" className="banner-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="banner-content-area">
                            <div className="slider-image slider-image3"></div>
                            <div className="container">
                                <div className="banner-content text-center text-lg-left">
                                    <h6>Organic and fresh food</h6>
                                    <h2>Get freshness delivered<br/>on your doorstep.</h2>
                                    <a href="abc.html" className="banner-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>
        </section>
    )
}

export default Banners
