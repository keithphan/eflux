import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import LeftSide from './LeftSide/LeftSide'
import Account from './Account/Account';
import AddressBook from './AddressBook/AddressBook';
import Password from './Password/Password';
import Wishlist from './Wishlist/Wishlist';
import Orders from './Orders/Orders';

function Profile({token, signOut}) {
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
    }, [token])

    return (
        <Router>
            <section className="admin-page-section d-flex align-items-center">
                <div className="aps-wrapper w-100">
                    <div className="container">
                        <div className="row justify-content-center justify-content-md-start">
                            <div className="admin-content-area">
                                <div className="admin-thumb">
                                    <img src="assets/images/admin/thumb.jpg" alt="" />
                                    <a href="!#" className="image-change-option"><i className="fas fa-camera"></i></a>
                                </div>
                                <div className="admin-content">
                                    <h4 className="name">{ user.name }</h4>
                                    {/* <p class="desc">Lorem Ipsum is simply dummy text.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="dashboard-section" className="dashboard-section">
                <div className="container">
                    <div className="row">
                        
                        <LeftSide signOut={signOut}/>

                        <Switch>
                            
                            <Route path="/profile" exact >
                                <Account user={user} token={token} />
                            </Route>

                            <Route path="/profile/address-book">
                                <AddressBook addresses={addresses} />
                            </Route>

                            <Route path="/profile/password">
                                <Password />
                            </Route>

                            <Route path="/profile/wishlist">
                                <Wishlist />
                            </Route>

                            <Route path="/profile/orders">
                                <Orders />
                            </Route>

                            <Route>
                                <Redirect to="/profile" />
                            </Route>
                            
                        </Switch>
                        
                    </div>
                </div>
            </section>
        </Router>
    )
}

export default Profile
