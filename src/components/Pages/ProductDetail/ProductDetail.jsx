import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import ProductZoom from './ProductZoom/ProductZoom'

function ProductDetail({ cartItems, addToCart, removeFromCart, updateCart }) {
    const { productId } = useParams();
    const api_url = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_ID
    const [ product, setProduct ] = useState({});
    
    useEffect(() => {
        axios.post(api_url + '/product/' + productId)
        .then((response) => {
            setProduct(response.data.data)
            
        }).catch(() => {
            window.location.replace("/resourcenotfound")
        })
    }, [api_url, productId])

    return (
            <>
                <ProductZoom 
                    product={product} 
                    cartItem={cartItems.find((item) => item.id === product.id)} 
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    updateCart={updateCart}
                />
                <section className="description-review-area section-ptb">
                    <div className="container">
                        <div className="description-review-wrapper">
                            <div className="description-review-topbar nav">
                                <a className="active" data-toggle="tab" href="#des-details1">Description</a>
                                <a data-toggle="tab" href="#des-details2" className="">Review(3)</a>
                                <a data-toggle="tab" href="#des-details3" className="">Delevary & Return</a>
                            </div>
                            <div className="tab-content description-review-bottom">
                                <div id="des-details1" className="tab-pane active">
                                    <div className="product-description-wrapper">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar massa metus, vitae pharetra lacus sodales sit amet. Morbi accumsan suscipit lacus, sit amet egestas magna elemen tum nec. Mauris urna enim, rutrum in iaculis nec, vehicula ut libero. Etiam sit amet ex orci. Duis eget consectetur libero, eget interdum metus. Aliquam rhoncus porttitor felis, a tincidunt ex scel erisque et. Morbi faucibus venenatis dignissim. Nullam ut facilisis mauris. In hac habitasse platea dictumst. </p>
                                        <p>Pellentesque luctus augue ipsum, ut tincidunt odio tempus at. Nullam ac quam venenatis, bibendum eros at, placerat risus. Maecenas cursus elit non nisl finibus congue. Donec posuere fringilla ante eu vehicula. Fusce sed erat quis nisi gravida vehicula id vitae dolor. In at libero pretium, maximus lorem vitae, pharetra turpis feugiat facilisis ullamcorper.  </p>
                                    </div>
                                </div>
                                <div id="des-details2" className="tab-pane">
                                    <div className="product-anotherinfo-wrapper">
                                        <div className="review-comments-section">
                                            <h3 className="reiview-comments-title">3 reviews</h3>
                                            <div className="review-comment-list">
                                                <div className="review-comment-item d-md-flex">
                                                    <div className="thumb">
                                                        <img src="/images/review/01.jpg" alt="review-thumb"/>
                                                    </div>
                                                    <div className="content">
                                                        <div className="head d-md-flex align-items-center justify-content-between">
                                                            <div className="left">
                                                                <h5 className="name">John Smith</h5>
                                                                <p className="post-time">Posted on December 25, 2020 at 6:57 am</p>
                                                            </div>
                                                            <div className="right">
                                                                <div className="rating d-md-flex align-items-center">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="review-body">
                                                            <p>Objectively enable scalable leadership without and media leadership theme awesome theme without</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="review-comment-item d-md-flex">
                                                    <div className="thumb">
                                                        <img src="/images/review/03.jpg" alt="review-thumb" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="head d-md-flex align-items-center justify-content-between">
                                                            <div className="left">
                                                                <h5 className="name">Stephen Fleming</h5>
                                                                <p className="post-time">Posted on December 25, 2020 at 6:57 am</p>
                                                            </div>
                                                            <div className="right">
                                                                <div className="rating d-md-flex align-items-center">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="review-body">
                                                            <p>Objectively enable scalable leadership without and media leadership theme awesome theme without flexible solutions awesome.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="review-comment-item d-md-flex">
                                                    <div className="thumb">
                                                        <img src="/images/review/02.jpg" alt="review-thumb" />
                                                    </div>
                                                    <div className="content">
                                                        <div className="head d-md-flex align-items-center justify-content-between">
                                                            <div className="left">
                                                                <h5 className="name">Robart Mark</h5>
                                                                <p className="post-time">Posted on December 25, 2020 at 6:57 am</p>
                                                            </div>
                                                            <div className="right">
                                                                <div className="rating d-md-flex align-items-center">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="review-body">
                                                            <p>Objectively enable scalable leadership without and media leadership.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3>Wite Your Opinion and Rate Us</h3>
                                            <form action="#" className="review-form">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="input-item">
                                                            <label>Name</label>
                                                            <input type="text" name="name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="input-item">
                                                            <label>Email</label>
                                                            <input type="text" name="email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        {/* <!-- <div className="input-item">
                                                            <label>Your Rating</label>
                                                            <div className="rating">
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </div>
                                                        </div> --> */}
                                                        <div className="input-item">
                                                            <div className="card-body text-center">
                                                                <fieldset className="rating"> 
                                                                    <input type="radio" id="star5" name="rating" value="5" /><label className="full" htmlFor="star5" title="Awesome - 5 stars"></label> 
                                                                    <input type="radio" id="star4half" name="rating" value="4.5" />
                                                                    <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label> 
                                                                    <input type="radio" id="star4" name="rating" value="4" /><label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label> 
                                                                    <input type="radio" id="star3half" name="rating" value="3.5" />
                                                                    <label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label> 
                                                                    <input type="radio" id="star3" name="rating" value="3" /><label className="full" htmlFor="star3" title="Meh - 3 stars"></label> 
                                                                    <input type="radio" id="star2half" name="rating" value="2.5" />
                                                                    <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label> 
                                                                    <input type="radio" id="star2" name="rating" value="2" /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label> 
                                                                    <input type="radio" id="star1half" name="rating" value="1.5" />
                                                                    <label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label> 
                                                                    <input type="radio" id="star1" name="rating" value="1" /><label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label> 
                                                                    <input type="radio" id="starhalf" name="rating" value="0.5" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label> 
                                                                    <input type="radio" className="reset-option" name="rating" value="reset" /> 
                                                                </fieldset>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-item">
                                                            <label>Message</label>
                                                            <textarea name="message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button type="submit" className="review-submit">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div id="des-details3" className="tab-pane">
                                    <div className="product-anotherinfo-wrapper">
                                        <h6>Return & Exchange Policy</h6>
                                        <p>Dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas.</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul>
                                                    <li>Claritas est etiam processus dynamicus.</li>
                                                    <li>Mirum est notare quam littera.</li>
                                                    <li>Nam liber tempor cum soluta nobis eleifend.</li>
                                                    <li>Duis autem vel eum iriure dolor.</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul>
                                                    <li>Claritas est etiam processus dynamicus.</li>
                                                    <li>Mirum est notare quam littera.</li>
                                                    <li>Nam liber tempor cum soluta nobis eleifend.</li>
                                                    <li>Duis autem vel eum iriure dolor.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default ProductDetail
