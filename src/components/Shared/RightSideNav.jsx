import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase.config';

const RightSideNav = () => {
    const provider = new GoogleAuthProvider()

    const handleGoogle =()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            console.log('google', result);
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className='px-3 md:px-0'>
            <div className='px-3 md:px-0 mb-6'>
                <div className='p-3 space-y-2 border-dashed border-2 px-3'>
                    <h1 className="text-2xl font-semibold">Log In with</h1>
                    <div className='space-y-2 ' >
                        <button onClick={handleGoogle} className="btn btn-outline w-full">
                            <FaGoogle />
                            Log in with Google
                        </button>
                        <button className="btn btn-outline w-full">
                            <FaGithub />
                            Log in with Github
                        </button>
                    </div>
                </div>
            </div>

            <div className='px-3 md:px-0 mb-6'>
                <div className='p-3 space-y-2 border-dashed border-2 px-3'>
                    <h1 className="text-2xl font-semibold">Find Us On</h1>
                    <div className='space-y-2 ' >
                        <a href="" className='flex items-center gap-2'>
                            <FaFacebook />
                            Facebook
                        </a>
                        <a href="" className='flex items-center gap-2'>
                            <FaTwitter />
                            Twitter
                        </a>
                        <a href="" className='flex items-center gap-2'>
                            <FaInstagram />
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
            {/* Que zone */}
            <div className='bg-slate-200 gap-y-3 p-2 rounded-md flex flex-col '>
                <h1 className='text-xl font-semibold mb-3'>Q-zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;