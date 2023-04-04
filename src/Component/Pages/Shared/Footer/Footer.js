import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import lgo from '../../../../Images/logo.png'

const Footer = () => {
    return (
        <div className='bg-primary px-8'>
            <div className='flex py-10'>
                <div className='w-1/4'>
                    <img src={lgo} alt="" />
                </div>
                <div className='w-1/4'>
                    <p className='text-white font-bold text-lg'>Company</p>
                    <ul className='text-white text-sm leading-8'>
                        <li><Link>Home</Link></li>
                        <li><Link>Our Offerings</Link></li>
                        <li><Link>Our Team</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='w-1/4'>
                    <p className='text-white font-bold text-lg'>Useful Link</p>
                    <ul className='text-white text-sm leading-8'>
                        <li><Link>Blogs</Link></li>
                        <li><Link>FAQ's</Link></li>
                    </ul>
                </div>
                <div className='text-white w-1/4'>
                    <div className='flex items-center mb-4'>
                        <div className='text-4xl font-bold mr-4'>
                            <HiOutlineMail></HiOutlineMail>
                        </div>
                        <div>
                            <p className='font-bold'>Email:</p>
                            <p className='text-sm'>support@inreglobal.com</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='text-4xl font-bold mr-4'>
                            <FiPhoneCall></FiPhoneCall>
                        </div>
                        <div>
                            <p className='font-bold'>Phone:</p>
                            <p className='text-sm'>+91 | 7019305889</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between py-4'>
                <div><p className='text-white text-sm font-semibold'>Copyright 2023. Designed by INRE Global</p></div>
                <div>
                    <ul className='flex'>
                        <li className='mr-6'><Link className='flex items-center text-sm font-semibold'><AiOutlineLinkedin className='mr-2'></AiOutlineLinkedin><span>Linkedin</span></Link></li>
                        <li className='mr-6'><Link className='flex items-center text-sm font-semibold'><AiOutlineFacebook className='mr-2'></AiOutlineFacebook><span>Facebook</span></Link></li>
                        <li className='mr-6'><Link className='flex items-center text-sm font-semibold'><FiTwitter className='mr-2'></FiTwitter><span>Twitter</span></Link></li>
                        <li><Link className='flex items-center text-sm font-semibold'><AiOutlineInstagram className='mr-2'></AiOutlineInstagram><span>Instagram</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;