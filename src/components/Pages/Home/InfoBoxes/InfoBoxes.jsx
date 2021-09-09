import React from "react";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function InfoBoxes() {
  SwiperCore.use([Autoplay])
  
  return (
    <section className="info-box-section">
      <div className="container">
        <Swiper 
          className={'info-box-container'}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          initialSlide={2}
          spaceBetween={30}
          autoplay={
            {
              delay: 3500,
              disableOnInteraction: false,
            }
          }
          breakpoints={
            {
              990: { slidesPerView: 3},
              767: { slidesPerView: 2}
            }
          }
        >
          <SwiperSlide>
              <div className="info-box-item d-sm-flex text-center text-sm-left">
                <div className="info-icon">
                  <img src="/images/info-item/info.svg" alt="info icon" />
                </div>
                <div className="info-content">
                  <h6>Place order</h6>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipisicing elit,
                    sed do.
                  </p>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className="info-box-item d-sm-flex text-center text-sm-left">
                <div className="info-icon">
                  <img
                    src="/images/info-item/credit-card.svg"
                    alt="info icon"
                  />
                </div>
                <div className="info-content">
                  <h6>Easy Payment</h6>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipisicing elit,
                    sed do.
                  </p>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="info-box-item d-sm-flex text-center text-sm-left">
                <div className="info-icon">
                  <img src="/images/info-item/info.svg" alt="info icon" />
                </div>
                <div className="info-content">
                  <h6>First Delevary</h6>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipisicing elit,
                    sed do.
                  </p>
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default InfoBoxes;
