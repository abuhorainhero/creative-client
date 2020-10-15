import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import services1 from '../../../images/icons/service1.png';
import services2 from '../../../images/icons/service2.png';
import services3 from '../../../images/icons/service3.png';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            data.slice(0, 5);
            setServices(data);
        })
    }, []);

    return (
        <section className="container my-5 pt-5">
            <h2 className="text-center">Provide awesome <span className="text-success">services</span></h2>
        <div className="row mt-5">
            {
                services.map(data => <ServicesCard id={data.id} services={data}></ServicesCard>)
            }
        </div>
        </section>
    );
};

export default Services;