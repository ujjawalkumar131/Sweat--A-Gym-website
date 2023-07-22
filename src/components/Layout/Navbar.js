import React, { useEffect,useState } from 'react'
import Logo from '../../images/logo.png'
import { MdDirectionsRun } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Drawer from '../UI/Drawer';
import { Backdrop } from '../UI/Drawer';

const Navbar = ({featureRef, contactRef,headerRef,pricingRef,trainersRef, faqRef}) => {
  const [navStyle,setNavstyle] = useState('relative');
  const [scrolled, setScrolled] = useState(false);
  const [toggleMenu, setTogglemenu] = useState(false);
  const scrolling = () =>{
    if(window!==undefined){
      let windowHeight = window.scrollY;
      if(windowHeight>50){
        setNavstyle("fixed z-30 bg-zinc-900 w-full top-0");
        setScrolled(true)
      }
      else{
        setNavstyle('relative')
        setScrolled(false)
      }

    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrolling);
    console.log("mounted");
    return (()=>{
      window.removeEventListener('scroll', scrolling)
    })
  },[])

  const scrollToSection = (element) =>{
    element.current?.scrollIntoView({behavior:'smooth', block:'start'})
  }
  
  return (
    <>
    {toggleMenu&&<Backdrop setTogglemenu={setTogglemenu} />}
    <div>
    <nav className={`${navStyle} w-11/12 mx-auto flex flex-row justify-between items-center lg:px-4 px-0`}>
      <div>
        <img className='lg:w-24 w-20' src={Logo} alt="Logo"></img>
      </div>
      <div className='hidden lg:block'>
        <ul className='flex flex-row justify-center items-center lg:gap-6 gap-4'>
            <li onClick={() => scrollToSection(headerRef)} className='text-md lg:text-lg text-zinc-300 font-medium cursor-pointer py-4 transition-[color] duration-300 hover:text-neutral-50 relative after:transition-all after:duration-200 ease-in-out after:absolute after:bg-orange-600 after:w-0 after:rounded-lg hover:after:w-full after:bottom-0 after:left-0 after:h-1'>Home</li>
            <li onClick={() => scrollToSection(featureRef)} className='text-md lg:text-lg text-zinc-300 font-medium cursor-pointer py-4 transition-[color] duration-300 hover:text-neutral-50 relative after:transition-all after:duration-200 ease-in-out after:absolute after:bg-orange-600 after:w-0 after:rounded-lg hover:after:w-full after:bottom-0 after:left-0 after:h-1'>Our services</li>
            <li onClick={()=> scrollToSection(pricingRef)} className='text-md lg:text-lg text-zinc-300 font-medium cursor-pointer py-4 transition-[color] duration-300 hover:text-neutral-50 relative after:transition-all after:duration-200 ease-in-out after:absolute after:bg-orange-600 after:w-0 after:rounded-lg hover:after:w-full after:bottom-0 after:left-0 after:h-1'>Membership</li>
            <li onClick={()=> scrollToSection(trainersRef)} className='text-md lg:text-lg text-zinc-300 font-medium cursor-pointer py-4 transition-[color] duration-300 hover:text-neutral-50 relative after:transition-all after:duration-200 ease-in-out after:absolute after:bg-orange-600 after:w-0 after:rounded-lg hover:after:w-full after:bottom-0 after:left-0 after:h-1'>Trainers</li>
            <li onClick={()=> scrollToSection(faqRef)} className='text-md lg:text-lg text-zinc-300 font-medium cursor-pointer py-4 transition-[color] duration-300 hover:text-neutral-50 relative after:transition-all after:duration-200 ease-in-out after:absolute after:bg-orange-600 after:w-0 after:rounded-lg hover:after:w-full after:bottom-0 after:left-0 after:h-1'>FAQs</li>
            <li onClick={()=> scrollToSection(contactRef)} className='text-md lg:text-lg text-zinc-300 font-medium cursor-pointer py-4 transition-[color] duration-300 hover:text-neutral-50 relative after:transition-all after:duration-200 ease-in-out after:absolute after:bg-orange-600 after:w-0 after:rounded-lg hover:after:w-full after:bottom-0 after:left-0 after:h-1'>Contact</li>
        </ul>
      </div>
      <div>
        <button className={`hidden py-2 px-4 rounded-3xl border-2 border-orange-500 transition-[all] duration-200 ease-in-out text-white text-lg font-medium text-center hover:bg-orange-600 lg:flex justify-center items-center gap-1 lg:gap-2 `}> <MdDirectionsRun className="inline text-xl" /> Join now</button>       
        {!toggleMenu&&<HiOutlineMenuAlt3 onClick={()=>setTogglemenu(true)} className={`block lg:hidden text-white text-4xl ${scrolled&&'mr-6'}`} />}
      </div>
      
    </nav>
    {toggleMenu?<Drawer faqRef={faqRef} trainersRef={trainersRef} pricingRef={pricingRef} featureRef={featureRef} headerRef={headerRef} scrollToSection={scrollToSection} scrolled={scrolled} toggleMenu={toggleMenu} setTogglemenu={setTogglemenu} />:null}
    </div>
    </>
  )
}

export default Navbar;
