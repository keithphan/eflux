import React from 'react'
import {Link} from 'react-router-dom'

function SignIn() {
    return (
        <section className="login-section section-ptb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb--30 mb-lg-0">
                            <div className="eflux-login-form-area">
                                <form action="#" className="eflux-login-form">
                                    
                                    <div className="input-item">
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="Email Address"/>
                                    </div>

                                    <div className="input-item">
                                        <label>Password</label>
                                        <input type="password" name="website" placeholder="Password"/>
                                    </div>

                                    <div>
                                        <button type="submit" className="submit">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 pl-lg-5">
                            <div className="new-customer-container">
                                <h6>New Customer</h6>
                                <div className="new-customer-box">
                                    <h6>Create a New Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                    <Link to="/signup" className="signup-btn" >Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default SignIn
