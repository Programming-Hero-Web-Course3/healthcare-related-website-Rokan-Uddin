import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';
const Register = () => {
    const {createUser}= useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email,data.password,data.name);
    };
    return (
        <div>
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
                <div>------or-------</div>
                <button className='btn-regular'>Register with google</button>
            </div>
        </div>
    );
};

export default Register;