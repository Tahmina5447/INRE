import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import property1 from '../../../../Images/Property1.png'
import property2 from '../../../../Images/Property2.png'
import property3 from '../../../../Images/Property3.png'
import calender from '../../../../Images/calender.png'
import { Link } from 'react-router-dom';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            img: property1,
            about: 'Real Estate, Analysis',
            title: "Guide for personal property Buying ",
            details: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
        },
        {
            id: 2,
            img: property2,
            about: 'Real Estate, Analysis',
            title: "Guide for personal property Buying ",
            details: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."

        },
        {
            id: 3,
            img: property3,
            about: 'Real Estate, Analysis',
            title: "Guide for personal property Buying ",
            details: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."

        }
    ]
    return (
        <div className='bg-accent py-6'>
            <div className='my-9 w-10/12 mx-auto'>
                <div>
                    <h1 className='font-semibold text-3xl text-secondary text-center '>Blogs</h1>
                    <div className='border-black border-b-4 w-16 mx-auto mt-2'></div>
                </div>
                <div className='grid grid-cols-3 gap-8 mt-6'>
                    {
                        blogs.map(blog => <div className='shadow-2xl rounded-lg p-6 relative'>
                            <div >
                                <img className='rounded' src={blog.img} alt="" />
                            </div>
                            <div>
                                <p className='text-primary text-sm my-5'>{blog.about}</p>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <img className='mr-2' src={calender} alt="" />
                                        <p className='text-sm text-secondary'>09 jun 2022</p>
                                    </div>
                                    <p className='text-sm text-secondary'>By Admin</p>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl text-primary mt-6'>{blog.title}</h1>
                                <p className='text-secondary opacity-75 text-sm mt-3 mb-6'>{blog.details}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <button className='border border-primary text-primary py-3 px-6 rounded font-semibold flex items-center'><span className='mr-2'>View More</span> <span><AiOutlineArrowRight></AiOutlineArrowRight></span></button>

                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;