import React from 'react';
import './FeedbackCard.css';

const FeedbackCard = ({ feedback }) => {
    return (
        <div className='col-md-4 col-sm-6 col-12 my-3'>
            <div className="card p-3 feedback-card">
                <div className="card-body d-flex justify-content-around">
                    <div>
                        <img style={{ height: '50px', width: '50px' }} src={feedback.img} alt="" />
                    </div>
                    <div className='d-flex flex-column'>
                        <h5 className="card-title">{feedback.name}</h5>
                        <p>{feedback.title}</p>
                    </div>
                </div>
                <div className="card-text">{feedback.description}</div>
            </div>
        </div>
    );
};

export default FeedbackCard;