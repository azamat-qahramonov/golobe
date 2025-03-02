import React from 'react';
import Rectangle from '../../assets/rectangle.png';
import NavbarHome from '../../components/Navbar-home';
import Gradient from '../../assets/gradient.png';
import FlightSearch from '../../components/FlightSearch';

const Home = () => {
    return (
        <div className='relative w-full h-screen'>
            <div
                className='absolute inset-0 bg-cover bg-center z-0'
                style={{ backgroundImage: `url(${Rectangle})` }}
            ></div>
            <div
                className='absolute inset-0 bg-cover bg-center z-10 pointer-events-none'
                style={{ backgroundImage: `url(${Gradient})` }}
            ></div>

            <div className='relative top-0 left-0 w-full z-30'>
                <NavbarHome />
            </div>

            <div className='absolute inset-0 flex flex-col justify-center items-center gap-1 z-20 text-white text-center pointer-events-none'>
                <p className='font-bold text-[45px] leading-[90px]'>Helping Others</p>
                <p className='font-bold text-[80px] leading-[101px]'>Live & Travel</p>
                <p className='font-semibold text-[20px] leading-[24px]'>Special offers to suit your plan</p>
            </div>
            <div className='absolute md:top-[400px] sm:top-[650px] bottom-[-50px] left-[49%] transform -translate-x-1/2 z-50 w-full max-w-4xl px-4'>
                <FlightSearch />
            </div>
        </div>
    );
}

export default Home;
