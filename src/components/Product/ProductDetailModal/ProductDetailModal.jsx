import React, {useState} from 'react';
import $ from 'jquery'
import Slider from "react-slick";

function ProductDetailModal({ product, cartItem, addToCart, removeFromCart, updateCart, }) {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const handleCloseModal = () => {
        $("#product-details-popup").removeClass('open-side');
    }
    
    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product)
    }

    const handleRemoveFromCart = () => {
        removeFromCart(product)
    }

    const onQtyChange = (e) => {
        let qty = e.target.value;
        if(qty){
            updateCart({...product, qty: parseInt(qty)})
        }
    }

    return (
        <section id="product-details-popup" className="product-details-popup"> 
            <div className="modal-overlay" onClick={() => handleCloseModal()}></div>
            <div className="container">
                <div className="product-zoom-info-container">
                    <div id="closed-modal" className="closed-modal" onClick={() => handleCloseModal()}>X</div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="product-zoom-area">
                                <span className="batch">30%</span>
                                {
                                    cartItem ? 
                                        <div className="cart-btn-toggle d-lg-none">
                                            <span className="cart-btn"><i className="fas fa-shopping-cart"></i> Cart</span>

                                            <div className="price-btn">
                                                <div className="price-increase-decrese-group d-flex">
                                                    <span className="decrease-btn">
                                                        <button type="button"
                                                            className="btn quantity-left-minus" data-type="minus" data-field="" onClick={() => handleRemoveFromCart()}>-
                                                        </button> 
                                                    </span>
                                                    <input type="text" name="quantity" className="form-controls input-number" value={cartItem.qty} onChange={(e) => onQtyChange(e)}/>
                                                    <span className="increase">
                                                        <button type="button"
                                                            className="btn quantity-right-plus" data-type="plus" data-field="" onClick={(e) => handleAddToCart(e)}>+
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    :
                                        <></>
                                }
                                
                                <Slider 
                                    slidesToShow={1} 
                                    slidesToScroll={1} 
                                    arrows={false} 
                                    fade={true} 
                                    asNavFor={nav2}
                                    ref={(slider) => setNav1(slider)}
                                    >
                                    {
                                        product.gallery ?
                                        product.gallery.split('|').map((imgUrl, index) => {
                                            return (
                                                <div key={index}>
                                                    <img width="100%" src={imgUrl} alt={ product.title }
                                                        className="img-fluid blur-up lazyload"/>
                                                </div>
                                            )
                                        })
                                        : <></>
                                    }
                                </Slider>

                                <div className="row">
                                    <div className="col-12">
                                        <Slider 
                                            className='slider-nav' 
                                            vertical={false} 
                                            slidesToShow={product.gallery ? product.gallery.split('|').length : 1} 
                                            slidesToScroll={1} 
                                            centerMode={true} 
                                            arrows={true} 
                                            dots={false} 
                                            focusOnSelect={true}
                                            ref={(slider) => setNav2(slider)}
                                            asNavFor={nav1}
                                            variableWidth={true} 
                                        >
                                            {
                                        product.gallery ?
                                        product.gallery.split('|').map((imgUrl, index) => {
                                            return (
                                                <div key={index} style={{ width: 100 }}>
                                                    <img width="100%" src={imgUrl} alt={ product.title }
                                                        className="img-fluid blur-up lazyload"/>
                                                </div>
                                            )
                                        })
                                        : <></>
                                    }

                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-details-content">
                                <a className="wish-link" href="abc.html">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                </a>
                                <a href="abc.html" className="cata">Catagory</a>
                                <h2>{ product.title }</h2>
                                <p className="quantity">{ product.weight }</p>
                                <h3 className="price">${ product.price } <del>{ product.origin_price > 0 ? '$' + product.origin_price : "" }</del></h3>
                                
                                <p>{ product.description }</p>
                                <div className="d-flex justify-content-end" >
                                    {
                                        cartItem ?
                                        <div className="price-increase-decrese-group custom d-flex">
                                            <span className="decrease-btn">
                                                <button type="button"
                                                    className="btn quantity-left-minus" data-type="minus" data-field="" onClick={() => handleRemoveFromCart()}>-
                                                </button> 
                                            </span>
                                            <input type="text" name="quantity" className="form-controls input-number" value={cartItem.qty} onChange={(e) => onQtyChange(e)}/>
                                            <span className="increase">
                                                <button type="button"
                                                    className="btn quantity-right-plus" data-type="plus" data-field="" onClick={(e) => handleAddToCart(e)}>+
                                                </button>
                                            </span>
                                        </div>
                                        :
                                        <a href="/" onClick={(e) => handleAddToCart(e)} className="buy-now">Add To Cart</a>
                                    }    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetailModal
