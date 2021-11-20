import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

function Profile({token}) {
    const [user, setUser] = useState({})
    const [addresses, setAddresses] = useState({})

    useEffect(() => {
        const api_url = process.env.REACT_APP_API_URL

        axios.post(api_url + 'profile', {
            companyId: process.env.REACT_APP_API_ID
        },{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setUser(response.data.data);
            setAddresses(JSON.parse(response.data.data.addresses))
        })
    }, [])

    return (
        <>
            <section className="admin-page-section d-flex align-items-center">
                <div className="aps-wrapper w-100">
                    <div className="container">
                        <div className="row justify-content-center justify-content-md-start">
                            <div className="admin-content-area">
                                <div className="admin-thumb">
                                    <img src="assets/images/admin/thumb.jpg" alt="" />
                                    <a href="#" className="image-change-option"><i className="fas fa-camera"></i></a>
                                </div>
                                <div className="admin-content">
                                    <h4 className="name">{ user.name }</h4>
                                    {/* <p className="desc">Lorem Ipsum is simply dummy text.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="dashboard-nav" className="dashboard-section">
                <div className="container">
                    <ul className="dashbord-nav d-lg-flex flex-wrap align-items-center justify-content-between">
                        <li><a href="user-dashbord.html#dashboard-nav"><i className="far fa-list-alt"></i>Your Orders</a></li>
                        <li><a href="track-order.html#dashboard-nav"><i className="fas fa-shipping-fast"></i>Track Orders</a></li>
                        <li><a className="active" href="profile.html#dashboard-nav"><i className="far fa-user"></i>Your Profile</a></li>
                        <li><a href="wishlist.html#dashboard-nav"><i className="far fa-heart"></i>Wish List</a></li>
                    </ul>
                </div>

                <div className="container">
                    <div className="dashboard-body">
                        <div className="profile">
                            <h5 className="title">Your Profile <span title="Edit Profile" id="edit" className="edit" data-toggle="modal" data-target="#edit-form1"><i className="fas fa-edit"></i></span></h5>

                            <ul className="list-profile-info list-unstyled">
                                <li>
                                    <span className="title">Your Name</span>
                                    <span className="desc">{ user.name }</span>
                                </li>
                                <li>
                                    <span className="title">Email</span>
                                    <span className="desc">{ user.email }</span>
                                </li>
                                <li>
                                    <span className="title">Mobile</span>
                                    <span className="desc">-</span>
                                </li>
                                <li>
                                    <span className="title">City</span>
                                    <span className="desc">-</span>
                                </li>
                                <li>
                                    <span className="title">State</span>
                                    <span className="desc">-</span>
                                </li>
                                <li>
                                    <span className="title">Zip</span>
                                    <span className="desc">-</span>
                                </li>
                                <li>
                                    <span className="title">Country</span>
                                    <span className="desc">-</span>
                                </li>
                            </ul>
                        </div>


                        <div className="profile-address-book">
                            <h3 className="title">Address Book</h3>
                            <ul className="address-list">
                                {   
                                    addresses.addresses ? 
                                    addresses.addresses.map((address, index) => {
                                        return (
                                            <li className="active" key={index}>
                                                <span className="icon"><i className="fas fa-check-circle"></i></span>
                                                <div className="address-text">
                                                    <p className="address">{address}</p>
                                                    <p className="country">America</p>
                                                </div> 
                                                <div className="edit-delete-btn">
                                                    <button className="edit" type="button" data-toggle="modal" data-target="#address-edit"><i className="fas fa-edit"></i></button>
                                                    <button className="delete"><i className="fas fa-trash-alt"></i></button>
                                                </div>   
                                            </li>
                                        )
                                    })
                                    :
                                    <></>
                                }
                                <li className="addnew">
                                    <button type="button" data-toggle="modal" data-target="#address-add" className="add-new-btn">Add New Address</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
