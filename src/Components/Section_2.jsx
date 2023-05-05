import React from 'react';
import './Styles/Style.css'
import img from '../images/Mask Group.png'
import img2 from '../images/Mask Group 1.png'
import Menu from './Menu';

const Section_2 = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-20 p-4'>
                    <div data-aos="flip-right"  data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className='lg:order-1 order-2 lg:my-0 '>
                            <h1 className='lg:text-[48px] text-[32px] font-semibold mb-7 leading-loose'>Tastes So Good, Cats Ask for It By Name"</h1>
                            <p className='text-lg  leading-loose'>It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your savings goals when you have the right savings.It’s easier to reach your savings goals when you have the right savi ngs.reach your savings goals when you have the right savings.It’s easier to reach your savings goals when you have the right savi ngs.</p>

                        </div>
                    </div>

                    <div data-aos="flip-left"  data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600" className='lg:order-2 order-1 p-5 lg:p-0'>
                        <img src={img} alt="" />


                    </div>

                </div>







                {/* International awards */}
                <div className='lg:-mt-[300px]  xl:ml-80  lg:ml-48 lg:p-0 p-5  justify-center lg:flex items-center'>


                    <div className='awards  xl:p-11 lg:p-4 p-5 mt-4 lg:mt-10  '>
                        <h1 className='font-bold lg:text-[36px] text-[16px]  xl:mt-0 lg:text-center text-left '>200+ International Awards</h1>
                        <p >Wasier to reach your savings goals when you have the right savings.</p>
                    </div>

                    <img className='lg:mt-0 mt-6' src={img2} alt="" />
                </div>
            </div>

            <Menu />

        </>
    );
};

export default Section_2;