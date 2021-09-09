import React from 'react'
import Product from '../../../Product/Product';
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

function ProductList({ products, setSelectedProduct, cartItems, addToCart, removeFromCart, updateCart }) {
    SwiperCore.use([Navigation])

    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            navigation={
                {
                    nextEl: '.trending-slider-next',
                    prevEl: '.trending-slider-prev',
                }
            }
            spaceBetween={30}
            breakpoints={
                {
                    1200: {
                        slidesPerView: 4
                    },
                    990: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 3
                    },
                    540: {
                        slidesPerView: 2
                    },
                }
            }
        >
            {products.map((product) => {
                return (
                    <SwiperSlide key={product.id}>
                        <Product 
                            cartItem={cartItems.find((item) => item.id === product.id)} 
                            product={product} 
                            setSelectedProduct={setSelectedProduct} 
                            key={product.id} 
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            updateCart={updateCart}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ProductList
