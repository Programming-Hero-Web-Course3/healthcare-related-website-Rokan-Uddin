import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,signInUsingEmailPassword}= useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInUsingEmailPassword(data.email,data.password);
    };
    return (
        <div>
              <div className="container d-flex justify-content-center align-items-center mt-5">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Email" {...register("email", {required:true})} />
                    <input type="password" placeholder="Password" {...register("password", { required: true })} />
                    {errors.email &&  <span className="error">This field is required</span>}
                    
                    <input type="submit" />
                </form>
            </div>
            <div>
                <h2>Please Login</h2>
                <p>New User?</p>
                <Link to='/register'>Register</Link>
                <div>--------or-------</div>
                <button onClick={signInUsingGoogle}  className="btn-regular" >Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;