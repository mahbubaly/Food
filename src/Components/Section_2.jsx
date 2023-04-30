import React from 'react';
import './Styles/Style.css'
import img from '../images/Mask Group.png'
import img2 from '../images/Mask Group 1.png'
import Menu from './Menu';

const Section_2 = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 items-center gap-20 p-4'>
                    <div>
                        <h1 className='text-[48px] font-semibold mb-7'>Tastes So Good, Cats Ask for It By Name"</h1>
                        <p className='text-lg'>It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your savings goals when you have the right savings.It’s easier to reach your savings goals when you have the right savi ngs.reach your savings goals when you have the right savings.It’s easier to reach your savings goals when you have the right savi ngs.</p>

                    </div>
                    <div>
                        <img src={img} alt="" />


                    </div>

                </div>







                {/* International awards */}
                <div className='-mt-[300px] xl:ml-80  lg:ml-48   justify-center flex items-center'>


                    <div className='awards  xl:p-11 lg:p-4 mt-4 lg:mt-10'>
                        <h1 className='font-bold text-[36px]  xl:mt-0 lg:text-center'>200+ International Awards</h1>
                        <p>Wasier to reach your savings goals when you have the right savings.</p>
                    </div>

                    <img className='' src={img2} alt="" />
                </div>
            </div>

            <Menu />

        </>
    );
};

export default Section_2;