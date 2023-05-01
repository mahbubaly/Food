import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import burger1 from '../images/burger 1.png'
import burger2 from '../images/burger 2.png'
import { Link, useNavigate } from 'react-router-dom';
import Section_2 from './Section_2';


const Items = () => {
    const navigate = useNavigate();

    const handleNav = () => {
        navigate(-1);
    }
    return (
        <>
            <div className='lg:p-[60px]'>
                <div className='container mx-auto lg:p-20 p-5   xl:-mt-[400px] lg:-mt-[550px] -mt-[500px] bg-slate-100 rounded-xl'>
                    <div className='lg:flex block  justify-between items-center'>
                        <h1 className='text-[48px]'>New Iteam</h1>
                        <div className='flex gap-5'>
                            <ChevronLeftIcon className=" lg:w-[50px] lg:h-[50px] w-8 h-8 p-2 rounded-[50%] hover:bg-primary duration-500 bg-[#FFFFFF] text-black" />
                            <ChevronRightIcon className="lg:w-[50px] lg:h-[50px] w-8 h-8 p-2 rounded-[50%] hover:bg-primary duration-500 bg-[#FFFFFF] text-black" />

                        </div>

                    </div>
                    <div className='md:flex  gap-10 mt-8'>

                        <div className='grid xl:grid-cols-2 grid-cols-1 items-center  lg:gap-5 xl:gap-[30px] bg-white py-[40px] px-[30px] rounded-lg'>
                            <div className='order-2 xl:order-1'>
                                <h1 className='text-2xl font-bold'>The Bun Jovi.</h1>
                                <p className='text-[16px] my-2 '> It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your goals.It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your goals.</p>
                                <div className='flex justify-between gap-10 mt-6 items-center '>
                                    <p className='text-[36px] font-bold mt-4'>$88</p>
                                    <h1><Link> <button className='btn-all text-black mt-[25px] font-bold text-[16px]'>order now</button></Link> </h1>
                                </div>

                            </div>
                            <img className='mx-auto order-1 xl:order-2' src={burger1} alt="" />

                        </div>


                        <div className='grid xl:grid-cols-2 grid-cols-1 items-center  lg:gap-5 xl:gap-[30px] bg-white py-[40px] px-[30px] rounded-lg'>
                            <div className='order-2 xl:order-1'>
                                <h1 className='text-2xl font-bold'>The Bun Jovi.</h1>
                                <p className='text-[16px] my-2 '> It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your goals.It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your goals.</p>
                                <div className='flex justify-between gap-10 mt-6 items-center '>
                                    <p className='text-[36px] lg:text-left text-center font-bold mt-4'>$88</p>
                                    <h1><Link> <button className='btn-all text-black mt-[25px] font-bold text-[16px]'>order now</button></Link> </h1>
                                </div>

                            </div>
                            <img className='mx-auto order-1 xl:order-2' src={burger2} alt="" />

                        </div>

                    </div>

                </div>
            </div>




            <Section_2 />


        </>
    );
};

export default Items;