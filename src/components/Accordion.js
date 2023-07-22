import React, { useRef } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const Accordion = ({question, active, index, setActive, answer}) => {
    const faqQuestionRef = useRef();
    return (
        <div className={`w-96 rounded-xl transition-all duration-300 ease-in-out border-2 focus-within:text-red-500 border-neutral-500/30 overflow-hidden items-center p-4 bg-neutral-950 flex flex-col ${index===active?'gap-6':'gap-0'}`}>
            <div onClick={()=> setActive(active===index?-1:index)} className='flex justify-center items-center gap-4'>
                <h1>{question}</h1>
                {active!==index?<div className='rounded-full bg-neutral-800 p-2 '>
                    <AiOutlinePlus className='rounded-full' />
                </div>:<div className='rounded-full bg-neutral-800 p-2 '>
                    <AiOutlineMinus className='rounded-full' />
                </div>}
            </div>
            <div ref={faqQuestionRef} className={`overflow-hidden transition-all duration-300 ease-in-out max-h-0 }`} style={index===active?{maxHeight:faqQuestionRef.current.scrollHeight}:{maxHeight:'0px'}}>
                <div className={`text-neutral-400 max-h-max`}>{answer}</div>
            </div>
        </div>

    )
}

export default Accordion
