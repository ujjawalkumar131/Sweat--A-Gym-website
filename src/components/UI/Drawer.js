import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { IoPeopleOutline } from 'react-icons/io5'
import { FaQuestion } from 'react-icons/fa'
import { RiHandCoinLine } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

export const Backdrop = ({setTogglemenu}) =>{
    return(
        <div onClick={()=> setTogglemenu((p)=>!p)} className="bg-gradient-to-br from-neutral-900/80 to bg-orange-400/10 h-full w-full fixed z-40">
        </div>
    )
}


const Drawer = ({faqRef,trainersRef,pricingRef, toggleMenu, setTogglemenu, featureRef, headerRef, scrollToSection}) => {
    return (
        <div className="fixed lg:hidden right-0 overflow-hidden bg-neutral-900 z-50 top-0 h-screen w-64 pt-6 animate-moveToLeft">
            <div className='flex justify-end mr-6'>
                {toggleMenu&&<AiOutlineClose onClick={()=>setTogglemenu(false)} className={`block lg:hidden text-white text-4xl `} />}
            </div>
            <div className='mt-6'>
                <ul className='text-white flex flex-col w-11/12 mx-auto text-xl'>
                    <li onClick={()=> scrollToSection(headerRef)} className='p-3 rounded-xl hover:bg-neutral-700 flex items-center gap-3'><AiOutlineHome />Home</li>
                    <li onClick={()=> scrollToSection(featureRef)} className='p-3 rounded-xl hover:bg-neutral-700 flex items-center gap-3'><RiHandCoinLine/>Our services</li>
                    <li onClick={()=> scrollToSection(pricingRef)} className='p-3 rounded-xl hover:bg-neutral-700 flex items-center gap-3'><IoPeopleOutline/> Membership</li>
                    <li onClick={()=> scrollToSection(trainersRef)} className='p-3 rounded-xl hover:bg-neutral-700 flex items-center gap-3'><GiWeightLiftingUp/> Trainers</li>
                    <li onClick={()=> scrollToSection(faqRef)} className='p-3 rounded-xl hover:bg-neutral-700 flex items-center gap-3'><FaQuestion/> FAQs</li>
                </ul>
            </div>
            <div className='mt-5 px-5'>
                <button className="py-2 px-4 rounded-3xl bg-orange-500 transition-[all] duration-200 ease-in-out text-white text-lg font-medium text-center hover:bg-orange-600 lg:hidden mx-auto w-full">Join now</button>
            </div>
            <div className='absolute w-full bottom-10'>
                <div className='w-11/12 mx-auto'>
                    <div className='flex items-center'>
                        <h1 className='text-neutral-400 w-full'>Follow us</h1>
                        <hr className='absolute -right-24 w-full border-1 border-neutral-400/40'/>
                    </div>
                    <div className='text-white flex gap-4 mt-3 text-xl'>
                        <BsFacebook/>
                        <BsInstagram/>
                        <BsTwitter/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer
