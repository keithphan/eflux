import React from 'react'
import $ from 'jquery';

function CartProduct({ product, setSelectedProduct, addToCart, removeFromCart, updateCart }) {

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

    const handleQtyChange = (e) => {
        let qty = e.target.value;
        if(qty){
            updateCart({...product, qty: parseInt(qty)})
        }
    }

    return (
        <div className="cart-product-item">
            <div className="row align-items-center">
                <div className="col-6 p-0">
                    <div className="thumb">
                        <a onClick={(e) => handleOpenModal(e)} href="/"><img src={product.image} alt="products"/></a>
                    </div>
                </div>
                <div className="col-6">
                    <div className="product-content">
                        <a onClick={(e) => handleOpenModal(e)} href="/" className="product-title">{product.title}</a>
                        <div className="product-cart-info">
                            {product.weight}
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

export default CartProduct
