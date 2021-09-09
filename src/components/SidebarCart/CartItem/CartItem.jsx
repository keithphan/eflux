import React from 'react'
import { Link } from 'react-router-dom';

function CartItem({product, addToCart, removeFromCart, updateCart, deleteFromCart}) {
    const handleAddToCart = () => {
        addToCart(product)
    }

    const handleRemoveFromCart = () => {
        removeFromCart(product)
    }

    const handleQtyChange = (e) => {
        let qty = e.target.value;
        if(qty){
            updateCart({...product, qty: parseInt(qty)})
        }
    }

    const handleDeleteFromCart = () => {
        deleteFromCart(product)
        
    }

    return (
        <div className="cart-product-item">
                <div className="close-item" onClick={() => handleDeleteFromCart()}><i className="fas fa-times"></i></div>
                <div className="row align-items-center">
                    <div className="col-6 p-0">
                        <div className="thumb">
                            <Link to={`/shop/productdetails/${product.id}/${product.title.toLowerCase()}`}><img src={product.image} alt="products" /></Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="product-content">
                            <Link to={`/shop/productdetails/${product.id}/${product.title.toLowerCase()}`} className="product-title">{ product.title }</Link>
                            <div className="product-cart-info">
                                1x 31b
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="price-increase-decrese-group d-flex">
                            <span className="decrease-btn">
                                <button type="button"
                                    className="btn quantity-left-minus" data-type="minus" data-field="" onClick={() => handleRemoveFromCart()}>-
                                </button> 
                            </span>
                            <input type="number" name="quantity" className="form-controls input-number" value={product.qty}  onChange={(e) => handleQtyChange(e)} />
                            <span className="increase">
                                <button type="button"
                                    className="btn quantity-right-plus" data-type="plus" data-field="" onClick={() => handleAddToCart()}>+
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="product-price">
                            <del>${(product.origin_price  * product.qty).toFixed(2)}</del><span className="ml-4">${ (product.price * product.qty).toFixed(2) }</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CartItem
