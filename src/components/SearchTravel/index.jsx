import React from 'react';
import Flights from '../../assets/flights.png';
import Hotels from '../../assets/hotels.png';
import Plane from '../../assets/plane.svg';

const SearchTravel = () => {
  return (
    <div className='container'>
      <div className='flex flex-wrap justify-center gap-4'>
        <div className='relative w-full sm:w-[48%]'>
          <div>
            <img src={Flights} alt="Flights" className='w-full' />
          </div>
          <div className='absolute inset-x-0 bottom-0 flex flex-col items-center text-center p-4'>
            <h2 className='font-bold text-[40px] leading-[50.52px] text-[#FFFFFF]'>Flights</h2>
            <p className='font-normal text-[16px] leading-[19.5px] text-[#FFFFFF] mt-2'>
              Search Flights & Places Hire to our most popular destinations
            </p>
            <div className='mt-4'>
              <button className="flex items-center justify-center gap-2 rounded-[4px] w-[144px] h-[48px] font-[Montserrat] font-medium text-[14px] bg-[#8DD3BB] text-[#112211]">
                <img src={Plane} alt="Plane" />
                Show Flights
              </button>
            </div>
          </div>

        </div>
        <div className='relative w-full sm:w-[48%]'>
          <div>
            <img src={Hotels} alt="Hotels" className='w-full' />
          </div>
          <div className='absolute inset-x-0 bottom-0 flex flex-col items-center text-center p-4'>
            <h2 className='font-bold text-[40px] leading-[50.52px] text-[#FFFFFF]'>Hotels</h2>
            <p className='font-normal text-[16px] leading-[19.5px] text-[#FFFFFF] mt-2'>Search hotels & Places Hire to our most popular destinations</p>
            <div className='mt-4'>
              <button className="flex items-center justify-center gap-2 rounded-[4px] w-[144px] h-[48px] font-[Montserrat] font-medium text-[14px] bg-[#8DD3BB] text-[#112211]">
                <img src={Plane} alt="Plane" />
                Show Hotels
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchTravel;
