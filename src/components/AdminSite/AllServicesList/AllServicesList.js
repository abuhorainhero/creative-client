import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Customar/Sidebar/Sidebar';

const AllServicesList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-shore-23790.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => {
            setServiceList(data);
        })
    }, []);

    return (
        <section className="">
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <div className="ml-5">
                    <div className="d-flex justify-content-between">
                        <h2>All Service List</h2>
                        <div className="d-flex">
                            <img style={{height: '40px', width: '40px'}} className="img-circle mr-2" src={loggedInUser.image} alt=""/>
                            <h4>{loggedInUser.name}</h4>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-5">
                    <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Project Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    serviceList.map(List => <tr key={List._id}>
                                        <td >{List.name}</td>
                                        <td>{List.email}</td>
                                        <td>{List.title}</td>
                                        <td>{List.description}</td>
                                        <td >
                                            Done
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AllServicesList;