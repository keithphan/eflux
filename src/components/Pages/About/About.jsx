import React from 'react'

function About() {
    return (
        <section className="about-section section-ptb">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 order-lg-last pr-xl-5">
                        <div className="about-content mb-4 mb-lg-0 pr-lg-5">
                            <h3>Who We Are</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur quibusdam enim expedita sed nesciunt incidunt accusamus adipisci officia libero laboriosam!</p>
                            <p>Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Duis sed odio sit amet nibh vultate cursus a sit amet mauris.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 order-lg-first">
                        <div className="about-image">
                            <img src="/images/about/01.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
