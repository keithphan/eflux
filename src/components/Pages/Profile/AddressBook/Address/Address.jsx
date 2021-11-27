import axios from 'axios';
import React from 'react'

export const Address = ({ address, setSelectedAddress, isActive, index, token, setAddresses }) => {
    
    const handleEdit = () => {
        setSelectedAddress({ ...address, index: index });

    }

    const handleChangeDefault = () => {
        const api_url = process.env.REACT_APP_API_URL

        axios.post(api_url + 'changeDefaultAddress', {
            default: index,
            companyId: process.env.REACT_APP_API_ID
        },{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setAddresses(response.data)
        })
    }

    const handleDelete = () => {
        const api_url = process.env.REACT_APP_API_URL

        axios.post(api_url + 'deleteAddress', {
            address: {index: index},
            companyId: process.env.REACT_APP_API_ID
        },{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            if(response.data.message){
                alert(response.data.message)
            }else{
                setAddresses(response.data)
            }
        })
    }

    return (
        <li className={isActive ? "active" : ''}>
            <span className="icon" onClick={handleChangeDefault}><i className="fas fa-check-circle"></i></span>
            <div className="address-text">
                <h6>{ address.name }</h6>
                <p className="address">{`${address.address}, ${address.suburb} ${address.zip}, ${address.state}, ${address.country}`}</p>
            </div> 
            <div className="edit-delete-btn">
                <button className="edit" type="button" data-toggle="modal" data-target="#address-edit" onClick={handleEdit}><i className="fas fa-edit"></i></button>
                <button className="delete" onClick={handleDelete}><i className="fas fa-trash-alt"></i></button>
            </div>   
        </li>
    )
}
