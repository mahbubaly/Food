import React from 'react';
import logo from '../images/logo .png'
import './Styles/Style.css'
import { Link } from 'react-router-dom';
import Items from './Items';



const Header = () => {
    return (
        <>
            <div className=' header bg-black'>
                <div className='container mx-auto  '>
                    <div className='p-6 flex justify-between items-center'>

                        <div className="logo">
                            <img src={logo} className='' alt="" />

                        </div>

                        <div className="nav flex gap-14  items-center">
                            <Link className='text-white text-lg hover:text-primary'>Home</Link>
                            <Link className='text-white text-lg hover:text-primary'>About</Link>
                            <Link className='text-white text-lg hover:text-primary'>Menue</Link>
                            <Link className='text-white text-lg hover:text-primary'>Blog</Link>
                            <Link className='text-white text-lg hover:text-primary'>Contact us</Link>
                            <Link className='text-black text-[16px] font-bold text-center  '><button className='rounded-3xl p-3 btn-primary'>Get Started</button></Link>

                        </div>
                    </div>


                </div>
                <hr />


                {/* Section 2  */}

                <div className='container mx-auto  '>
                    <div className='grid grid-cols-2 2xl:gap-36 gap-10  text-white lg:pt-20 items-center p-20 ' >
                        <div className='mb-[476px]'>
                            <h1 className='xl:text-[64px] lg:text-[48px]   w-full'>Just like grandma used to make</h1>

                        </div>
                        <div className='mb-[476px]'>
                            <h1 className='text-2xl '>It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your goals.</h1>
                            <Link className='text-black text-[18px] font-bold text-center '><button className='rounded-3xl  p-4 justify-center items-center btn-primary my-12 '>Explore All</button></Link>

                        </div>
                    </div>
                </div>





            </div>

            <Items />

        </>
    );
};

export default Header;