import React from 'react';
import Header from '../Shared/Header';
import RightSideNav from '../Shared/RightSideNav';
import { useLoaderData, useParams } from 'react-router-dom';

const NewsDetails = () => {
    const newsDetails = useLoaderData();
    const {id} = useParams();

    const detail = newsDetails.find(detail => detail._id === id);
    console.log(detail)

    

    return (
        <div>
            <Header/>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-12'>
                <div className='col-span-3'>
                        <div className='flex flex-col gap-y-2'>
                            <h2 className='text-xl font-semibold'>{detail?.title}</h2>
                            <img src={detail.image_url} alt="" />
                            <p>{detail.details}</p>
                        </div>
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;