import React from 'react';
import Logo from '../../assets/logoFooter.svg';
import Socials from '../../assets/socials.svg';
import Contact from '../Contact';

const Footer = () => {
    return (
        <div className='bg-[#8DD3BB] pb-10 relative'>
            <div className='relative'>
                <div className='absolute py-20 md:py-10 -top-[190px] left-1/2 transform -translate-x-1/2'>
                    <Contact />
                </div>
            </div>

            <div className='container mx-auto flex flex-col gap-6 pt-[440px] md:pt-[260px]'>
                <div className='grid grid-cols-2 md:grid-cols-6 justify-between flex-wrap items-center gap-8'>
                    <div className='flex flex-col gap-8'>
                        <img className='w-[120px] h-[40px]' src={Logo} alt="Logo" />
                        <img className='w-[116px] h-[20px]' src={Socials} alt="Social Icons" />
                    </div>
                    <div>
                        <h3 className='font-bold mb-2'>Our Destinations</h3>
                        <ul className='space-y-1'>
                            <li>Canada</li>
                            <li>Alaska</li>
                            <li>France</li>
                            <li>Iceland</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold mb-2'>Our Activities</h3>
                        <ul className='space-y-1'>
                            <li>Northern Lights</li>
                            <li>Cruising & sailing</li>
                            <li>Multi-activities</li>
                            <li>Kayaking</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold mb-2'>Travel Blogs</h3>
                        <ul className='space-y-1'>
                            <li>Bali Travel Guide</li>
                            <li>Sri Lanka Travel Guide</li>
                            <li>Peru Travel Guide</li>
                            <li>Bali Travel Guide</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold mb-2'>About Us</h3>
                        <ul className='space-y-1'>
                            <li>Our Story</li>
                            <li>Work with us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold mb-2'>Contact Us</h3>
                        <ul className='space-y-1'>
                            <li>Our Story</li>
                            <li>Work with us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
