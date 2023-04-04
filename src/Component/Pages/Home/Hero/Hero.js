import React from 'react';
import hero from '../../../../Images/Hero.png'

const Hero = () => {
    return (
        <div  className='w-10/12 mx-auto'>
            <div className='mt-16'>
               
                <div >
                    <img className='h-96' src={hero} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;