import React from 'react'

function SearchModal() {
    return (
        <div className="modal fade" id="search-select-id" tabIndex="-1" aria-labelledby="search-select-id" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="select-search-option">
                        <div className="flux-custom-select">
                            <select>
                              <option value="0">Select Catagory</option>
                              <option value="1">Vegetables</option>
                              <option value="2">Fruits</option>
                              <option value="3">Salads</option>
                              <option value="4">Fish & Seafood</option>
                              <option value="5">Fresh Meat</option>
                              <option value="6">Health Product</option>
                              <option value="7">Butter & Eggs</option>
                              <option value="8">Oils & Venegar</option>
                              <option value="9">Frozen Food</option>
                              <option value="10">Jam & Honey</option>
                            </select>
                        </div>
                        <form action="#" className="search-form">
                            <input type="text" name="search" placeholder="Search for Products" />
                            <button className="submit-btn"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SearchModal
