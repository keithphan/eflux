import React from 'react'
import $ from 'jquery';
import { Link } from 'react-router-dom';

function AdminModal() {

    const handleOpenForm = (e) => {
        e.preventDefault();
        $('#login-area').addClass('open-form');
    }

    return (
        <div className="modal fade" id="useradmin1" tabIndex="-1" aria-labelledby="useradmin1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="header-top-action-dropdown">
                            <ul>
                                <li className="signin-option">
                                    <a onClick={(e) => handleOpenForm(e)} href="/" data-dismiss="modal"><i className="fas fa-user mr-2"></i>Sign In</a>
                                </li>
                                <li className="site-phone"><a href="tel:000-000-000"><i className="fas fa-phone"></i> 000 000 000</a></li>
                                <li className="site-help">
                                    <Link to="/" ><i className="fas fa-question-circle"></i> Help & More</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminModal
