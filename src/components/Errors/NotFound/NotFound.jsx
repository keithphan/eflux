import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <section className="error-page text-center">
            <div className="container">
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <p>It looks like nothing was found at this location.</p>
                <Link to="/" className="backhome">Back Home</Link>
            </div>
        </section>
    )
}

export default NotFound
