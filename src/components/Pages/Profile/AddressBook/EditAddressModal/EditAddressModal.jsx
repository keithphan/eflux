import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EditAddressModal({ selectedAddress, setAddresses, token }) {
    const [address, setAddress] = useState(selectedAddress)
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setErrors({})
        setAddress(selectedAddress)
    }, [selectedAddress])

    const handleSelect = (e) => {
        setAddress( (prev) => ({
            ...prev,
            'state': e.target.value
        }))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress( (prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const api_url = process.env.REACT_APP_API_URL

        axios.post(api_url + 'updateAddresses', {
            companyId: process.env.REACT_APP_API_ID,
            address: address,
        },{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setErrors({})
            setAddresses(response.data)
            alert('Updated successfully')
        }).catch((error) => {
            setErrors(error.response.data.errors)
        })
    }

    return (
        <div className="modal fade address-edit-box" id="address-edit" tabIndex="-1" aria-labelledby="address-edit" aria-hidden="true">
            <div className="modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>Edit Your Address</h4>
                        <form action="#" className="address-form">
                            <div className="input-item">
                                <label>Address Type</label>
                                <input type="text" name="name" placeholder="Home" value={address.name} onChange={handleChange}/>
                                <span style={{ color: "red" }}>{ errors['address.name'] }</span>
                            </div>
                            <div className="input-item">
                                <label>Address</label>
                                <input type="text" name="address" placeholder="123 Lonsdale St" value={address.address} onChange={handleChange}/>
                                <span style={{ color: "red" }}>{ errors['address.address'] }</span>
                            </div>
                            <div className="input-item">
                                <label>City / Suburb</label>
                                <input type="text" name="suburb" placeholder="Melbourne" value={address.suburb} onChange={handleChange}/>
                                <span style={{ color: "red" }}>{ errors['address.suburb'] }</span>
                            </div>

                            <div className="input-item">
                                <label>Zip Code</label>
                                <input type="text" name="zip" placeholder="9847" value={address.zip} onChange={handleChange}/>
                                <span style={{ color: "red" }}>{ errors['address.zip'] }</span>
                            </div>

                            <div className="input-item">
                                <label>State</label>
                                <div>
                                    <select name="state" className="state-custom-select" value={address.state} onChange={handleSelect}>
                                        <option value="New South Wales">New South Wales</option>
                                        <option value="Victoria">Victoria</option>
                                        <option value="Queensland">Queensland</option>
                                        <option value="South Australia">South Australia</option>
                                        <option value="Western Australia">Western Australia</option>
                                        <option value="Tasmania">Tasmania</option>
                                        <option value="North Territory">North Territory</option>
                                        <option value="Australian Capital Territory">Australian Capital Territory</option>
                                    </select>
                                </div>
                                <span style={{ color: "red" }}>{ errors['address.state'] }</span>
                            </div>
                            
                            <div>
                                <button className="submit" onClick={handleSubmit}>Save</button>
                                <button data-dismiss="modal" className="cancel">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditAddressModal
