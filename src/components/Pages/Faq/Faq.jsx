import React from 'react'

function Faq() {
    return (
        <section className="faq-section section-ptb">
            <div className="container">
                <div className="faq-container">
                    <div className="accordion" id="faqaccordion">
                        <div className="faq">
                            <div className="faq-header" id="faq1">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <span className="icon">
                                        <i className="fas fa-plus"></i>
                                        <i className="fas fa-minus"></i>
                                    </span>
                                    What is Eflux?
                                </button>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="faq1" data-parent="#faqaccordion">
                                <div className="faq-body">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,</p>
                                </div>
                            </div>
                        </div>
                        <div className="faq">
                            <div className="faq-header" id="faq2">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span className="icon">
                                        <i className="fas fa-plus"></i>
                                        <i className="fas fa-minus"></i>
                                    </span>
                                    How to update application new features?
                                </button>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="faq2" data-parent="#faqaccordion">
                                <div className="faq-body">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,</p>
                                </div>
                            </div>
                        </div>
                        <div className="faq">
                            <div className="faq-header" id="faq3">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span className="icon">
                                        <i className="fas fa-plus"></i>
                                        <i className="fas fa-minus"></i>
                                    </span>
                                    How can i handle refund policy
                                </button>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="faq3" data-parent="#faqaccordion">
                                <div className="faq-body">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,</p>
                                </div>
                            </div>
                        </div>

                        <div className="faq">
                            <div className="faq-header" id="faq4">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    <span className="icon">
                                        <i className="fas fa-plus"></i>
                                        <i className="fas fa-minus"></i>
                                    </span>
                                    How to connect with the support to improve app experience
                                </button>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="faq4" data-parent="#faqaccordion">
                                <div className="faq-body">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
