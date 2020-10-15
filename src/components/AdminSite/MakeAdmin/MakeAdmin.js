import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Customar/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('email', info.email);

        fetch('https://cryptic-shore-23790.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }

    return (
        <section className="">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="ml-5">
                        <div className="d-flex justify-content-between">
                            <h2>Add Admin</h2>
                            <div className="d-flex">
                                <img style={{ height: '40px', width: '40px' }} className="img-circle mr-2" src={loggedInUser.image} alt="" />
                                <h4>{loggedInUser.name}</h4>
                            </div>
                        </div>
                        <hr />
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Make Admin email</label>
                                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter make Admin email" />
                                </div>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;