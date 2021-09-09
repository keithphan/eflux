import React from 'react'

function SignUp() {
    return (
        <section className="login-section section-ptb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="eflux-login-form-area">
                                <form action="#" className="eflux-login-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>First Name</label>
                                                <input type="text" name="name" placeholder="First Name"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>Last Name</label>
                                                <input type="text" name="name" placeholder="Last Name"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>Email</label>
                                                <input type="email" name="email" placeholder="Email Address"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>Password</label>
                                                <input type="password" name="website" placeholder="Password"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="submit">Create Account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default SignUp
