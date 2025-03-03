import React from 'react';
import StaysImg from '../../assets/stays.jpg';
import Gradient from '../../assets/gradient.png';
import FlightSearch from '../../components/FlightSearch';

const Stays = () => {
    return (
        <div className='relative w-full h-screen'>
            <div
                className='absolute inset-0 bg-cover bg-center z-0'
                style={{ backgroundImage: `url(${StaysImg})` }}
            ></div>
            <div
                className='absolute inset-0 bg-cover bg-center z-10 pointer-events-none'
                style={{ backgroundImage: `url(${Gradient})` }}
            ></div>

            <div className='absolute inset-0 flex flex-col top-32 left-10 gap-1 z-20 text-white pointer-events-none'>
                <p className='font-bold text-[45px] leading-[56.84px]'>Make your travel <br className='hidden md:block' /> whishlist, we’ll do  <br className='hidden md:block' /> the rest</p>
                <p className='font-medium text-[20px] leading-[24.38px]'>Special offers to suit your plan</p>
            </div>
            <div className='absolute md:top-[400px] sm:top-[650px] bottom-[-50px] left-[49%] transform -translate-x-1/2 z-50 w-full max-w-4xl px-4'>
                <FlightSearch />
            </div>
        </div>
    );
}

export default Stays;
