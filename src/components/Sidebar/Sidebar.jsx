import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Sidebar() {
    const [categories, setCategories] = useState([])
    const api_url = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_ID
    
    useEffect(() => {
        axios.post(api_url + '/categories')
        .then((response) => {
            setCategories(response.data.data)
        })
    }, [api_url])

    return (
        <div className="catagory-sidebar-area">
            <div className="catagory-sidebar-area-inner">
                <div className="catagory-sidebar all-catagory-option">
                    <ul className="catagory-submenu">
                        {
                            categories.map((category, index) => {
                                return (
                                    <li key={category.id}>
                                        <a data-toggle="collapse" href={ "#catagory-widget" + (index + 1) } role="button" aria-expanded="false" aria-controls={ "catagory-widget" + (index + 1) }>{ category.name }<i className="fas fa-angle-down"></i></a>
                                        <ul className="catagory-submenu collapse" id={ "catagory-widget" + (index + 1) }>
                                            {
                                                category.descendants.map((subCategory) => {
                                                    return(
                                                        <li key={subCategory.id}><Link to={ '/shop/browse/' + subCategory.slug }>{subCategory.name}</Link></li>
                                                    )                                                  
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
