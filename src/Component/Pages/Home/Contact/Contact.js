import React from 'react';
import contact from '../../../../Images/Contact.png'
import './Contact.css'
import { ReactCountryDropdown } from 'react-country-dropdown'
import 'react-country-dropdown/dist/index.css'

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
                            <div className='filed-group'>

                                <input className='border border-gray-400 w-full input rounded input-filed' type="text" name='name' id='name' required placeholder='Full Name' />
                                <label for='name' className='text-gray-400 input-label'>Full Name</label>
                            </div>
                            <div className='filed-group'>

                                <input className='border border-gray-400 w-full input rounded input-filed' type="text" name='email' id='email' required placeholder='Email Address' />
                                <label for='email' className='text-gray-400 input-label'>Email Address</label>
                            </div>
                            <div className='filed-group'>

                                <input className='border border-gray-400 w-full input rounded input-filed' type="text" name='name' id='MobileNumber' required placeholder='Mobile number' />
                                <label for='MobileNumber' className='text-gray-400 input-label'>Mobile number</label>
                            </div>
                            <div className='filed-group'>

                                <input className='border border-gray-400 w-full input rounded input-filed' type="text" name='Stages' id='Stages' required placeholder='Stages' />
                                <label for='name' className='text-gray-400 input-label'>Stages</label>
                            </div>
                            <ReactCountryDropdown className='bg-white' countryCode='IN' />

                        </div>
                        <div className='grid grid-cols-2 gap-8'>
                            <button type='submit ' className='text-white font-semibold bg-primary rounded py-3 w-full'>Submit</button>
                        </div>


                    </form>
                </div>
            </div>
            <div className='1/3'>
                <img className='' src={contact} alt="" />
            </div>
        </div>
    );
};

export default Contact;