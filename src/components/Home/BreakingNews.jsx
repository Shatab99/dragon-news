import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className='flex my-8 px-3 md:px-0'>
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} gradient={200}>
                {
                    news.map(title => <p className='mr-12'>{title.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;