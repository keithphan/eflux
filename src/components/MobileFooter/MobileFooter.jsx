import React from 'react'
import $ from 'jquery'

function MobileFooter({ cartItems, itemsPrice }) {

    const hanldeOpenCart = (e) => {
        e.preventDefault();
        $('#sitebar-cart').addClass('open-cart');
        $('#sitebar-drawar').addClass('hide-drawer');
    }

    return (
        <div className="mobile-footer d-flex justify-content-between align-items-center d-xl-none">
            <button className="info" type="button" data-toggle="modal" data-target="#siteinfo1"><i className="fas fa-info-circle"></i></button>

            <div className="footer-cart">
                <a onClick={(e) => hanldeOpenCart(e)} href="/" className="d-flex align-items-center"><span className="cart-icon"><i className="fas fa-shopping-cart"></i><span className="count">{cartItems.length}</span></span> <span className="cart-amount ml-2">${itemsPrice.toFixed(2)}</span></a>
            </div>

            <div className="footer-admin-area">
                {/* <!-- <span className="user-admin">
                    <i className="fas fa-user"></i>
                </span> --> */}
                <button className="user-admin" type="button" data-toggle="modal" data-target="#useradmin1"><i className="fas fa-user"></i></button>
            </div>
        </div>
    )
}

export default MobileFooter
