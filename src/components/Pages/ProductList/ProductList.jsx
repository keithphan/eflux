import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import Product from '../../Product/Product';

function ProductList({setSelectedProduct, cartItems, addToCart, removeFromCart, updateCart}) {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const api_url = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_ID
    const { category } = useParams();

    useEffect(() => {
        axios.post(api_url + '/categories')
        .then((response) => {
            setCategories(response.data.data)
        })

        axios.post(api_url + '/products/' + category)
        .then((response) => {
            setProducts(response.data.data)
        })

    }, [category, api_url])

    return (
        <section className="page-content section-ptb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 sidebar order-lg-last">
                        <div className="theiaStickySidebar">
                            <div className="widget widget-head">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 data-toggle="collapse" href="#filtermain" role="button" aria-expanded="false" aria-controls="filtermain"><i className="fas fa-filter"></i> Filter</h6>
                                    <a href="product-list.html">Clear All</a>
                                </div>
                            </div>
                            <div className="widget-callapse" id="filtermain">
                                <div className="widget">
                                    <h4 className="widget-title d-none d-lg-block">Catagories</h4>
                                    <a className="widget-title d-lg-none" data-toggle="collapse" href="#scatagory-widget01" role="button" aria-expanded="false" aria-controls="scatagory-widget01">Catagories<i className="fas fa-angle-down"></i></a>

                                    <div className="widget-wrapper" id="scatagory-widget01">
                                        <ul className="catagory-menu collapse show" id="catagory-main">
                                            {
                                                categories.map((category, index) => {
                                                    return (
                                                        <li key={category.id}>
                                                            <a className="" data-toggle="collapse" href={ "#catagory-widget-s" + (index + 1) } role="button" aria-expanded="false" aria-controls={ "catagory-widget-s" + (index + 1) }>{ category.name }<span className="plus-minus"></span></a>
                                                            <ul className="catagory-submenu collapse show" id={ "catagory-widget-s" + (index + 1) }>
                                                                {
                                                                    category.descendants.map((subCategory) => {
                                                                        return(
                                                                            <li key={subCategory.id} className="checkbox-item">
                                                                                <input type="checkbox" />
                                                                                <span className="checkbox"></span>
                                                                                <span className="label">{ subCategory.name }</span>
                                                                            </li>
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

                                <div className="widget">
                                    <h4 className="widget-title d-none d-lg-block">Filter by Price</h4>
                                    <a className="widget-title d-lg-none" data-toggle="collapse" href="#scatagory-widget02" role="button" aria-expanded="false" aria-controls="scatagory-widget02">Filte by Price<i className="fas fa-angle-down"></i></a>

                                    <div className="widget-wrapper" id="scatagory-widget02">
                                        <div className="range-slider">
                                            <input type="text" className="js-range-slider"  />
                                            <input type="submit" className="submit" />
                                        </div>
                                    </div>
                                </div>

                                <div className="widget">
                                    <h4 className="widget-title d-none d-lg-block">Filter by Brand Name</h4>
                                    <a className="widget-title d-lg-none" data-toggle="collapse" href="#scatagory-widget03" role="button" aria-expanded="false" aria-controls="scatagory-widget03">Filte by Brand Name<i className="fas fa-angle-down"></i></a>

                                    <div className="widget-wrapper" id="scatagory-widget03">
                                    
                                    <div className="flux-custom-select">
                                            <select>
                                                <option >Select Brand</option>
                                                <option >Nesle</option>
                                                <option >Dano</option>
                                                <option >Fresh</option>
                                                <option >Uniliver</option>
                                                <option >Pepsi</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 order-lg-first">
                        <div className="row product-list">
                            {
                                products.map((product) => {
                                    return (
                                        <div key={product.id} className="col-sm-6 col-xl-4">
                                            <Product 
                                                cartItem={cartItems.find((item) => item.id === product.id)} 
                                                product={product} 
                                                setSelectedProduct={setSelectedProduct} 
                                                addToCart={addToCart}
                                                removeFromCart={removeFromCart}
                                                updateCart={updateCart}
                                            />
                                        </div>
                                    )
                                })
                            }
                            

                            <div className="col-12 text-center mt-4">
                                <button className="loadMore">Load More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList
