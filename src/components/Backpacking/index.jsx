import React from 'react';
import Fall from '../../assets/fall.png';

const Backpacking = () => {
    return (
        <div className='container relative mx-auto px-10 mt-[-180px] py-24 flex flex-col gap-10'>
            <div className='z-10 flex justify-between items-center'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-semibold text-[32px] leading-[39.01px] text-[#000000]'>Fall into travel</h2>
                    <p className='font-normal text-[16px] leading-[19.5px] text-[#000000]'>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools <br /> to get you to your destination.</p>
                </div>
                <div>
                    <button className='w-[80px] h-[40px] gap-[10px] border rounded-md font-medium text-[14px] leading-[17.07px] text-[#112211]'>See All</button>
                </div>
            </div>
            <div className='flex justify-between gap-10 items-center'>
                <div className='hidden md:block bg-[#8DD3BB] w-[552px] h-[424px] rounded-[20px] p-[20px]'>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-[40px] leading-[50.52px] text-[#112211]'>Backpacking <br /> Sri Lanka</h2>
                        <button className="w-[68px] h-[62px] gap-[4px] rounded-[8px] p-[8px] bg-[#FFFFFF] font-semibold text-[20px] leading-[24.38px] text-[#112211]"
                        >From <br /> $700</button>
                    </div>
                    <p className='font-normal text-[14px] leading-[17.07px] text-[#112211] mt-6'>Traveling is a unique experience as it's the best way to unplug from the <br /> pushes and pulls of daily life. It helps us to forget about our problems, <br /> frustrations, and fears at home. During our journey, we experience life in <br /> different ways. We explore new places, cultures, cuisines, traditions, and <br /> ways of living.</p>
                    <button className="mt-[120px] w-[504px] h-[48px] p-[8px_16px] gap-[4px] rounded-[4px] bg-[#FFFFFF] font-[Montserrat] font-medium text-[14px] leading-[17.07px] tracking-[0%] text-[#112211]"
                    >Book Flight</button>
                </div>
                <div>
                    <img src={Fall} alt="four"  />
                </div>
            </div>
        </div>
    );
}

export default Backpacking;
