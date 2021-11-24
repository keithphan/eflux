import React, { useEffect } from 'react'
import {Link, NavLink} from 'react-router-dom'
import $ from 'jquery';

function Header({ cartItems, itemsPrice, token, signOut}) {
    useEffect(() => {
        window.customSelect();
    }, []);

    const hanldeOpenCart = (e) => {
        e.preventDefault();
        $('#sitebar-cart').addClass('open-cart');
        $('#sitebar-drawar').addClass('hide-drawer');
    }

    const handleSignOut = (e) => {
        e.preventDefault();
        signOut();
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="mobile-header d-flex justify-content-between align-items-center d-xl-none">
                    <div className="all-catagory-option mobile-device">
                        <a className="bar-btn" href='/'><i className="fas fa-bars"></i><span className="ml-2 d-none d-md-inline" style={{color: "#4b566b"}}>All Catagories</span></a>
                        <a className="close-btn" href='/'><i className="fas fa-times"></i><span className="ml-2 d-none d-md-inline" style={{color: "#4b566b"}}>All Catagories</span></a>
                    </div>
                    <Link to="/" className="logo"><img src="/images/logo.png" alt="logo" /></Link>
                    {/* search select */}
                    <div className="text-center mobile-search">
                        <button type="button" data-toggle="modal" data-target="#search-select-id"><i className="fas fa-search"></i></button>
                    </div>

                    {/* menubar */}
                    <div>
                        <button className="menu-bar" type="button" data-toggle="modal" data-target="#menu-id">
                            Home<i className="fas fa-caret-down"></i>
                        </button>
                    </div>

                </div>
                <div className="d-none d-xl-flex row align-items-center">
                    <div className="col-5 col-md-2">
                        <Link to="/" className="logo"><img src="/images/logo.png" alt="logo" /></Link>
                    </div>
                    <div className="col-5 col-md-9 col-lg-5">
                    
                        <div className="select-search-option d-none d-md-flex">
                            <div className="flux-custom-select search-custom-select">
                                <select>
                                    <option value="0">Select Catagory</option>
                                    <option value="1">Vegetables</option>
                                    <option value="2">Fruits</option>
                                    <option value="3">Salads</option>
                                    <option value="4">Fish & Seafood</option>
                                    <option value="5">Fresh Meat</option>
                                    <option value="6">Health Product</option>
                                    <option value="7">Butter & Eggs</option>
                                    <option value="8">Oils & Venegar</option>
                                    <option value="9">Frozen Food</option>
                                    <option value="10">Jam & Honey</option>
                                </select>
                            </div>
                            <form action="#" className="search-form">
                                <input type="text" name="search" placeholder="Search for Products" />
                                <button className="submit-btn"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-2 col-md-1 col-lg-5">
                        <ul className="site-action d-none d-lg-flex align-items-center justify-content-between  ml-auto">
                            <li className="site-phone"><a href="tel:000-000-000"><i className="fas fa-phone"></i> 000 000 000</a></li>
                            <li className="site-help">
                                <Link to="/"><i className="fas fa-question-circle"></i> Help & More</Link>
                            </li>
                            <li className="wish-list">
                                <Link to="/"><i className="fas fa-heart"></i> <span className="count">04</span></Link>
                            </li>
                            {
                                token ?
                                    <li className="my-account"><a className="dropdown-toggle" href="/" role="button" id="myaccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user mr-1"></i> My Account</a>
                                        <ul className="submenu dropdown-menu" aria-labelledby="myaccount">
                                            <li>
                                                <Link to="/profile">Profile</Link>
                                            </li>
                                            <li>
                                                <a href="!#" onClick={handleSignOut} >Sign Out</a>
                                            </li>
                                        </ul>
                                    </li>
                                :
                                    <li className="signin-option"><Link to="/signin"><i className="fas fa-user mr-2"></i>Sign In</Link></li>
                            }
                            
                        </ul>
                    </div>

                </div>
            </div>
            <hr />
            <div className="header-bottom">
                <div className="row m-0 align-items-center mega-menu-relative">
                    <div className="col-md-2 p-0 d-none d-xl-block">
                        <div className="all-catagory-option">
                            <a className="bar-btn" href="/" style={{color: "#4b566b"}}><i className="fas fa-bars"></i>All Catagories</a>
                            <a className="close-btn" href="/" style={{color: "#4b566b"}}><i className="fas fa-times"></i>All Catagories</a>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-area d-none d-xl-flex justify-content-between align-items-center">
                            <ul className="menu d-xl-flex flex-wrap list-unstyled">
                                <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
                                <li><NavLink to="/about" activeClassName="active" exact>About</NavLink></li>
                                <li className="item-has-mega-menu">
                                    <Link to="/">Featured Products <i className="fas fa-angle-down"></i></Link>
                                    <div className="mega-menu-container">
                                        <div className="row m-0">
                                            <div className="col-lg-7">
                                                <div className="row m-0">
                                                    <div className="col-lg-4">
                                                        <div className="ctagory-item">
                                                            <h6 className="title">Vegetables</h6>
                                                            <ul>
                                                                <li>
                                                                    <Link to="/">Artichoke.</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Aubergune</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Asparagus</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Broccoflower</Link>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="ctagory-item">
                                                            <h6 className="title">Frouts</h6>
                                                            <ul>
                                                                <li>
                                                                    <Link to="/">Artichoke.</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Aubergune</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Asparagus</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Broccoflower</Link>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="ctagory-item">
                                                            <h6 className="title">Salads</h6>
                                                            <ul>
                                                                <li>
                                                                    <Link to="/">Artichoke.</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Aubergune</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Asparagus</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Broccoflower</Link>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="ctagory-item">
                                                            <h6 className="title">Health Care</h6>
                                                            <ul>
                                                                <li>
                                                                    <Link to="/">Artichoke.</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Aubergune</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Asparagus</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Broccoflower</Link>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="ctagory-item">
                                                            <h6 className="title">Vegetables</h6>
                                                            <ul>
                                                                <li>
                                                                    <Link to="/">Artichoke.</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Aubergune</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Asparagus</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Broccoflower</Link>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="ctagory-item">
                                                            <h6 className="title">Frouts</h6>
                                                            <ul>
                                                                <li>
                                                                    <Link to="/">Artichoke.</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Aubergune</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Asparagus</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">Broccoflower</Link>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="menu-img">
                                                    <img className="w-100" src="/images/mega-menu-img.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item-has-mega-menu">
                                    <Link to="/">Pages <i className="fas fa-angle-down"></i></Link>
                                    <div className="mega-menu-container style2">
                                        <div className="row m-0">
                                            <div className="col-lg-3">
                                                <div className="ctagory-item">
                                                    <h6 className="title">Product Pages</h6>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="ctagory-item">
                                                    <h6 className="title">Dashboard 1</h6>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="ctagory-item">
                                                    <h6 className="title">Dashboard 2</h6>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="ctagory-item">
                                                    <h6 className="title">Other Pages</h6>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product List</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <li className="item-has-children"><a href="">Blog <i className="fas fa-angle-down"></i></a>
                                    <ul className="submenu">
                                        <li><a href="">Blog full width</a></li>
                                        <li><a href="">Blog Rightsidebar</a></li>
                                        <li><a href="">Blog Single</a></li>
                                    </ul>
                                </li> */}
                                <li><NavLink to="/blogs" activeClassName="active" exact>Blogs</NavLink></li>
                                <li>
                                    <NavLink to="/contact" activeClassName="active" exact>Contact Us</NavLink>
                                </li>
                            </ul>
                            <ul className="menu-action d-none d-lg-block">
                                <li className="cart-option"><a onClick={(e) => hanldeOpenCart(e)} href="/"><span className="cart-icon"><i className="fas fa-shopping-cart"></i><span className="count">{cartItems.length}</span></span> <span className="cart-amount">${itemsPrice.toFixed(2)}</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
