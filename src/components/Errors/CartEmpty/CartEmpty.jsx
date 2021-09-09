import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';

function CartEmpty({cartItems}) {
    return (
        <>
            {cartItems.length > 0 ? 
                <Redirect to="/" />
            :
                <section className="error-page text-center">
                    <div className="container">
                        <h3>Empty Cart</h3>
                        <p>It looks like nothing in your cart.</p>
                        <Link to="/" className="backhome">Back Home</Link>
                    </div>
                </section>
            }
        </>
        
    )
}

export default CartEmpty
