import React from 'react';
import Mailbox from '../../assets/mailbox.png';

const Contact = () => {
    return (
       <div className='py-10 md:py-20 px-4 sm:px-6 lg:px-8'>
         <section className='bg-[#D3EDE4] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between w-full max-w-[1232px] mx-auto h-auto md:h-[305px] items-center gap-8'>
            <div className='w-[350px] md:w-[1232px]'>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>Subscribe Newsletter</h2>
                <p className='text-lg font-semibold mb-2'>The Travel</p>
                <p className='text-gray-600 mb-6'>
                    Get inspired! Receive travel discounts, tips and behind the scenes stories.
                </p>
                <form className='flex flex-col sm:flex-row items-center gap-4'>
                    <input
                        type='email'
                        placeholder='Your email address'
                        className='p-3 rounded-lg border border-gray-300 w-full sm:w-[300px] focus:outline-none'
                    />
                    <button
                        type='submit'
                        className='bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition w-full sm:w-auto'
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            <div className='w-full md:w-auto'>
                <img
                    src={Mailbox}
                    alt='Mailbox illustration'
                    className='max-w-[200px] sm:max-w-[300px] md:max-w-[400px] mx-auto'
                />
            </div>
        </section>
       </div>
    );
};

export default Contact;