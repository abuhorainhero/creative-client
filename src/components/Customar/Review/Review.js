import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = data => {
        fetch('https://cryptic-shore-23790.herokuapp.com/addFeedbacks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
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
                            <h2>Your Review</h2>
                            <div className="d-flex">
                            <img style={{height: '40px', width: '40px'}} className="img-circle mr-2" src={loggedInUser.image} alt=""/>
                            <h4>{loggedInUser.name}</h4>
                        </div>
                        </div>
                        <hr />
                            <div className="">
                                <form className="mt-5 py-5" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <input ref={register({ required: true })} type="text" name='name' id="name" defaultValue={loggedInUser.name} className="form-control p-4" placeholder="Your name" />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input ref={register({ required: true })} type="text" name='title' id="title" defaultValue='CEO, Manpol' className="form-control p-4" placeholder="Title" />
                                        {errors.title && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <textarea ref={register({ required: true })} name="description" id='description' className="form-control p-4" id="" cols="30" rows="5" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam molestiae repellendus. Ratione maiores animi saepe iste reprehenderit voluptatibus. Sequi!" placeholder="Description"></textarea>
                                        {errors.description && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                <button type="submit" className="brandBtn">Submit</button>
                            </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;