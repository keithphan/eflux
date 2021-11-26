import React from 'react'

export const Address = ({ address, setSelectedAddress, isActive, index }) => {
    
    const handleEdit = () => {
        setSelectedAddress({ ...address, index: index });

    }

    return (
        <li className={isActive ? "active" : ''}>
            <span className="icon"><i className="fas fa-check-circle"></i></span>
            <div className="address-text">
                <h6>{ address.name }</h6>
                <p className="address">{`${address.address}, ${address.suburb} ${address.zip}, ${address.state}, ${address.country}`}</p>
            </div> 
            <div className="edit-delete-btn">
                <button className="edit" type="button" data-toggle="modal" data-target="#address-edit" onClick={handleEdit}><i className="fas fa-edit"></i></button>
                <button className="delete"><i className="fas fa-trash-alt"></i></button>
            </div>   
        </li>
    )
}
