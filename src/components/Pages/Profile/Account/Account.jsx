import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Account({ token, user, setUser }) {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setData({
            name: user.name,
            phone_number: user.phone_number
        })
    }, [user])

    const handleKeyUp = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const api_url = process.env.REACT_APP_API_URL

        axios.post(api_url + "updateInfo", {
            customer: data,
            companyId: process.env.REACT_APP_API_ID,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setErrors({})
            setUser(response.data.data)
            alert("Updated successfully");
        }).catch((error) => {
            setErrors(error.response.data.errors)
        })
    }

    return (
        <div className="col-lg-9">
            <div className="my-account-box">
                <div className="my-account-header">
                    <h6>My Account</h6>
                </div>
                <div className="my-account-body">
                    <form action="#" className="eflux-login-form">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-item">
                                    <label>Your Name</label>
                                    <input type="text" name="name" onKeyUp={handleKeyUp} defaultValue={ user.name } />
                                    <span style={{ color: "red" }}>{ errors['customer.name'] }</span>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="input-item">
                                    <label>Email Address</label>
                                    <input type="email" name="email" defaultValue={ user.email } disabled readOnly />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="input-item">
                                    <label>Phone Number</label>
                                    <input type="text" name="phone_number" onKeyUp={handleKeyUp} defaultValue={ user.phone_number }/>
                                    <span style={{ color: "red" }}>{ errors['customer.phone_number'] }</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="submit" onClick={handleSubmit} className="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Account
