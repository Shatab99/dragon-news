import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-5xl mx-auto font-poppins'>
            <Outlet/>   
        </div>
    );
};

export default Root;