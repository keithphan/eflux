import React, {useEffect} from 'react'
import Banners from './Banners/Banners'
import Brands from './Brands/Brands'
import Categories from './Categories/Categories'
import InfoBoxes from './InfoBoxes/InfoBoxes'
import ProductList from './ProductList/ProductList'
import Testimonial from './Testimonial/Testimonial'

function Home({ trending_products, promoted_products, setSelectedProduct, cartItems, addToCart, removeFromCart, updateCart }) {
    
    
    useEffect(() => {
        
    })

    return (
        <>
            {/* <!-- banner-section start --> */}
            <Banners />
            {/* <!-- banner-section end --> */}



            {/* info-box-section start */}
            <InfoBoxes />
            {/* <!-- info-box-section end --> */}




            {/* <!-- catagory section start --> */}
            <Categories />
            {/* <!-- catagory section end --> */}


            {/* <!-- trending product-section start --> */}
            <section className="trending-product-section">
                <div className="container">
                    <div className="section-heading">
                        <h4 className="heading-title"><span className="heading-circle"></span> Trending Products</h4>
                    </div>

                    <div className="section-wrapper">
                        {/* <!-- Add Arrows --> */}
                        <div className="slider-btn-group">
                            <div className="slider-btn-prev trending-slider-prev">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 443.52 443.52" enableBackground="new 0 0 443.52 443.52" xmlSpace="preserve"><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
                        c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
                        L143.492,221.863z"/></g></svg>
                            </div>
                            <div className="slider-btn-next trending-slider-next">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" enableBackground="new 0 0 512.002 512.002" xmlSpace="preserve"><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105
                        L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
                        l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></svg>
                            </div>
                        </div>
                        <div className="mlr-20">
                            <div className="trending-product-container">
                                <ProductList 
                                    key={1} 
                                    products={trending_products} 
                                    setSelectedProduct={setSelectedProduct} 
                                    cartItems={cartItems} 
                                    addToCart={addToCart} 
                                    removeFromCart={removeFromCart}
                                    updateCart={updateCart}
                                />
                            </div>
                            <div className="text-center pt-3">
                                <a href="product-list.html" className="more-product-btn">More Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- trending product-section end --> */}



            {/* <!-- advertisement-section start --> */}
            <div className="advertisement-section pb-5">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <a href="abc.html"><img src="/images/advertise/01.jpg" alt="advertise" /></a>
                        </div>
                        <div className="col-lg-6">
                            <a href="abc.html"><img src="/images/advertise/02.jpg" alt="advertise" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- advertisement-section start --> */}


            {/* <!-- countdown section start --> */}
            <section className="countdown-section section-ptb">
                <div className="container">
                    <div className="section-header text-center">
                        <h3>Deal Of the Day</h3>
                    </div>
                    {/* <div className="countdown-container countdown show d-flex justify-content-center" data-Date='2021/12/10 13:37:53'>
                        <div className="running">
                            <timer className="d-flex flex-wrap justify-content-center">
                                <div className="count-item">
                                    <div className="count-number days"></div>
                                    <div className="count-text">Days</div>
                                </div>

                                <div className="count-item">
                                    <div className="count-number hours"></div>
                                    <div className="count-text">hours</div>
                                </div>

                                <div className="count-item">
                                    <div className="count-number minutes"></div>
                                    <div className="count-text">minutes</div>
                                </div>

                                <div className="count-item">
                                    <div className="count-number seconds"></div>
                                    <div className="count-text">seconds</div>
                                </div>
                            </timer>
                        </div>
                    </div> */}
                    <div className="text-center mt-5">
                        <a href="product-leftsidebar.html" className="shop-btn">Show Now</a>
                    </div>
                </div>
            </section>
            {/* <!-- countdown section end --> */}


            {/* <!-- recommended product-section start --> */}
            <section className="recomended-product-section pb-5">
                <div className="container">
                    <div className="section-heading">
                        <h4 className="heading-title"><span className="heading-circle"></span> We Recommend You</h4>
                    </div>

                    <div className="section-wrapper">
                        {/* <!-- Add Arrows --> */}
                        <div className="slider-btn-group">
                            <div className="slider-btn-prev trending-slider-prev">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 443.52 443.52" enableBackground="new 0 0 443.52 443.52" xmlSpace="preserve"><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
                        c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
                        L143.492,221.863z"/></g></svg>
                            </div>
                            <div className="slider-btn-next trending-slider-next">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" enableBackground="new 0 0 512.002 512.002" xmlSpace="preserve"><g><path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105
                        L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
                        l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/></g></svg>
                            </div>
                        </div>
                        <div className="mlr-20">
                            <div className="recommend-product-container">
                                <ProductList 
                                    key={2} 
                                    products={promoted_products} 
                                    setSelectedProduct={setSelectedProduct} 
                                    cartItems={cartItems} 
                                    addToCart={addToCart} 
                                    removeFromCart={removeFromCart}
                                    updateCart={updateCart}
                                />
                            </div>
                            <div className="text-center pt-3">
                                <a href="product-list.html" className="more-product-btn">More Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- recommended product-section end --> */}

            {/* <!-- feature-brand-section start --> */}
            <Brands/>
            {/* <!-- feature-brand-section end --> */}



            {/* <!-- advertisement-section start --> */}
            <div className="advertisement-section pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <a href="abc.html"><img src="/images/advertise/10.jpg" alt="advertise" /></a>
                        </div>
                        <div className="col-lg-4">
                            <a href="abc.html"><img src="/images/advertise/11.jpg" alt="advertise" /></a>
                        </div>
                        <div className="col-lg-4">
                            <a href="abc.html"><img src="/images/advertise/12.jpg" alt="advertise" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- advertisement-section start --> */}



            {/* <!-- testimonial-section start --> */}
            <Testimonial />
            {/* <!-- testimonial-section end --> */}


            {/* blog-section start */}
            <section id="blog" className="blog-section pt--0 pb--70">
                <div className="container pl-lg-0 pr-lg-0">
                    <div className="section-heading">
                        <h4 className="heading-title"><span className="heading-circle"></span> Our Blog</h4>
                    </div>
                </div>

                <div className="container pl-lg-0 pr-lg-0">
                    <div className="row hover-effect-parent4 justify-content-center justify-content-lg-start">
                        <div className="col-md-6 col-lg-4 mb--30 mb-lg-0">
                            <div className="post-item">
                                <div className="post-thumb">
                                    <a href="single.html"><img src="/images/blog/01.jpg" alt="thumb" /></a>
                                </div>
                                <div className="post-content border-effect">
                                    <ul className="meta-post list-unstyled pl-0 d-flex justify-content-between">
                                        <li>
                                            <span className="icon"><i className="far fa-clock"></i></span>
                                            <span className="meta-content">04 February 2020</span>
                                        </li>
                                        <li>
                                            <span className="icon"><i className="far fa-comment-alt"></i></span>
                                            <a href="abc.html" className="meta-link">26 Comments</a>
                                        </li>
                                    </ul>
                                    <h5 className="title mb-3"><a href="single.html">Lorem ipsum dolor sit amet, con sectetuer adipiscing elit......</a></h5>
                                    <a href="single.html" className="blog-btn">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb--30 mb-lg-0">
                            <div className="post-item">
                                <div className="post-thumb">
                                    <a href="single.html"><img src="/images/blog/02.jpg" alt="thumb" /></a>
                                </div>
                                <div className="post-content border-effect">
                                    <ul className="meta-post list-unstyled pl-0 d-flex justify-content-between">
                                        <li>
                                            <span className="icon"><i className="far fa-clock"></i></span>
                                            <span className="meta-content">04 February 2020</span>
                                        </li>
                                        <li>
                                            <span className="icon"><i className="far fa-comment-alt"></i></span>
                                            <a href="abc.html" className="meta-link">26 Comments</a>
                                        </li>
                                    </ul>
                                    <h5 className="title mb-3"><a href="single.html">Lorem ipsum dolor sit amet, con sectetuer adipiscing elit......</a></h5>
                                    <a href="single.html" className="blog-btn">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb--30 mb-lg-0">
                            <div className="post-item">
                                <div className="post-thumb">
                                    <a href="single.html"><img src="/images/blog/03.jpg" alt="thumb" /></a>
                                </div>
                                <div className="post-content border-effect">
                                    <ul className="meta-post list-unstyled pl-0 d-flex justify-content-between">
                                        <li>
                                            <span className="icon"><i className="far fa-clock"></i></span>
                                            <span className="meta-content">04 February 2020</span>
                                        </li>
                                        <li>
                                            <span className="icon"><i className="far fa-comment-alt"></i></span>
                                            <a href="abc.html" className="meta-link">26 Comments</a>
                                        </li>
                                    </ul>
                                    <h5 className="title mb-3"><a href="single.html">Lorem ipsum dolor sit amet, co nsectetuer adipiscing elit......</a></h5>
                                    <a href="single.html" className="blog-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog-section end */}
        </>
    )
}

export default Home
