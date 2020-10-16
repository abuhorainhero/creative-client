import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCard.css';

const ServicesCard = ({ services }) => {

    return (
        <div className='col-md-4 my-3'>
            <Link to={`/order/${services.title}`}>
                <div className="card services-card d-flex flex-column align-items-center py-5">
                    <img src={services.img} alt="" className="img-fluid" style={{ height: '50px', width: '50px' }} />
                    <div className="card-body">
                        <h4 className="card-title">{services.title}</h4>
                        <p className="card-text">{services.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServicesCard;