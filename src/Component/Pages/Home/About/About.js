import React from 'react';
import homes from '../../../../Images/home.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import './About.css'

const About = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='bg-info flex my-9 h-96'>
                <div className='w-1/2 py-6 pl-7 flex items-center '>
                    <img className='' src={homes} alt="" />
                </div>
                <div className='w-1/2 px-7 py-8'>
                    <h1 className='font-semibold text-3xl text-secondary'>Who We Are</h1>
                    <p className='text-secondary opacity-75 text-sm py-6'>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 Niti Aayog report, 2021. However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p>

                    <button className='border border-primary text-primary py-3 px-6 rounded font-semibold flex items-center'><span className='mr-2'>Contact Now</span> <span><AiOutlineArrowRight></AiOutlineArrowRight></span></button>

                </div>
            </div>
        </div>
    );
};

export default About;