import React from 'react';
import Flight from '../../assets/flight.svg';
import Bed from '../../assets/bed.svg';
import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className='container p-5 md:p-7 flex justify-between items-center'>
                <div className='hidden md:flex gap-8 items-center'>
                    <div className='flex flex-col gap-1 cursor-pointer group'>
                        <NavLink to={'/flights'}>
                            <div className='flex gap-1 items-center'>
                                <img className='mt-[-4px]' src={Flight} alt="Flight" />
                                <p className='font-semibold text-[14px] leading-[17.07px] text-[#112211]'>Find Flight</p>
                            </div>
                        </NavLink>
                        <div className='w-[107px] h-[5px] bg-[#8DD3BB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out'></div>
                    </div>
                    <div className='flex flex-col gap-1 cursor-pointer group'>
                        <NavLink to={'/stays'}>
                            <div className='flex gap-1 items-center'>
                                <img src={Bed} alt="Bed" />
                                <p className='font-semibold text-[14px] leading-[17.07px] text-[#112211]'>Find Stays</p>
                            </div>
                        </NavLink>
                        <div className='w-[107px] h-[5px] bg-[#8DD3BB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out'></div>
                    </div>
                </div>

                <div className='flex justify-center md:justify-start'>
                    <NavLink to='/'>
                        <img src={Logo} alt="Logo" className='w-[120px]' />
                    </NavLink>
                </div>

                <div className='flex items-center gap-3 md:gap-5'>
                    <button className='text-[#112211] font-montserrat font-semibold text-[14px] leading-[17.07px] rounded-[8px] w-[90px] h-[40px] md:w-[104px] md:h-[48px] flex justify-center items-center transition-all duration-300 hover:bg-[#112211] hover:text-[#FFFFFF]'>
                        Login
                    </button>
                    <button className='text-[#112211] font-montserrat font-semibold text-[14px] leading-[17.07px] rounded-[8px] w-[90px] h-[40px] md:w-[104px] md:h-[48px] flex justify-center items-center transition-all duration-300 hover:bg-[#112211] hover:text-[#FFFFFF]'>
                        Sign up
                    </button>
                </div>
            </div>

            <div className='flex md:hidden flex-col items-center gap-4 p-5'>
                <div className='flex gap-4'>
                    <NavLink to='/flights'>
                        <div className='flex gap-1 items-center'>
                            <img src={Flight} alt="Flight" />
                            <p className='font-semibold text-[14px] text-[#112211]'>Find Flight</p>
                        </div>
                    </NavLink>
                    <NavLink to='/stays'>
                        <div className='flex gap-1 items-center'>
                            <img src={Bed} alt="Bed" />
                            <p className='font-semibold text-[14px] text-[#112211]'>Find Stays</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
