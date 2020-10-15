import React from 'react';
import logo1 from '../../../images/logos/slack.png';
import logo2 from '../../../images/logos/google.png';
import logo3 from '../../../images/logos/uber.png';
import logo4 from '../../../images/logos/netflix.png';
import logo5 from '../../../images/logos/airbnb.png';


const Logo = () => {
    return (
        <section className="container my-5">
            <div className="row d-flex justify-content-around">
                <div className="col-md-2">
                    <img style={{height: '50px'}} src={logo1} alt="" className="img-fluid py-2" />
                </div>
                <div className="col-md-2">
                    <img style={{height: '50px'}}  src={logo2} alt="" className="img-fluid py-2" />
                </div>
                <div className="col-md-2">
                    <img style={{height: '50px'}} src={logo3} alt="" className="img-fluid py-2" />
                </div>
                <div className="col-md-2">
                    <img style={{height: '50px'}} src={logo4} alt="" className="img-fluid py-2" />
                </div>
                <div className="col-md-2">
                    <img style={{height: '50px'}} src={logo5} alt="" className="img-fluid py-2" />
                </div>
            </div>
        </section>
    );
};

export default Logo;