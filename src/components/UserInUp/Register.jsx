import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { AuthContext } from '../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { updateProfile } from 'firebase/auth';



const Register = () => {

    const {createUser} = useContext(AuthContext)

    const [success, setSuccess] =useState('')
    const [error, setError] =useState('')


    const handleRegister = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSuccess('')
        setError('')
        console.log(name,email,password)
        createUser(email, password)
        .then(result =>{
            console.log("Registered !!")
            setSuccess(Swal.fire({
                icon: 'success',
                title: 'Success !!',
                text: 'Successfully Registered !!'
              }))
              updateProfile(result.user , {
                displayName :  name, photoURL : photoUrl    
              })
        })
        .catch(error =>{
            console.log(error.message)
            setError(Swal.fire({
                icon: 'error',
                title: 'Found Error !!',
                text: `${error.message}`
              }))
        })

        e.target.reset()
    }
    return (
        <div className=''>
            <Helmet><title>Registration</title></Helmet>
            <Navbar/>
            <div className='bg-slate-200 rounded-lg max-w-md my-12  mx-auto p-8 '>
                <h1 className="text-center text-xl font-semibold my-6">Create Account</h1>
                <form onSubmit={handleRegister} className='flex flex-col gap-3 '>
                    <input type="text" name='name' placeholder="Enter Username" className="input input-bordered w-full " required />
                    <input type="text" name='photoUrl' placeholder="Photo Url ..." className="input input-bordered w-full " required />
                    <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered w-full " required />
                    <input type="password" name='password' placeholder="Enter Your password" className="input input-bordered w-full " />
                    <button className="btn bg-gray-500 text-white hover:text-black mb-12 mt-4">Register</button>
                    
                    <p>Have Account ? <Link to={'/login'}  className='text-blue-800'>Log In </Link> </p>
                </form>

            </div>
        </div>
    );
};

export default Register;