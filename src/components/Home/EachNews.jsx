import React from 'react';
import { Link } from 'react-router-dom';

const EachNews = ({ eachNews }) => {

    const { author, title, image_url, details , _id} = eachNews

    return (
        <>
            <div className='my-8'>
                {/* Header section */}
                <div className=' bg-slate-100 p-2 rounded-t-lg'>
                    <div className='flex gap-3 items-center'>
                        <img src={author.img} alt="" className='w-8 h-8 rounded-full' />
                        <div className='text-sm font-semibold'>
                            <h1>{author.name}</h1>
                            <p className='font-extralight'>{author.published_date}</p>
                        </div>

                    </div>
                </div>
                <h1 className='font-semibold'>{title}</h1>
                <img src={image_url} alt="" />
               
                    
                    {
                        details.length >200 ?  <p className='my-5'>{details.slice(0,200)} ....  <br />  <Link to={`/news/${_id}`} className='text-[#FF8C47]'>Read More</Link></p>  :
                        <p className='my-5'>{details} <Link to={`/news/${_id}`} className='text-[#FF8C47]'>Read More</Link></p>
                    }
                    
                    
                    
            </div>
        </>
    );
};

export default EachNews;