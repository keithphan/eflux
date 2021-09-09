import React from 'react'
import $ from 'jquery';
import { Link } from 'react-router-dom';

function LoginArea() {
    const handleCloseForm = () => {
        $('#login-area').removeClass('open-form');
    }

    return (
        <section id="login-area" className="login-area">
            <div onClick={() => handleCloseForm()} className="overlay"></div>
            <div className="login-body-wrapper">
                <div className="login-body">
                    <div className="close-icon" onClick={() => handleCloseForm()}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="login-header">
                        <h4>Create Your Account</h4>
                        <p>Login with your email & password</p>
                    </div>
                    <div className="login-content">
                        <form action="#" className="login-form">
                            <input type="text" name="name" placeholder="Name"/>
                            <input type="email" name="email" placeholder="Email"/>
                            <button type="submit" className="submit">Sign Up</button>
                        </form>
                        {/* <div className="text-center seperator">
                            <span>Or</span>
                        </div>
                        <div className="othersignup-option">
                            <Link to="/" className="facebook"><i className="fab fa-facebook-square"></i>Continue with Facebook</Link>
                            <Link to="/" className="google"><i className="fab fa-google-plus"></i>Continue with Google</Link>
                            <a className="facebook" href="#"><i className="fab fa-facebook-square"></i>Continue with Facebook</a>
                            <a className="google" href="#"><i className="fab fa-google-plus"></i>Continue with Google</a>
                        </div> */}
                        <div className="text-center dont-account py-4">
                            <p className="mb-0">Don't have any account <Link to="/">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
                <div className="forgot-password text-center">
                    <p>forgot Passowrd? <Link to="/">Reset It</Link></p>
                </div>
            </div>
        </section>
    )
}

export default LoginArea
