import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

function Brands() {
    SwiperCore.use([Navigation]);

    return (
        <section className="feature-brand-section pb-5">
                <div className="container">
                    <div className="section-heading">
                        <h4 className="heading-title"><span className="heading-circle"></span> Feature Brand Procut For You</h4>
                    </div>

                    <div className="section-wrapper">
                        {/* <!-- Add Arrows --> */}
                        <div className="slider-btn-group">
                            <div className="slider-btn-prev brand-feature-slider-prev">
                                <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 443.52 443.52" enableBackground="new 0 0 443.52 443.52" xmlSpace="preserve"><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
                        c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
                        L143.492,221.863z"/></g></svg>
                            </div>
                            <div className="slider-btn-next brand-feature-slider-next">
                                <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" enableBackground="new 0 0 512.002 512.002" xmlSpace="preserve"><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105
                        L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
                        l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></svg>
                            </div>
                        </div>
                        <div className="mlr-20">
                            <Swiper
                                className={'feature-brand-container'}
                                slidesPerView={1}
                                loop={true}
                                navigation={
                                    {
                                        nextEl: '.brand-feature-slider-next',
                                        prevEl: '.brand-feature-slider-prev',
                                    }
                                }
                                spaceBetween={30}
                                breakpoints={
                                    {
                                        540: {
                                            slidesPerView: 2
                                        },
                                        768: {
                                            slidesPerView: 3
                                        },
                                        990: {
                                            slidesPerView: 4
                                        },
                                        1200: {
                                            slidesPerView: 5
                                        },
                                    }
                                }
                            >
                                <SwiperSlide>
                                    <a href="brand-product.html">
                                        <img src="/images/feature-brand/01.jpg" alt="brand"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="brand-product.html">
                                        <img src="/images/feature-brand/02.jpg" alt="brand"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="brand-product.html">
                                        <img src="/images/feature-brand/03.jpg" alt="brand"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="brand-product.html">
                                        <img src="/images/feature-brand/04.jpg" alt="brand"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="brand-product.html">
                                        <img src="/images/feature-brand/05.jpg" alt="brand"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="brand-product.html">
                                        <img src="/images/feature-brand/01.jpg" alt="brand"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="brand-product.html">
                                        <img src="/images/feature-brand/02.jpg" alt="brand"/>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="brand-product.html">
                                        <img src="/images/feature-brand/03.jpg" alt="brand"/>
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Brands
