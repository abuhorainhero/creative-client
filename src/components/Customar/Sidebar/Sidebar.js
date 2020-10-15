import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Sidebar.css';

const Sidebar = () => {
    const { title } = useParams();

    return (
        <div className='pt-3 pl-2 sidebar' style={{ height: '100vh' }}>
            <Link to='/'>
                <img style={{ height: '50px', width: '150px' }} src={logo} alt="" />
            </Link>
            <div className="pt-5 d-flex flex-column justify-content-between " >
                <ul>
                    <li>
                        <Link to={`/order/${title}`} className='text-dark'>
                            <span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/servicesList' className='text-dark'>
                            <span>Services List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/review' className='text-dark'>
                            <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/allServicesList' className='text-dark'>
                            <span>All Services List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/addServices' className='text-dark'>
                            <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/makeAdmin' className='text-dark'>
                            <span>Make Admin</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;