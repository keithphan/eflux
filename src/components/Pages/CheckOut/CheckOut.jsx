import React, {useEffect} from 'react'
import CartProduct from './CartProduct/CartProduct'
import { Link, useHistory } from "react-router-dom";

function CheckOut({cartItems, setSelectedProduct, addToCart, removeFromCart, updateCart, itemsPrice, itemsSavingPrice, token}) {
    const history = useHistory();

    useEffect(() => {
        if(!token){
            history.push('/signin')
        }
    }, [token, history])
    
    return (
        <>
        {cartItems.length > 0 ? 
            <section className="dashboard-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            {/* <div className="form-item contact-number-item bg-color-white box-shadow p-3 p-lg-5 border-radius5">
                                <h6>Contact Number</h6>
                                <p>We need your phone number so we can inform you about any delay or problem.<br/>5 digits code send your phone <strong>+111223366548</strong></p>
                                <div className="mb-2">
                                    <form action="abc.html" className="send-code-form">
                                        <input type="text" name="code"/>
                                        <button className="submit" type="submit">Send Code</button>
                                    </form>
                                </div>
                                
                                <div>
                                    <h6>Enter Code</h6>
                                    <form action="abc.html" className="varify-code-form">
                                        <input type="text" name="code"/>
                                        <input type="text" name="code"/>
                                        <input type="text" name="code"/>
                                        <input type="text" name="code"/>
                                        <input type="text" name="code"/>
                                        <button className="submit" type="submit">Next</button>
                                        <div>
                                            <a href="abc.html" className="resend-code">Resend Code</a>
                                        </div>
                                    </form>
                                </div>
                            </div> */}

                            <div className="form-item billing-item bg-color-white box-shadow p-3 p-lg-5 border-radius5">
                                <h6>User Accounts</h6>
                                <form action="abc.html" className="billing-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>First Name*</label>
                                                <input type="text" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>Last Name*</label>
                                                <input type="text" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="input-item">
                                                <label>Country*</label>
                                                <div className="flux-custom-select">
                                                    <select>
                                                        <option value="0">Country</option>
                                                        <option value="1">USA</option>
                                                        <option value="2"> UK</option>
                                                        <option value="3">Spain</option>
                                                        <option value="4">Italy</option>
                                                        <option value="5">Portgal</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="input-item">
                                                <label>Address*</label>
                                                <input type="text" name="address"/>
                                                <input type="text" name="address"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="input-item">
                                                <label>Town or City*</label>
                                                <div className="flux-custom-select">
                                                    <select>
                                                        <option value="0">City</option>
                                                        <option value="1">British Columbia</option>
                                                        <option value="2">Manitoba</option>
                                                        <option value="3">New Brunswick</option>
                                                        <option value="4">Nova Scotia</option>
                                                        <option value="5">Ontario</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>Email*</label>
                                                <input type="text" name="email"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>Mobile*</label>
                                                <input type="text" name="mobile"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="form-item time-schedule bg-color-white box-shadow p-3 p-lg-5 border-radius5">
                                <h6>Delivery Schedule</h6>

                                <div className="time-schedule-container">
                                    <p className="title">Express-Delivery</p>
                                    <div className="time-schedule-box">
                                        <ul>
                                            <li>Monday</li>
                                            <li>11/11/2021</li>
                                            <li>8.00AM - 10.00AM</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="form-item payment-item bg-color-white box-shadow p-3 p-lg-5 border-radius5">
                                <h6>Payment</h6>

                                <form action="abc.html" className="payment-form">
                                    
                                    <div className="input-item radio">
                                        <input type="radio" name="payment" value="check payment"/>
                                        <label>Check Payment</label>
                                    </div>

                                    <div className="input-item radio">
                                        <input type="radio" name="payment" value="cash on delivary"/>
                                        <label>Cash on delivary</label>
                                    </div>

                                    <div className="input-item radio">
                                        <input type="radio" name="payment" value="paypal"/>
                                        <label>Paypal</label>
                                    </div>
                                </form>
                                <div className="payment-image">
                                    <img src="/images/payment/01.png" alt="payment"/>
                                </div>
                                <div className="text-right">
                                    <a href="abc.html" className="place-order-btn">Place Order</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="cart-item sitebar-cart bg-color-white box-shadow p-3 p-lg-5 border-radius5">
                                <div className="cart-product-container">
                                    {
                                        cartItems.map((product) => {
                                            return (
                                                <CartProduct
                                                    key={product.id}  
                                                    product={product} 
                                                    addToCart={addToCart} 
                                                    removeFromCart={removeFromCart}
                                                    updateCart={updateCart}
                                                    setSelectedProduct={setSelectedProduct}
                                                />
                                            )
                                        })
                                    }
                                </div>
                                <div className="cart-footer">
                                    <div className="product-other-charge">
                                        <p className="d-flex justify-content-between">
                                            <span>Delevery charge</span> 
                                            <span>$8.00</span>
                                        </p>
                                        <a href="abc.html">Do you have a voucher?</a>
                                    </div>
                            
                                    <div className="cart-total">
                                        <p className="saving d-flex justify-content-between">
                                            <span>Total Savings</span> 
                                            <span>${itemsSavingPrice.toFixed(2)}</span>
                                        </p>
                                        <p className="total-price d-flex justify-content-between">
                                            <span>Total</span> 
                                            <span>${itemsPrice.toFixed(2)}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        : 
        <section className="error-page text-center">
            <div className="container">
                <h3>Empty Cart</h3>
                <p>It looks like nothing in your cart.</p>
                <Link to="/" className="backhome">Back Home</Link>
            </div>
        </section>
        }
        </>
    )
}

export default CheckOut
