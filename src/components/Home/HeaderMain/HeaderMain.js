import React from 'react';
import frameImage from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main className="container my-5">
            <div className="row">
                <div className="col-md-5 mt-5">
                    <h1>Let's Grow Your Brand To The <br /> Next Level</h1>
                    <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita possimus non consequatur, dolorum minima ipsa! Aut nam quo sed repellendus!</p>
                    <button className="brandBtn">Hire me</button>
                </div>
                <div className="col-md-7">
                    <img src={frameImage} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;