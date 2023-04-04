import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import verification from '../../../../Images/Verification.png'
import siteVisit from '../../../../Images/siteVisit.png'
import Title from '../../../../Images/Title.png'

const Offers = () => {
    const offers = [
        {
            id: 1,
            nmbr: 1,
            name: "Pre-Booking"
        },
        {
            id: 2,
            nmbr: 2,
            name: "Post-Booking & Pre-Registration",
        },
        {
            id: 1,
            nmbr: 1,
            name: "Post-Registration"
        },
    ]

    const cards = [
        {
            id: 1,
            img: verification,
            title: "Background verification",
            details: "Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...",
            projects: "INR 3000/Project"
        },
        {
            id: 2,
            img: siteVisit,
            title: "Virtual site visit",
            details: "It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...",
            projects: ""
        },
        {
            id: 3,
            img: Title,
            title: "Title diligence",
            details: "Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...",
            projects: ""
        }
    ]
    return (
        <div className='w-10/12 mx-auto'>
            <div>
                <div>
                    <h1 className='font-semibold text-3xl text-secondary text-center '>Our Offerings</h1>
                    <div className='border-black border-b-4 w-56 mx-auto mt-2'></div>
                    <p className='text-center text-secondary opacity-75 text-sm my-5'>This whole purchase journey can be divided into three stages. For more details, <span className='text-primary font-semibold'><Link>Click Here</Link></span></p>
                </div>
                <div className='grid grid-cols-3 gap-5 mb-6'>
                    {
                        offers.map(offer => <div className='flex items-center bg-accent py-4 px-4 hover:bg-info hover:border-black hover:border-b-4'>
                            <div className=' text-black items-center flex w-3/5 mx-auto'>
                                <span className='bg-white text-center px-4 py-2 rounded-full mr-5 font-semibold'>{offer.nmbr}</span>
                                <p>{offer.name}</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className='grid grid-cols-3 gap-8 '>
                    {
                        cards.map(card => <div className='border rounded-lg p-6'>
                            <div >
                                <img className='rounded' src={card.img} alt="" />
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl text-primary mt-5'>{card.title}</h1>
                                <p className='text-secondary opacity-75 text-sm my-5'>{card.details}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <button className='border border-primary text-primary py-3 px-6 rounded font-semibold flex items-center'><span className='mr-2'>Contact Us</span> <span><AiOutlineArrowRight></AiOutlineArrowRight></span></button>
                                <p className='text-primary text-sm'>{card.projects}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Offers;