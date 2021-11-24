import React from 'react'

function AddAddressModal() {
    return (
        <div className="modal fade address-edit-box" id="address-add" tabIndex="-1" aria-labelledby="address-add" aria-hidden="true">
            <div className="modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>Add Your Address</h4>
                        <form action="#" className="address-form">
                            <div className="input-item">
                                <label>Address Type</label>
                                <input type="text" name="name" placeholder="Home" />
                            </div>
                            <div className="input-item">
                                <label>Address</label>
                                <input type="text" name="name" placeholder="2548 Broaddus Maple Court Avenue" />
                            </div>
                            <div className="input-item">
                                <label>City / Suburb</label>
                                <input type="text" name="name" placeholder="Melbourne" />
                            </div>

                            <div className="input-item">
                                <label>Zip Code</label>
                                <input type="text" name="name" placeholder="9847" />
                            </div>

                            <div className="input-item">
                                <label>State</label>
                                <div className="flux-custom-select state-custom-select">
                                    <select>
                                    <option value="New South Wales">New South Wales</option>
                                    <option value="Victoria">Victoria</option>
                                    <option value="Queesland">Queesland</option>
                                    <option value="South Australia">South Australia</option>
                                    <option value="Western Australia">Western Australia</option>
                                    <option value="Tasmania">Tasmania</option>
                                    <option value="North Territory">North Territory</option>
                                    <option value="Australian Capital Territory">Australian Capital Territory</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <button className="submit">Save</button>
                                <button data-dismiss="modal" className="cancel">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAddressModal
