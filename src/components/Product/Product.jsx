import React, {useEffect} from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';

function Product({ product, setSelectedProduct, addToCart, removeFromCart, updateCart, cartItem }) {

    const handleOpenModal = (e) => {
        e.preventDefault();
        setSelectedProduct(product);
        $("#product-details-popup").addClass('open-side');
    }

    const handleAddToCart = () => {
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

    useEffect(() => {
        window.flyCart();
    })

    return (
        <div className="product-item">
            <div className="product-thumb">
                <a onClick={(e) => handleOpenModal(e)} href="/"><img src={product.image} alt="product" /></a>
                <span className="batch sale">Sale</span>
                <a className="wish-link" href="abc.html">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                </a>
            </div>
            <div className="product-content">
                <a href="abc.html" className="cata">Catagory</a>
                <h6>
                    <Link to={`/shop/productdetails/${product.id}/${product.title.toLowerCase()}`} className="product-title">{ product.title }</Link>
                </h6>
                <p className="quantity">{ product.weight }</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="price">${ product.price.toFixed(2) } <del>${ product.origin_price.toFixed(2) } </del></div>

                    <div className="cart-btn-toggle">
                        {cartItem ? 
                            <div className="price-btn">
                                <div className="price-increase-decrese-group d-flex">
                                    <span className="decrease-btn">
                                        <button type="button"
                                            className="btn quantity-left-minus" data-type="minus" data-field="" onClick={() => handleRemoveFromCart()}>-
                                        </button> 
                                    </span>
                                    <input type="number" name="quantity" className="form-controls input-number" value={cartItem.qty} onChange={(e) => onQtyChange(e)}/>
                                    <span className="increase">
                                        <button type="button"
                                            className="btn quantity-right-plus" data-type="plus" data-field="" onClick={() => handleAddToCart()}>+
                                        </button>
                                    </span>
                                </div>
                            </div>
                        :
                            <span className="cart-btn" onClick={() => handleAddToCart()}><i className="fas fa-shopping-cart"></i> Cart</span>
                        }
                        

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
