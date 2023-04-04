import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import lgo from '../../../../Images/logo.png'

const Footer = () => {
    return (
        <div className='bg-primary'>
            <div className='flex'>
                <div>
                    <img src={lgo} alt="" />
                </div>
                <div>
                    <p className='text-white font-bold text-lg'>Company</p>
                    <ul className='text-white text-sm leading-8'>
                        <li><Link>Home</Link></li>
                        <li><Link>Our Offerings</Link></li>
                        <li><Link>Our Team</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <p className='text-white font-bold text-lg'>Company</p>
                    <ul className='text-white text-sm leading-8'>
                        <li><Link>Blogs</Link></li>
                        <li><Link>FAQ's</Link></li>
                        <li><Link>FAQ's</Link></li>
                    </ul>
                </div>
                <div></div>
            </div>
            <div className='flex justify-between py-4 px-12'>
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