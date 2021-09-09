import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function MenuModal() {
    return (
        <div className="modal fade" id="menu-id" tabIndex="-1" aria-labelledby="menu-id" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    <ul className="menu d-xl-flex flex-wrap pl-0 list-unstyled">
                        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li><Link to="/">New Products</Link></li>
                        <li><a data-toggle="collapse" href="#megamenu-main" role="button" aria-expanded="false" aria-controls="catagory-widget1"><span>Featured Products</span> <i className="fas fa-angle-down"></i></a>
                            <ul className=" collapse" id="megamenu-main">
                                <li><a data-toggle="collapse" href="#megamenu-main01" role="button" aria-expanded="false" aria-controls="megamenu-main01"><span>Vegetables</span> <i className="fas fa-angle-down"></i></a>
                                    <ul className="submenu collapse" id="megamenu-main01">
                                        <li><a href="product-list.html">Artichoke.</a></li>
                                        <li><a href="product-list.html">Aubergune</a></li>
                                        <li><a href="product-list.html">Asparagus</a></li>
                                        <li><a href="product-list.html">Broccoflower</a></li>
                                    </ul>
                                </li>
                                <li><a data-toggle="collapse" href="#megamenu-main02" role="button" aria-expanded="false" aria-controls="megamenu-main02"><span>Fruits</span> <i className="fas fa-angle-down"></i></a>
                                    <ul className="submenu collapse" id="megamenu-main02">
                                        <li><a href="product-list.html">Artichoke.</a></li>
                                        <li><a href="product-list.html">Aubergune</a></li>
                                        <li><a href="product-list.html">Asparagus</a></li>
                                        <li><a href="product-list.html">Broccoflower</a></li>
                                    </ul>
                                </li>
                                <li><a data-toggle="collapse" href="#megamenu-main03" role="button" aria-expanded="false" aria-controls="megamenu-main03"><span>Salads</span> <i className="fas fa-angle-down"></i></a>
                                    <ul className="submenu collapse" id="megamenu-main03">
                                        <li><a href="product-list.html">Artichoke.</a></li>
                                        <li><a href="product-list.html">Aubergune</a></li>
                                        <li><a href="product-list.html">Asparagus</a></li>
                                        <li><a href="product-list.html">Broccoflower</a></li>
                                    </ul>
                                </li>
                                <li><a data-toggle="collapse" href="#megamenu-main04" role="button" aria-expanded="false" aria-controls="megamenu-main04"><span>Health Care</span> <i className="fas fa-angle-down"></i></a>
                                    <ul className="submenu collapse" id="megamenu-main04">
                                        <li><a href="product-list.html">Artichoke.</a></li>
                                        <li><a href="product-list.html">Aubergune</a></li>
                                        <li><a href="product-list.html">Asparagus</a></li>
                                        <li><a href="product-list.html">Broccoflower</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="item-has-children"><a data-toggle="collapse" href="#mainmenuid2" role="button" aria-expanded="false" aria-controls="mainmenuid2"><span>Pages</span> <i className="fas fa-angle-down"></i></a>
                            <ul className="submenu collapse" id="mainmenuid2">
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li className="item-has-children"><a data-toggle="collapse" href="#mobile-product1" role="button" aria-expanded="false" aria-controls="mobile-product1"><span>Products</span> <i className="fas fa-angle-down"></i></a>
                                    <ul className="submenu collapse" id="mobile-product1">
                                        <li><a href="product-list.html">Product List</a></li>
                                        <li><a href="product-leftsidebar.html">Product leftsidebar</a></li>
                                        <li><a href="product-fullwidth.html">Product Fullwidth</a></li>
                                        <li><a href="brand-product.html">Brand Page</a></li>
                                        <li><a href="product-detail.html">Product Details</a></li>
                                    </ul>
                                </li>
                                <li className="item-has-children"><a data-toggle="collapse" href="#mobile-dashboard1" role="button" aria-expanded="false" aria-controls="mobile-dashboard1"><span>Dashboard1</span> <i className="fas fa-angle-down"></i></a>
                                    <ul className="submenu collapse" id="mobile-dashboard1">
                                        <li><a href="user-dashbord.html">User Dashboard</a></li>
                                        <li><a href="profile.html">Profile</a></li>
                                        <li><a href="track-order.html">Track Order</a></li>
                                        <li><a href="wishlist.html">Wish List</a></li>
                                    </ul>
                                </li>
                                <li className="item-has-children"><a data-toggle="collapse" href="#mobile-dashboard2" role="button" aria-expanded="false" aria-controls="mobile-dashboard2"><span>Dashboard2</span> <i className="fas fa-angle-down"></i></a>
                                    <ul className="submenu collapse" id="mobile-dashboard2">
                                        <li><a href="dashboard.html">My Orders</a></li>
                                        <li><a href="dashboard-account.html">Accounts</a></li>
                                        <li><a href="dashboard-address-book.html">Address Book</a></li>
                                        <li><a href="dashboard-order-cancel.html">Order Cancel</a></li>
                                        <li><a href="dashboard-order-process.html">Order Process</a></li>
                                        <li><a href="dashboard-password-change.html">Password Change</a></li>
                                        <li><a href="dashboard-wishlist.html">whistlist</a></li>
                                    </ul>
                                </li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="singin.html">SignIn</a></li>
                                <li><a href="signup.html">SignUp</a></li>
                                <li><a href="product-order-success.html">Order Success</a></li>
                                <li><a href="comming-soon.html">Comming Soon</a></li>
                                <li><a href="404-page.html">404 page</a></li>
                            </ul>
                        </li>
                        <li className="item-has-children"><a data-toggle="collapse" href="#mainmenuid3" role="button" aria-expanded="false" aria-controls="mainmenuid3"><span>Blog</span> <i className="fas fa-angle-down"></i></a>
                            <ul className="submenu collapse" id="mainmenuid3">
                                <li><a href="blog.html">Blog full width</a></li>
                                <li><a href="blog-rightsidebar.html">Blog Rightsidebar</a></li>
                                <li><a href="single.html">Blog Single</a></li>
                            </ul>
                        </li>
                        <li><NavLink to="/contact" exact activeClassName="active">Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MenuModal
