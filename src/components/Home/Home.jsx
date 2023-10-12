import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import Navbar from '../Shared/Navbar';
import LeftSideNav from '../Shared/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav';
import BreakingNews from './BreakingNews';
import { Helmet } from 'react-helmet-async';
import EachNews from './EachNews';

const Home = () => {
    const [news, setNews] =  useState([])

    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])

    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav/>
                </div>
                <div className='md:col-span-2'>
                    <h1 className="text-center mb-2">Dragon News Home </h1><hr />
                    <div className='px-2 md:px-0'>
                        {
                            news.map(eachNews => <EachNews key={eachNews.id} eachNews={eachNews} ></EachNews>)
                        }
                    </div>
                </div>
                <div className=''>
                    <RightSideNav />
                </div>
            </div>

        </div>
    );
};

export default Home;