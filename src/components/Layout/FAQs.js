import React, { useState } from 'react'
import Accordion from '../Accordion';
import { faqDatas } from '../../constants/faqData';

const FAQs = () => {
    const [active, setActive] = useState(-1);
    return (
        <div className='w-11/12 mx-auto text-white'>
            <div className='mx-auto w-fit text-center'>
                <h1 className='text-3xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-orange-600'>Frequent Asked Questions</h1>
            </div>
            <div className='mt-8 mx-auto flex gap-4 justify-center items-start flex-wrap w-10/12'>
                {faqDatas.map((data, index)=> <Accordion setActive={setActive} active={active} index={index} question={data.question} answer={data.answer} /> )}
            </div>
        </div>
    )
}

export default FAQs
