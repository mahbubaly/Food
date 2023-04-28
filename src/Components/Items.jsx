import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import burger1 from '../images/burger 1.png'
import burger2 from '../images/burger 2.png'
import { Link } from 'react-router-dom';

const Items = () => {
    return (
        <>
            <div className='container mx-auto p-20 relative -top-96 bg-slate-100 rounded-xl'>
                <div className='flex justify-between'>
                    <h1 className='text-[48px]'>New Iteam</h1>
                    <div className='flex gap-5'>
                        <ChevronLeftIcon className="h-[72px] w-[72px] p-2 rounded-[50%] hover:bg-primary duration-500 bg-[#FFFFFF] text-black" />
                        <ChevronRightIcon className="h-[72px] w-[72px] p-2 rounded-[50%] hover:bg-primary duration-500 bg-[#FFFFFF] text-black" />

                    </div>

                </div>
                <div className='flex gap-10'>
                    <div className='flex gap-7 justify-center items-center'>
                        <div>
                            <h1 className='text-2xl font-bold'>The Bun Jovi.</h1>
                            <p>It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your goals.It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your goals.</p>
                            <div className='flex'>
                                <p>$88</p>
                                <Link> <button>order now</button></Link>
                            </div>

                        </div>
                        <img src={burger1} alt="" />

                    </div>
                    <div>
                        <div>
                            <h1>The Bun Jovi.</h1>
                            <p>It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your goals.It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your goals.</p>
                            <div className='flex'>
                                <p>$88</p>
                                <Link> <button>order now</button></Link>
                            </div>

                        </div>
                        <img src={burger2} alt="" />

                    </div>
                </div>

            </div>


        </>
    );
};

export default Items;