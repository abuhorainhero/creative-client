import React, { useEffect, useState } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import feedback1 from '../../../images/customer-1.png';
import feedback2 from '../../../images/customer-2.png';
import feedback3 from '../../../images/customer-3.png';


const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/feedbacks')
        .then(res => res.json())
        .then(data => {
            data.slice(0, 5)
            setFeedbacks(data);
        })
    }, [])

    return (
        <section className="container my-5 py-5">
            <h2 className="text-center">Clients <span className="text-success">Feedback</span></h2>
            <div className="row mt-5">
                {
                    feedbacks.map(data => <FeedbackCard key={data._id} feedback={data}></FeedbackCard>)
                }
            </div>
        </section>
    );
};

export default Feedback;