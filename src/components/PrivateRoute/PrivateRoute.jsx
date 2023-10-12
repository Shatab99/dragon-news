import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Waveform } from '@uiball/loaders'





const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='absolute left-[45%] top-[40%]'>
            <Waveform
                size={40}
                lineWeight={3.5}
                speed={1}
                color="black"
            />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;