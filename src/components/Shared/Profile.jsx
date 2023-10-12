import React from 'react';
import Navbar from './Navbar';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log("logged out")

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <Navbar />
            <div className='max-w-md mx-auto border-dashed bg-slate-200 p-6 rounded-lg flex flex-col items-center '>
                <h1 className='text-center text-3xl font-semibold mb-3'>{user.displayName}</h1>
                <img src={user.photoURL} alt="invalid Url npm run dev
                " />
                <p className='my-2 text-green-700 font-semibold'>{user.email}</p>
                <button onClick={handleLogout} className='btn btn-small my-6 bg-red-800 text-white hover:text-black '>logout</button>
            </div>
        </div>
    );
};

export default Profile;