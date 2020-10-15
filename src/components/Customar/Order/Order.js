import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { title } = useParams();
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Order Successfully, Done!');
                    history.push('/servicesList')
                }
            })
    }
    return (
        <section className="order-container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="ml-5">
                        <div className="d-flex justify-content-between">
                            <h2>Order</h2>
                            <div className="d-flex">
                                <img style={{ height: '40px', width: '40px' }} className="img-circle mr-2" src={loggedInUser.image} alt="" />
                                <h4>{loggedInUser.name}</h4>
                            </div>
                        </div>
                        <hr />
                        <form className="mt-5 py-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input ref={register({ required: true })} type="text" name='name' id="name" defaultValue={loggedInUser.name} className="form-control p-4" placeholder="Your name / Company's name" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input ref={register({ required: true })} type="email" name='email' id='email' defaultValue={loggedInUser.email} className="form-control p-4" placeholder="Your email" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input ref={register({ required: true })} type="text" name='title' id="title" defaultValue={title} className="form-control p-4" placeholder="Title" />
                                {errors.title && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea ref={register({ required: true })} name="description" id='description' className="form-control p-4" id="" cols="30" rows="5" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam molestiae repellendus. Ratione maiores animi saepe iste reprehenderit voluptatibus. Sequi!" placeholder="Description"></textarea>
                                {errors.description && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="row form-group">
                                <div className="col">
                                    <input ref={register} type="number" name="price" id='price' className="form-control p-4" placeholder="Price" />
                                </div>
                                <div className="col">
                                    <input ref={register} type="file" id="file" name="file" className="form-control p-4" placeholder="Upload project file" />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="brandBtn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;