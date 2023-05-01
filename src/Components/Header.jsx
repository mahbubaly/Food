import React, { useState } from 'react';
import logo from '../images/logo .png'
import './Styles/Style.css'
import { Link } from 'react-router-dom';
import Items from './Items';
import './Styles/Style.css'

import { BeakerIcon, XMarkIcon, Bars4Icon } from '@heroicons/react/24/solid'



const Header = () => {

    const [open, setOpen] = useState(false)




    return (
        <>
            <div className=' header bg-black'>
                <div className='container mx-auto  '>
                    <div className='p-6 flex justify-between items-center'>



                        {/* Menu bar */}

                        <div className='lg:hidden' onClick={() => setOpen(!open)}>
                            <span>
                                {
                                    open === true ? <XMarkIcon className="h-10 w-10 text-primary" /> : <Bars4Icon className="h-10 w-10 text-primary" />
                                }
                            </span>
                            <div className={`${open ? 'bg-black text-primary p-6  left-0 pl-3' : '-left-96'
                                } absolute flex flex-col duration-1000 gap-3`}>


                                <Link className='text-white text-lg hover:text-primary'>Home</Link>
                                <Link className='text-white text-lg hover:text-primary'>About</Link>
                                <Link className='text-white text-lg hover:text-primary'>Menue</Link>
                                <Link className='text-white text-lg hover:text-primary'>Blog</Link>
                                <Link className='text-white text-lg hover:text-primary'>Contact us</Link>
                                <Link className=''><button className='btn-all text-black  font-bold text-[16px]'>Get Started</button></Link>

                            </div>

                        </div>


                        {/* Logo */}

                        <div className="logo">
                            <img src={logo} className='' alt="" />

                        </div>
                        {/* Nav */}

                        <div className='lg:block hidden'>
                            <div className="nav flex gap-14  items-center ">
                                <Link className='text-white text-lg hover:text-primary'>Home</Link>
                                <Link className='text-white text-lg hover:text-primary'>About</Link>
                                <Link className='text-white text-lg hover:text-primary'>Menue</Link>
                                <Link className='text-white text-lg hover:text-primary'>Blog</Link>
                                <Link className='text-white text-lg hover:text-primary'>Contact us</Link>
                                <Link className=''><button className='btn-all text-black  font-bold text-[16px]'>Get Started</button></Link>

                            </div>
                        </div>
                    </div>


                </div>
                <hr />


                {/* Section 2  */}

                <div className='container mx-auto  '>





                    <div className='grid lg:grid-cols-2 grid-cols-1 2xl:gap-36 lg:gap-10 gap-5  text-white
                     lg:p-20 items-center p-5 ' >
                        <div className='lg:mb-[476px]  mb-11'>
                            <h1 className='xl:text-[64px] lg:text-[48px]  text-2xl w-full'>Just like grandma used to make</h1>

                        </div>
                        <div className='mb-[476px]'>
                            <h1 className='text-2xl '>It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your goals.</h1>
                            <Link className='text-black text-[18px] font-bold text-center '><button className='btn-all text-black mt-[25px] font-bold text-[16px] my-12 '>Explore All</button></Link>

                        </div>
                    </div>
                </div>





            </div>

            <Items />

        </>
    );
};

export default Header;