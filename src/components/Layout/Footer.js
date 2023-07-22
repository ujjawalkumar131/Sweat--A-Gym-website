import React from 'react'
import Logo from '../../images/logo.png'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
        <div className='mx-auto w-11/12 flex flex-col lg:flex-row md:flex-row text-white justify-around text-center md:text-left lg:text-left'>
            <div className='flex lg:w-96 justify-center items-center'>
                <img src={Logo} alt='logo' className='w-36 h-36'></img>
                <p className='text-sm hidden lg:block text-neutral-300'>Get ready to unleash your full potential at Sweat, your ultimate destination for fitness and well-being.</p>
            </div>
            <div className=''>
                <ul className='flex flex-col gap-2 cursor-pointer'>
                    <li className='transition-text duration-150 ease-in-out text-neutral-300/90 hover:text-orange-500'>Testimonial</li>

                    <li className='transition-text duration-150 ease-in-out text-neutral-300/90 hover:text-orange-500'>Trainers</li>
                    <li className='transition-text duration-150 ease-in-out text-neutral-300/90 hover:text-orange-500'>Membership</li>
                    <li className='transition-text duration-150 ease-in-out text-neutral-300/90 hover:text-orange-500'>Class schedule</li>
                </ul>
            </div>
            <div className='mt-6 lg:mt-0 md:mt-0'>
                <ul className='flex flex-col gap-2 cursor-pointer'>
                    <li className='transition-text duration-150 ease-in-out text-neutral-300/90 hover:text-orange-500'>Privacy Policy</li>
                    <li className='transition-text duration-150 ease-in-out text-neutral-300/90 hover:text-orange-500'>About us</li>
                </ul>
            </div>
            <div className='mt-6 lg:mt-0 md:mt-0'>
                Lets Connect 
                <div className='flex gap-2 text-lg mt-2 justify-center lg:justify-normal md:justify-normal'>
                <BsFacebook className='hover:text-orange-500 transition-text duration-150 ease-in-out cursor-pointer' />
                <BsInstagram className='hover:text-orange-500 transition-text duration-150 ease-in-out cursor-pointer' />
                <BsTwitter className='hover:text-orange-500 transition-text duration-150 ease-in-out cursor-pointer' />
                </div>
            </div>
        </div>
        <div className='text-center p-6 text-white bg-neutral-950 mt-6'>
            Copyright © Sweat2023
        </div>
        </>
    )
}

export default Footer
