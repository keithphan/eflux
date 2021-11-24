import React, { useEffect } from 'react'
import AddAddressModal from './AddAddressModal/AddAddressModal'
import EditAddressModal from './EditAddressModal/EditAddressModal'

function AddressBook({ addresses }) {
    useEffect(() => {
        window.stateCustomSelect();
    }, [])
    return (
        <>
            <div className="col-lg-9">
                <div className="dashboard-body">
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
                                            <h6>Office</h6>
                                            <p className="address">{ address }</p>
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
            <EditAddressModal />
            <AddAddressModal />
        </>
    )
}

export default AddressBook
