import React from 'react';
import Alok from '../../../../Images/Alok.png'
import Brajesh from '../../../../Images/Brajesh.png'
import Deepak from '../../../../Images/Deepak.png'
import { Link } from 'react-router-dom';

const TeamMember = () => {
    const teamMembers = [
        {
            id: 1,
            img: Brajesh,
            name: "Brajesh Pathak",
            details: "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...",

        },
        {
            id: 2,
            img: Deepak,
            name: "Deepak Shukla",
            details: "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience..",

        },
        {
            id: 3,
            img: Alok,
            name: "Alok Kumar Singh",
            details: "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Rea.",

        }
    ]
    return (
        <div className='w-10/12 mx-auto'>
            <div className='my-9'>
                <div>
                    <h1 className='font-semibold text-3xl text-secondary text-center '>Our Team Members</h1>
                    <div className='border-black border-b-4 w-56 mx-auto mt-2'></div>
                </div>
                <div className='grid grid-cols-3 gap-8 mt-6'>
                    {
                        teamMembers.map(member => <div className='shadow-xl rounded-lg p-6 relative'>
                            <div >
                                <img className='rounded' src={member.img} alt="" />
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl text-secondary mt-5'>{member.name}</h1>
                                <p className='text-secondary opacity-75 text-sm mt-3 mb-6'>{member.details}</p>
                            </div>
                            <div className='absolute bottom-6 right-6'>
                                <Link className='text-sm text-primary'>View More</Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default TeamMember;