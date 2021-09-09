import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
                <div className="container">
                    <div className="footer-newsletter">
                            <div className="row align-items-center">
                                <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                                    <div className="newsletter-heading">
                                        <h5>Know it all first</h5>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                                    <div className="newsletter-form">
                                        <input type="text" name="email" placeholder="E-mail Address" />
                                        <button className="submit-btn">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><path fill="#2196F3" d="M511.189,259.954c1.649-3.989,0.731-8.579-2.325-11.627l-192-192 c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82l173.803,173.803H10.667 C4.776,245.213,0,249.989,0,255.88c0,5.891,4.776,10.667,10.667,10.667h464.917L301.803,440.328 c-4.237,4.093-4.355,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l192-192 C509.872,262.42,510.655,261.246,511.189,259.954z"/><path d="M309.333,458.546c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571L486.251,255.88 L301.781,71.432c-4.093-4.237-3.975-10.99,0.262-15.083c4.134-3.992,10.687-3.992,14.82,0l192,192 c4.164,4.165,4.164,10.917,0,15.083l-192,192C314.865,457.426,312.157,458.546,309.333,458.546z"/><path d="M501.333,266.546H10.667C4.776,266.546,0,261.771,0,255.88c0-5.891,4.776-10.667,10.667-10.667h490.667 c5.891,0,10.667,4.776,10.667,10.667C512,261.771,507.224,266.546,501.333,266.546z"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="footer-widget">
                                    <a href="index.html" className="footer-logo"><img src="/images/logo.png" alt="logo" /></a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teincididunt ut labore et </p>
                                    <ul className="social-media-list d-flex flex-wrap">
                                        <li>
                                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fab fa-vimeo-v"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fab fa-pinterest-p"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="footer-widget">
                                    <h5 className="footer-title">Product Catalog</h5>
                                    <div className="widget-wrapper">
                                        <ul>
                                            <li>
                                                <Link to="/">Fruits</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Salads</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Fish & Seafood</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Fresh Mea</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Health Products</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Butter & Eggs</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Oil & Vinegars</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Health Products</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="footer-widget">
                                    <h5 className="footer-title">Useful Links</h5>
                                    <div className="widget-wrapper">
                                        <ul>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Featured Products</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Offers</Link>
                                            </li>
                                            <li>
                                                <Link to="/blogs">Blogs</Link>
                                            </li>
                                            <li>
                                                <Link to="/faq">Faq</Link>
                                            </li>
                                            <li><a href="contact.html">Careers</a></li>
                                            <li>
                                                <Link to="/contact">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="footer-widget">
                                    <h5 className="footer-title">Download Apps</h5>
                                    <div className="widget-wrapper">
                                        <div className="apps-store">
                                            <Link to="/"><img src="/images/app-store/apple.png" alt="app" /></Link>
                                            <Link to="/"><img src="/images/app-store/google.png" alt="app" /></Link>
                                        </div>
                                        <div className="payment-method d-flex flex-wrap">
                                            <Link to="/"><img src="/images/payment/visa.png" alt="payment" /></Link>
                                            <Link to="/"><img src="/images/payment/paypal.png" alt="payment" /></Link>
                                            <Link to="/"><img src="/images/payment/master.png" alt="payment" /></Link>
                                            <Link to="/"><img src="/images/payment/discover.png" alt="payment" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                                <p className="copyright">Copyright &copy; 2021 <Link to="/">eflux</Link>. All Rights Reserved.</p>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                                <ul className="footer-menu d-flex flex-wrap">
                                    <li>
                                        <Link to="/">Privacy policies</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Coockies</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
