import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <section className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" href="#">
                    <img style={{ height: '50px'}} src={logo} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item active ">
                            <Link to='/home' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/order/:title' className="nav-link">Customar</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/allServicesList' className="nav-link">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link">
                                <button className="brandBtn">Login</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;