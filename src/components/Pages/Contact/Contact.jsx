import React from 'react'

function Contact() {
    return (
        <section className="contact-section section-ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="contact-info-wrapper">
                                <div className="contact-info">
                                    <h4>Get In Touch</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur quibusdam enim expedita sed nesciunt incidunt </p>
                                    <ul className="contact-details">
                                        <li>
                                            <span className="title">Address</span>
                                            <span className="desc">795 South Park Avenue, Door 6 Wonderland, CA 94107, Australia</span>
                                        </li>
                                        <li>
                                            <span className="title">Phone</span>
                                            <span className="desc">+440 875369208 - Office <br/> +440 353363114 - Fax</span>
                                        </li>
                                        <li>
                                            <span className="title">Email</span>
                                            <span className="desc">support@sitename.com <br/> info@sitename.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact-form-area">
                                <form action="#" className="contact-form">
                                    <div className="input-item">
                                        <input type="text" name="name" placeholder="Full Name"/>
                                        <i className="fas fa-user"></i>
                                    </div>

                                    <div className="input-item">
                                        <input type="text" name="phone" placeholder="Your Phone Number"/>
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>

                                    <div className="input-item">
                                        <input type="email" name="email" placeholder="Email Address"/>
                                        <i className="fas fa-envelope"></i>
                                    </div>

                                    <div className="input-item">
                                        <input type="text" name="website" placeholder="Your Website"/>
                                        <i className="fas fa-globe"></i>
                                    </div>

                                    <div className="input-item">
                                        <textarea name="message" placeholder="Type Here Message"></textarea>
                                        <i className="fas fa-paper-plane"></i>
                                    </div>
                                    <div>
                                        <button type="submit" className="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Contact
