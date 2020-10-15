import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Customar/Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [icon, setIcon] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleFileChange = (e) => {
        const newIcon = e.target.files[0];
        setIcon(newIcon);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('icon', icon);
        formData.append('title', info.title);
        formData.append('description', info.description)

        fetch('http://localhost:5000/addService', {
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
                            <h2>Add Service</h2>
                            <div className="d-flex">
                                <img style={{ height: '40px', width: '40px' }} className="img-circle mr-2" src={loggedInUser.image} alt="" />
                                <h4>{loggedInUser.name}</h4>
                            </div>
                        </div>
                        <hr />
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Service Title</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Description</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="description" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam molestiae repellendus. Ratione maiores animi saepe iste reprehenderit voluptatibus. Sequi!" placeholder="Enter Description" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Upload a Icon</label>
                                    <input onChange={handleFileChange} type="file" className="form-control" name='file' id="file" placeholder="Picture" />
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

export default AddService;