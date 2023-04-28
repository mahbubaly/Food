import React from 'react';
import './Styles/Style.css'
import img from '../images/Mask Group.png'
import img2 from '../images/Mask Group 1.png'

const Section_2 = () => {
    return (
        <>
            <div className='container mx-auto mt-[100px] px-20 '>
                <div className='grid grid-cols-2 relative items-center -top-96 '>
                    <div>
                        <h1 className='text-[48px] font-semibold mb-7'>Tastes So Good, Cats Ask for It By Name"</h1>
                        <p className='text-lg'>It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your savings goals when you have the right savings.It’s easier to reach your savings goals when you have the right savi ngs.reach your savings goals when you have the right savings.It’s easier to reach your savings goals when you have the right savi ngs.</p>

                    </div>
                    <div>
                        <img src={img} alt="" />


                    </div>

                </div>
                <div className='relative xl:-top-[700px] xl:left-52 left-14 -top-[550px] xl:gap-20 justify-center flex items-center'>


                    <div className='awards  p-11'>
                        <h1 className='font-bold text-[36px]'>200+ International Awards</h1>
                        <p>Wasier to reach your savings goals when you have the right savings.</p>
                    </div>

                    <img src={img2} alt="" />
                </div>
            </div>

        </>
    );
};

export default Section_2;