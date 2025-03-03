import React from 'react';
import TogetherIMg from '../../assets/together.png';

const Together = () => {
    return (
        <div className='container relative mx-auto px-10 mt-[100px] py-32 flex flex-col gap-10'>
            <div className='z-10 flex justify-between items-center'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-semibold text-[32px] leading-[39.01px] text-[#000000]'>Let's go places together</h2>
                    <p className='font-normal text-[16px] leading-[19.5px] text-[#000000]'>Discover the latest offers and news and start planning your next trip with us.</p>
                </div>
                <div>
                    <button className='w-[80px] h-[40px] gap-[10px] border rounded-md font-medium text-[14px] leading-[17.07px] text-[#112211]'>See All</button>
                </div>
            </div>
            <div 
                className='w-full h-[486px] bg-cover bg-center'
                style={{ backgroundImage: `url(${TogetherIMg})` }}
            ></div>
        </div>
    );
}

export default Together;
