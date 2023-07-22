import React, { useRef } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Features from './Features'
import Pricing from '../Pricing'
import Trainers from './Trainers'
import FAQs from './FAQs'
import Contact from './Contact'
import Footer from './Footer'

const Main = () => {
  const featureRef = useRef();
  const headerRef = useRef();
  const pricingRef = useRef();
  const trainersRef = useRef();
  const faqRef = useRef();
  const contactRef = useRef();

  return (
    <div>
        {/* <Backdrop /> */}
        <div ref={headerRef} className="w-full bg-hero bg-cover bg-center bg-no-repeat">
            <Navbar contactRef={contactRef} faqRef={faqRef} featureRef={featureRef} headerRef={headerRef} pricingRef={pricingRef} trainersRef={trainersRef} /> 
            <Header />
        </div>
        <div ref={featureRef} className="w-full bg-neutral-900 lg:py-8">
            <Features />
        </div>
        <div ref={pricingRef} className="w-full bg-neutral-950 lg:py-10 py-6">
            <Pricing />
        </div>     
        <div ref={trainersRef} className="w-full bg-neutral-900 lg:py-10 py-6">
            <Trainers />
        </div>
        <div ref={faqRef} className="w-full bg-neutral-900 lg:py-10 py-6">
            <FAQs />
        </div>
        <div ref={contactRef} className='w-full bg-neutral-950 lg:py-10 py-6'>
            <Contact />
        </div>
        <div className='w-full bg-neutral-900 lg:pt-10 pt-6'>
            <Footer />
        </div>
        
    </div>
  )
}

export default Main
