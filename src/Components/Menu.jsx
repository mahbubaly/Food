import React from 'react';
import './Styles/Style.css'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import pasta1 from '../images/Italiono Pasta.png'
import pasta2 from '../images/Italiono Pasta 2.png'
import pasta3 from '../images/Italiono Pasta 3.png'
import { Link } from 'react-router-dom';
import Service_section from './Service_section';

const Menu = () => {
    return (
        <>
            <div className='container mx-auto menu rounded-lg mt-32 px-[60px] py-[120px] bg-black text-white '>
                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[48px]'>Try our Menu.</h1>
                        <div className='flex gap-5'>
                            <ChevronLeftIcon className=" lg:w-[50px] lg:h-[50px] w-8 h-8 p-2 rounded-[50%] hover:bg-primary duration-500 bg-[#FFFFFF] text-black" />
                            <ChevronRightIcon className="lg:w-[50px] lg:h-[50px] w-8 h-8 p-2 rounded-[50%] hover:bg-primary duration-500 bg-[#FFFFFF] text-black" />

                        </div>

                    </div>
                </div>


                {/* menu section */}

                <div className='flex mt-[90px]'>
                    <div className='menu-items mr-[62px] text-center px-3 py-[30px] w-[190px]  box-menu hover:duration-700'>
                        <h1 className='text-lg text-center font-bold mt-7'> Select Option</h1>

                        <button className='btn-all text-black mt-[25px] font-bold '>Breakfast</button>
                        <button className='btn-all text-black mt-[25px] font-bold '>Lunch</button>
                        <button className='btn-all text-black mt-[25px] font-bold '>Dinner</button>





                    </div>

                    <div className='grid grid-cols-3 '>
                        <div className='menu-items p-5  box-menu hover:duration-700 mr-[30px]'>
                            <img className='mx-auto w-[210px] h-[210px] -mt-16' src={pasta3} alt="" />
                            <div className='mt-[30px] flex justify-between'>
                                <h1 className='text-[24px]'>Italiono Pasta</h1>
                                <p className='text-primary text-[24px]'>$34</p>
                            </div>
                            <p className='mt-3 leading-loose'>It’s easier to reach your savings goals when you have the right savingss.</p>
                            <p className='hover:underline text-primary text-sm mt-5'>order now</p>

                        </div>
                        <div className='menu-items p-5 box-menu hover:duration-700 mr-[62px]'>
                            <img className='mx-auto w-[210px] h-[210px] -mt-16' src={pasta1} alt="" />
                            <div className='mt-[30px] flex justify-between'>
                                <h1 className='text-[24px]'>Italiono Pasta</h1>
                                <p className='text-primary text-[24px]'>$34</p>
                            </div>
                            <p className='mt-3 leading-loose'>It’s easier to reach your savings goals when you have the right savingss.</p>
                            <p className='hover:underline text-primary text-sm mt-5'>order now</p>

                        </div>

                        <div className='menu-items p-5 box-menu hover:duration-700'>
                            <img className='mx-auto w-[210px] h-[210px] -mt-16' src={pasta2} alt="" />
                            <div className='mt-[30px] flex justify-between'>
                                <h1 className='text-[24px]'>Italiono Pasta</h1>
                                <p className='text-primary text-[24px]'>$34</p>
                            </div>
                            <p className='mt-3 leading-loose'>It’s easier to reach your savings goals when you have the right savingss.</p>
                            <p className='hover:underline text-primary text-sm mt-5'>order now</p>

                        </div>
                    </div>
                </div>

            </div>


            <Service_section />
        </>

    );
};

export default Menu;