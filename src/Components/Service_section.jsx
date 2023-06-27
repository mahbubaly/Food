import React from 'react';
import car from '../images/car-logo.png'
import table from '../images/table.png'
import contact_bg from '../images/third-section.png'
import footerPasta from '../images/Italiono Pasta.png'
import './Styles/Style.css' 
import { Link } from 'react-router-dom';

const Service_section = () => {
    return (
        <>
            <div className='container mx-auto '>
                <div className='grid xl:grid-cols-2 grid-cols-1 gap-10 my-[130px] p-3'>
                    <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="1000">
                        <h1 className='lg:text-[48px] text-[32px] font-semibold text-center xl:text-left'>Best Service, Right Time, Right People</h1>
                        <p className='text-lg mt-[30px] leading-loose'>It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your savings goals when you have the right savings.It’s easier to reach your savings goals when you have the right savi ngs.reach your savings goals when you have the right savings.It’s easier to reach your savings goals when you have the right savi ngs.</p>

                    </div>

                    <div className='shadow-md px-5 '>

                        <div data-aos="fade-left" data-aos-offset="400" data-aos-duration="1000" className='lg:flex justify-between gap-5 relative top-11'>
                            {/* Free service */}
                            <div className='services bg-black hover:duration-1000  px-5 py-10 box-menu'>
                                <img className='mb-5' src={car} alt="" />
                                <h1 className='text-2xl font-semibold text-white leading-loose '>Free Delivery</h1>
                                <p className='text-white mt-[10px] leading-loose'>It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your savings goals when you have the right savings.It’s easier to reach your savings goals when you have the right savi ngs.</p>

                            </div>

                            {/* Table Service */}
                            <div className='services hover:duration-1000 bg-black lg:mt-0 mt-4  px-5 py-10 box-menu'>
                                <img className='mb-5' src={table} alt="" />
                                <h1 className='text-2xl font-semibold text-white leading-loose'>Table Service</h1>
                                <p className='text-white mt-[10px] leading-loose'>It’s easier to reach your savings goals when you have the right savi ngs,asier to reach your savings goals when you have the right savings.It’s easier to reach your savings goals when you have the right savi ngs.</p>

                            </div>
                        </div>

                    </div>
                </div>



                {/* contact section */}


                <div className='mt-[130px] lg:flex '>
                    <div className='contact-bg bg-black lg:py-[80px] py-4 px-[76px] hover:duration-1000 xl:w-[560px] w-auto box-menu  lg:relative lg:top-24 lg:left-36 lg:mb-0 mb-4 lg:order-1 order-2'>
                        {/* <h1 className='font-bold text-[48px] text-white'>Contact us</h1>
                        <input className='input-section xl:w-[460px]  p-4 bg-black text-white ' placeholder='Name' type="text" />
                        <input className='input-section xl:w-[460px] my-[25px]  p-4 bg-black text-white ' placeholder='Email Address' type="email" />
                        <textarea className="textarea input-section xl:w-[460px]   p-4 bg-black text-white" placeholder="Message"></textarea>
                        <Link className=''><button className='btn-all text-black w-  font-bold text-[16px]'>Send</button></Link> */}

                        <div data-aos="fade-left" data-aos-offset="400" data-aos-duration="1000" className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white text-[32px] lg:text-[48px]">Contact us</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input my-[25px] input-bordered input-section" />
                                </div>
                                <div className="form-control">

                                    <input type="text" placeholder="Email Address" className="input input-bordered input-section" />

                                </div>
                                <textarea className="textarea textarea-bordered mt-[25px] input-section" placeholder="Message"></textarea>
                                <div className="form-control mt-6 ">
                                    <button className='btn btn-primary lg:mb-0 '>Send</button>
                                </div>
                            </div>
                        </div> 





                    </div>
                    <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="1000" className='lg:order-2 order-1'>
                        <img src={contact_bg} alt="" />
                    </div>

                </div>




                {/* Get off 40% */}


                <div className='mt-[150px] rounded-t-xl bg-primary p-[62px] flex lg:flex-row flex-col-reverse justify-between items-center'>
                    <div data-aos="fade-down-left" data-aos-offset="400" data-aos-duration="1000" className='lg:-mt-0 -mt-24'>
                        <h1 className='lg:text-[48px] text-[32px]  font-semibold '>Get 40% off on your first order by joining now</h1>
                        <Link className=''><button className='px-4 py-2 mt-[40px] rounded-2xl bg-white  text-black  font-bold text-[16px] mb-6'>Get Started</button></Link>

                    </div>
                    <img data-aos="fade-up-right" data-aos-offset="400" data-aos-duration="1000" className='relative lg:-mt-20  xl:mx-0 mx-auto lg:top-0 -top-32 ' src={footerPasta} alt="" />
                </div>










            </div>

        </>
    );
};

export default Service_section;