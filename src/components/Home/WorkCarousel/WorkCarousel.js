import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './WorkCarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';


const WorkCarousel = () => {
    return (
        <section className="carousel-container my-5 py-5">
            <h2 className="text-white text-center">Here are some of <span className="text-success">our works</span></h2>
            <div className="my-5">
                <Carousel>
                    <div>
                        <img src={carousel1} alt="" />
                        <p className="legend">Carousel 1</p>
                    </div>
                    <div>
                        <img src={carousel2} alt="" />
                        <p className="legend">Carousel 2</p>
                    </div>
                    <div>
                        <img src={carousel3} alt="" />
                        <p className="legend">Carousel 3</p>
                    </div>
                    <div>
                        <img src={carousel4} alt="" />
                        <p className="legend">Carousel 4</p>
                    </div> 
                    <div>
                        <img src={carousel5} alt="" />
                        <p className="legend">Carousel 5</p>
                    </div>
                    
                </Carousel>
            </div>
        </section>
    );
};

export default WorkCarousel;