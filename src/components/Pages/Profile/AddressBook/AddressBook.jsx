import React, { useState } from 'react'
import AddAddressModal from './AddAddressModal/AddAddressModal'
import { Address } from './Address/Address';
import EditAddressModal from './EditAddressModal/EditAddressModal'

function AddressBook({ addresses, setAddresses, token }) {
    const [selectedAddress, setSelectedAddress] = useState({
        name: "",
        address: "",
        suburb: "",
        zip: "",
        state: "",
        country: "",
    });

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
                                        <Address 
                                            address={address} 
                                            setSelectedAddress={setSelectedAddress} 
                                            key={index}
                                            index={index} 
                                            isActive={ addresses.default === index }
                                            token={token}
                                            setAddresses={setAddresses}
                                        />
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

            <EditAddressModal selectedAddress={selectedAddress} setAddresses={setAddresses} token={token}/>
            <AddAddressModal setAddresses={setAddresses} token={token}/>
        </>
    )
}

export default AddressBook
