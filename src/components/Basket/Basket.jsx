import React from 'react'
import $ from 'jquery'
function Basket({cartItems, itemsPrice}) {

    const hanldeOpenCart = (e) => {
        e.preventDefault();
        $('#sitebar-cart').addClass('open-cart');
        $('#sitebar-drawar').addClass('hide-drawer');
    }

    return (
        <a className="position-absolute" href='/' onClick={(e) => hanldeOpenCart(e)}>
            <div id="sitebar-drawar" className="sitebar-drawar">
                <div className="cart-count d-flex align-items-center">
                    <i className="fas fa-shopping-basket"></i>
                    <span>{cartItems.length} { cartItems.length > 1 ? 'Items' : 'Item' }</span>
                </div>
                <div className="total-price">${itemsPrice}</div>
            </div>
        </a>
    )
}

export default Basket
