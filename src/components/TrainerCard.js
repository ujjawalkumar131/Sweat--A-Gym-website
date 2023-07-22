import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import PropTypes from 'prop-types';



const TrainerCard = ({profileImage, name, desc, experience}) => {
    TrainerCard.propTypes = {
        profileImage: PropTypes.string.isRequired,
      };
    return (
        <div className='p-6 flex-1 flex flex-col justify-center items-center border-2 border-neutral-500 text-white rounded-xl'>
            <div >        
                <div className={`mx-auto ${profileImage} w-36 h-36 rounded-full bg-center bg-cover block`}>
            </div>
            <div className='text-center mt-4'>
                <h1 className='text-3xl'>{name}</h1>
                <p className='mt-2 text-nm text-neutral-400'>{desc}</p>
                <div className='mx-auto w-fit px-4 py-2 rounded-3xl mt-3 border-2 border-orange-500'>{experience} years of experience</div>
            </div>
            <div className='flex justify-center items-center gap-3 mt-4'>
                <BsFacebook className='text-2xl transition-text duration-300 ease-in-out hover:text-orange-500'/>
                <BsInstagram className='text-2xl transition-text duration-300 ease-in-out hover:text-orange-500'/>
                <BsTwitter className='text-2xl transition-text duration-300 ease-in-out hover:text-orange-500'/>
            </div>
            </div>
        </div>
    )
}

export default TrainerCard
