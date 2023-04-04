import React from 'react';
import contact from '../../../../Images/Contact.png'
import './Contact.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const Contact = () => {
    return (
        <div className='shadow-xl w-10/12 mx-auto rounded-xl my-9 flex  p-10'>
            <div className='w-2/3 pr-20'>
                <div>
                    <h1 className='text-xl font-semibold text-secondary'>Get In Touch With Us To Connect</h1>
                    <p className='text-secondary my-8 font-semibold'>Contact Us</p>
                </div>
                <div>
                    <form>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='filed-group relative '>
                                <label for='name' className='text-gray-400 absolute bg-white bottom-12  left-4 text-sm'>Full Name</label>
                                <input className='border  border-gray-400 w-full input-sm rounded' type="text" name='name' id='name' required />
                                <p className='text-sm text-gray-400 mt-2'>Not more than 50 characters.</p>
                            </div>
                            <div className='filed-group relative'>
                                <label for='email' className='text-gray-400 absolute bg-white bottom-12  left-4 text-sm'>Email Address</label>
                                <input className='border border-gray-400 w-full input-sm rounded' type="text" name='email' id='email' required />
                                <p className='text-sm text-gray-400 mt-2'>Please enter a valid email address.</p>
                            </div>
                            <div>
                                <PhoneInput
                                />
                            </div>

                            <CountryDropdown classes='text-sm w-full border border-gray-400 rounded input-sm'></CountryDropdown>

                            <div className='filed-group relative'>
                                <label for='name' className='text-gray-400 absolute bg-white bottom-5  left-4 text-sm'>Stages</label>
                                <select className='border border-gray-400 w-full select-sm rounded' type="text" name='Stages' id='Stages' required>
                                    <option className='text-sm text-gray-400'>I have booked but registration is not done.</option>
                                    <option className='text-sm text-gray-400'>I have booked but registration is not done.</option>
                                </select>

                            </div>


                        </div>
                        <div className='grid grid-cols-2 gap-8 mt-8'>
                            <button type='submit ' className='text-white font-semibold bg-primary rounded py-2 w-full'>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
            <div className='1/3 flex items-center'>
                <img className='' src={contact} alt="" />
            </div>
        </div>
    );
};

export default Contact;