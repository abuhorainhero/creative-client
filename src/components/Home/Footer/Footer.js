import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Let us handle your <br /> projects, Professionally.</h2>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur eligendi veniam quisquam qui sit architecto incidunt sapiente officiis! Nihil? Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reprehenderit?</p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control p-4" placeholder="Your Email Address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control p-4" placeholder="Your name / Company's name" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="" cols="30" rows="10" className="form-control p-4" placeholder='Your message'></textarea>
                            </div>
                            <button className="brandBtn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className="text-center mt-5 py-5">Copyright Orange labs 2020</p>
        </section>
    );
};

export default Footer;