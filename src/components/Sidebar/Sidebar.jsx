import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <div className="catagory-sidebar-area">
            <div className="catagory-sidebar-area-inner">
                <div className="catagory-sidebar all-catagory-option">
                    <ul className="catagory-submenu">
                        <li><a data-toggle="collapse" href="#catagory-widget1" role="button" aria-expanded="false" aria-controls="catagory-widget1">Vegetables<i className="fas fa-angle-down"></i></a>
                            <ul className="catagory-submenu collapse show" id="catagory-widget1">
                                <li><Link to='/demo' >Demo</Link></li>
                                <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                                <li><a href="product-list.html">Asparagus.</a></li>
                                <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                                <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                            </ul>
                        </li>
                        <li><a  data-toggle="collapse" href="#catagory-widget2" role="button" aria-expanded="false" aria-controls="catagory-widget2">Fruits<i className="fas fa-angle-down"></i></a>
                            <ul className="catagory-submenu collapse" id="catagory-widget2">
                                <li><a href="product-list.html">Artichoke.</a></li>
                                <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                                <li><a href="product-list.html">Asparagus.</a></li>
                                <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                                <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                            </ul>
                        </li>
                        <li><a  data-toggle="collapse" href="#catagory-widget3" role="button" aria-expanded="false" aria-controls="catagory-widget3">Salads<i className="fas fa-angle-down"></i></a>
                            <ul className="catagory-submenu collapse" id="catagory-widget3">
                                <li><a href="product-list.html">Artichoke.</a></li>
                                <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                                <li><a href="product-list.html">Asparagus.</a></li>
                                <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                                <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                            </ul>
                        </li>
                        <li><a  data-toggle="collapse" href="#catagory-widget4" role="button" aria-expanded="false" aria-controls="catagory-widget4">Fish & seafood<i className="fas fa-angle-down"></i></a>
                            <ul className="catagory-submenu collapse" id="catagory-widget4">
                                <li><a href="product-list.html">Artichoke.</a></li>
                                <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                                <li><a href="product-list.html">Asparagus.</a></li>
                                <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                                <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                            </ul>
                        </li>
                        <li><a  data-toggle="collapse" href="#catagory-widget5" role="button" aria-expanded="false" aria-controls="catagory-widget5">Fresh Meat<i className="fas fa-angle-down"></i></a>
                            <ul className="catagory-submenu collapse" id="catagory-widget5">
                                <li><a href="product-list.html">Artichoke.</a></li>
                                <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                                <li><a href="product-list.html">Asparagus.</a></li>
                                <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                                <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                            </ul>
                        </li>
                        <li><a  data-toggle="collapse" href="#catagory-widget6" role="button" aria-expanded="false" aria-controls="catagory-widget6">Health Products<i className="fas fa-angle-down"></i></a>
                            <ul className="catagory-submenu collapse" id="catagory-widget6">
                                <li><a href="product-list.html">Artichoke.</a></li>
                                <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                                <li><a href="product-list.html">Asparagus.</a></li>
                                <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                                <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                            </ul>
                        </li>
                        <li><a  data-toggle="collapse" href="#catagory-widget7" role="button" aria-expanded="false" aria-controls="catagory-widget7">Butter & Eggs<i className="fas fa-angle-down"></i></a>
                            <ul className="catagory-submenu collapse" id="catagory-widget7">
                                <li><a href="product-list.html">Artichoke.</a></li>
                                <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                                <li><a href="product-list.html">Asparagus.</a></li>
                                <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                                <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                            </ul>
                        </li>
                        <li><a  data-toggle="collapse" href="#catagory-widget8" role="button" aria-expanded="false" aria-controls="catagory-widget8">Oils and Venegar<i className="fas fa-angle-down"></i></a>
                            <ul className="catagory-submenu collapse" id="catagory-widget8">
                                <li><a href="product-list.html">Artichoke.</a></li>
                                <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                                <li><a href="product-list.html">Asparagus.</a></li>
                                <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                                <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                            </ul>
                        </li>
                        <li><a  data-toggle="collapse" href="#catagory-widget9" role="button" aria-expanded="false" aria-controls="catagory-widget9">Frozen Food<i className="fas fa-angle-down"></i></a>
                            <ul className="catagory-submenu collapse" id="catagory-widget9">
                                <li><a href="product-list.html">Artichoke.</a></li>
                                <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                                <li><a href="product-list.html">Asparagus.</a></li>
                                <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                                <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                            </ul>
                        </li>
                        <li><a  data-toggle="collapse" href="#catagory-widget10" role="button" aria-expanded="false" aria-controls="catagory-widget10">Jam & Honey<i className="fas fa-angle-down"></i></a>
                            <ul className="catagory-submenu collapse" id="catagory-widget10">
                                <li><a href="product-list.html">Artichoke.</a></li>
                                <li><a href="product-list.html">Aubergine (eggplant).</a></li>
                                <li><a href="product-list.html">Asparagus.</a></li>
                                <li><a href="product-list.html">Broccoflower (a hybrid).</a></li>
                                <li><a href="product-list.html">Broccoli (calabrese).</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
