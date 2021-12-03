import axios from 'axios';
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

function SignIn({ setToken }) {
    const history = useHistory();
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleValidation = () => {
        let fields = data;
        let formIsValid = true;
        let errors = {};

        // Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "* Email cannot be empty!";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");
            if (
              !(
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                fields["email"].indexOf("@@") === -1 &&
                lastDotPos > 2 &&
                fields["email"].length - lastDotPos > 2
              )
            ) {
              formIsValid = false;
              errors["email"] = "* Email is not valid!";
            }
        }

        // Password
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "* Password cannot be empty!";
        }

        if (typeof fields["password"] !== "undefined") {
            if(fields["password"].length < 6){
                formIsValid = false;
                errors["password"] = "* Password must be more than 6 characters!";
            }
        }

        setErrors(errors)
        return formIsValid
    }

    
    const hanldeSubmit = (e) => {
        e.preventDefault();
        if(handleValidation()){
            const api_url = process.env.REACT_APP_API_URL
            
            axios.post(api_url + 'login', {
                companyId: process.env.REACT_APP_API_ID,
                customer: data,
            }).then((response) => {
                if(response.data.message){
                    document.getElementById('loginMessage').innerHTML = response.data.message
                    setErrors(response.data.message)
                }else{
                    setToken(response.data.access_token)
                    sessionStorage.setItem('token', response.data.access_token)
                    history.push("/")
                }
            })
        }
    }

    return (
        <section className="login-section section-ptb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb--30 mb-lg-0">
                            <div className="eflux-login-form-area">
                                <form action="#" className="eflux-login-form">
                                    <span style={{ color: "red" }} id="loginMessage"></span>
                                    <div className="input-item">
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
                                        <span style={{ color: "red" }}>{ errors['email'] }</span>
                                    </div>

                                    <div className="input-item">
                                        <label>Password</label>
                                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                                        <span style={{ color: "red" }}>{ errors['password'] }</span>
                                    </div>

                                    <div>
                                        <button type="submit" className="submit" onClick={hanldeSubmit} >Sign in</button>
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
                                    <Link to="/signup" className="signup-btn">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default SignIn
