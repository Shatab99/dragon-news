import React, { useContext, useState } from 'react';
import Navbar from '../Shared/Navbar';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';

import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { auth } from '../../firebase.config';


const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContext)
    const [succes, setSuccess] = useState('')
    const [error, setError] = useState('')
    const location = useLocation()

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(result => {
                console.log("Success")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then(result => {
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Success !!',
                    text: 'Successfully Logged In !!'
                }))

                //  navigate to actual destination
                navigate(location?.state ? location.state : '/')
            })

            .catch(error => {
                setError(
                    Swal.fire({
                        icon: 'error',
                        title: 'Found An Error !!',
                        text: `${error.message}`
                    })
                )
            })

        e.target.reset()
    }

    return (
        <div className=''>
            <Helmet><title>Log In</title></Helmet>
            <Navbar />
            <div className='bg-slate-200 rounded-lg max-w-md my-12  mx-auto p-8 '>
                <h1 className="text-center text-xl font-semibold my-6">Login to your account</h1>
                <form onSubmit={handleLogIn} className='flex flex-col gap-3 '>
                    <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered w-full " required />
                    <input type="password" name='password' placeholder="Enter Your password" className="input input-bordered w-full " />
                    <button className="btn bg-gray-500 text-white hover:text-black mb-12 mt-4">login</button>
                    <p>Don't Have Account ? <Link to={'/register'} className='text-blue-800'>Register</Link> </p>
                </form>
                <button onClick={handleGoogle} className="btn btn-outline w-full mt-5">
                    <FaGoogle />
                    Log in with Google
                </button>

            </div>
        </div>
    );
};

export default Login;