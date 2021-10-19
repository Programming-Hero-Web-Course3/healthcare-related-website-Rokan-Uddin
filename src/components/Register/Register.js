import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';
const Register = () => {
    const {createUser}= useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri=  location.state?.from || '/home';
    const { register, handleSubmit, formState: { errors } } = useForm();
    // send history,redirect_uri with registration data such than 
    // redirect to the target page after successfull registration 
    const onSubmit = data => {
        createUser(data.email,data.password,data.name,history,redirect_uri);
    };
    return (
        <div className="mb-5">
                <div className="container d-flex justify-content-center align-items-center mt-5">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" {...register("name", {required:true})} />
                    <input placeholder="Email" {...register("email", {required:true})} />
                    <input placeholder="Password" {...register("password", { required: true })} />
                    {errors.email &&  <span className="error">This field is required</span>}
                    
                    <input type="submit" />
                </form>
            </div>
            <div>
                <p>Already registered?</p>
                <Link to='/login'>Sign In</Link>
                <div>----------or-----------</div>
                <button className='btn-regular'>Register with google</button>
            </div>
        </div>
    );
};

export default Register;