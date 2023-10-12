import React, { useEffect, useState } from 'react';
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='px-3 md:px-0 hidden md:block'>
            <h1 className="text-2xl font-semibold">All Categories </h1>
            <div>
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className='my-2 flex flex-col text-[#9F9F9F]'>{category.name}</Link>)
                }
            </div>
            <div className='my-8 text-sm flex flex-col gap-y-2 items-center'>
                <div>
                    <img src={img1} alt="" className='mx-auto'/>
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                </div>
                <div>
                    <img src={img2} alt="" className='mx-auto'/>
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                </div>
                <div>
                    <img src={img3} alt="" className='mx-auto'/>
                    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;