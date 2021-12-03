import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

function SignUp({setToken}) {
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

    // const handleValidation = () => {
    //     let fields = data;
    //     let formIsValid = true;
    //     let errors = {};

    //     // First name
    //     if (!fields["firstname"]) {
    //         formIsValid = false;
    //         errors["firstname"] = "* First name cannot be empty!";
    //     }
    
    //     if (typeof fields["firstname"] !== "undefined") {
    //         if (!fields["firstname"].match(/^[a-zA-Z]+$/)) {
    //         formIsValid = false;
    //         errors["firstname"] = "* Only letters!";
    //         }
    //     }

    //     // Last name
    //     if (!fields["lastname"]) {
    //         formIsValid = false;
    //         errors["lastname"] = "* Last name cannot be empty!";
    //     }
    
    //     if (typeof fields["lastname"] !== "undefined") {
    //         if (!fields["lastname"].match(/^[a-zA-Z]+$/)) {
    //         formIsValid = false;
    //         errors["lastname"] = "* Only letters!";
    //         }
    //     }

    //     // Email
    //     if (!fields["email"]) {
    //         formIsValid = false;
    //         errors["email"] = "* Email cannot be empty!";
    //     }

    //     if (typeof fields["email"] !== "undefined") {
    //         let lastAtPos = fields["email"].lastIndexOf("@");
    //         let lastDotPos = fields["email"].lastIndexOf(".");
    //         if (
    //           !(
    //             lastAtPos < lastDotPos &&
    //             lastAtPos > 0 &&
    //             fields["email"].indexOf("@@") === -1 &&
    //             lastDotPos > 2 &&
    //             fields["email"].length - lastDotPos > 2
    //           )
    //         ) {
    //           formIsValid = false;
    //           errors["email"] = "* Email is not valid!";
    //         }
    //     }

    //     // Password
    //     if (!fields["password"]) {
    //         formIsValid = false;
    //         errors["password"] = "* Password cannot be empty!";
    //     }

    //     if (typeof fields["password"] !== "undefined") {
    //         if(fields["password"].length < 6){
    //             formIsValid = false;
    //             errors["password"] = "* Password must be more than 6 characters!";
    //         }
    //     }

    //     setErrors(errors)
    //     return formIsValid
    // }

    const hanldeSubmit = (e) => {
        e.preventDefault();

        // if(handleValidation()){
            const api_url = process.env.REACT_APP_API_URL
            
            axios.post(api_url + 'register', {
                companyId: process.env.REACT_APP_API_ID,
                customer: data,
            }).then((response) => {
                setErrors({})
                // setToken(response.data.access_token)
                // sessionStorage.setItem('token', response.data.access_token)
                // history.push('/')

            }).catch((error) => {
                console.log(error.response.data.errors)
                setErrors(error.response.data.errors)
            })
        // }
    }

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
                                                <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} />
                                                <span style={{ color: "red" }}>{ errors['customer.firstname'] }</span>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>Last Name</label>
                                                <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange}/>
                                                <span style={{ color: "red" }}>{ errors['customer.lastname'] }</span>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>Email</label>
                                                <input type="email" name="email" placeholder="Email Address" onChange={handleChange}/>
                                                <span style={{ color: "red" }}>{ errors['customer.email'] }</span>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="input-item">
                                                <label>Password</label>
                                                <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                                                <span style={{ color: "red" }}>{ errors['customer.password'] }</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="submit" onClick={hanldeSubmit}>Create Account</button>
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
