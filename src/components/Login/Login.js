import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,signInUsingEmailPassword,error}= useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri=  location.state?.from || '/home';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInUsingEmailPassword(data.email,data.password,history,redirect_uri);
    };
    // send history,redirect_uri to signInUsingGoogle such that redirect to the target page after successfully login
     const handleGoogleSignIn=() =>{
        signInUsingGoogle(history,redirect_uri);
    }
    return (
        <div className="mb-5">
            <h1 className="mt-3">Login Form</h1>
              <div className="container d-flex justify-content-center align-items-center mt-5">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Email" {...register("email", {required:true})} />
                    <input type="password" placeholder="Password" {...register("password", { required: true })} />
                    {errors.email &&  <span className="error">This field is required</span>}
                    {error && <span className="error">{error}</span>}
                    <input type="submit" />
                </form>
            </div>
            <div>
                <p>New User?</p>
                <Link to='/register'>   Register</Link>
                <div>-----------------or--------------</div>
                <button onClick={handleGoogleSignIn} className="google-btn mt-2" >
                <img className="logo" 
                     src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" 
                     alt="" />
                Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;