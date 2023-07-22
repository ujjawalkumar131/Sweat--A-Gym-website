import React from 'react'
import PricingCard from './PricingCard'
import {AiOutlineThunderbolt} from 'react-icons/ai'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Pricing = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <div className="mx-auto w-fit text-center">
                <h1 className="text-3xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-orange-600">Choose Your Plan</h1>
                <p className="text-zinc-300 mt-2 w-11/12 lg:w-9/12 mx-auto">Discover the perfect membership plan to kick-start your fitness journey.</p>
            </div>
            <div className='lg:pt-24 pt-12'>
                <div className='flex justify-center items-center gap-12 lg:gap-10 flex-col lg:flex-row'>
                    <PricingCard styles={'lg:scale-95'}>
                        <div className='flex items-center gap-2'>
                            <AiOutlineThunderbolt className='text-6xl'/>
                            <div>
                                <h1 className='text-3xl'>Getting Started</h1>
                                <p className='text-neutral-400'>Perfect for begineers!</p>
                            </div>
                        </div>
                        <div className='flex flex-col mt-6 gap-2'>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Personal Training</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Strength Training</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Cardiovascular Training</p>
                            </div> 
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle className='text-neutral-500/80' />
                                <p className='text-neutral-500/80'>Wellness Programs</p>
                            </div> 
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle className='text-neutral-500/80' />
                                <p className='text-neutral-500/80'>Nutritional Guidance</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle className='text-neutral-500/80' />
                                <p className='text-neutral-500/80'>Fitness Assessments</p>
                            </div>
                        </div>
                        <div className='mt-4 text-center'>
                            <h1 className='text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-orange-500'>$35<span className='text-sm'>/mo</span></h1>
                        </div>
                        <div className='mt-6'>
                            <button className={`flex py-2 px-4 rounded-3xl border-2 border-orange-500 transition-[all] duration-200 ease-in-out text-white text-lg font-medium text-center hover:bg-orange-600 justify-center items-center gap-1 lg:gap-2 w-full`}> Join now</button>       
                        </div>
                    </PricingCard>
                
                    <PricingCard styles='lg:-translate-y-8 lg:scale-110'>
                        <div className='flex items-center gap-2'>
                            <div className='absolute rounded-3xl px-6 py-2 text-orange-500 bg-white font-medium -top-6'>Most Popular</div>
                            <AiOutlineThunderbolt className='text-6xl'/>
                            <div>
                                <h1 className='text-3xl'>Premium</h1>
                                <p className='text-neutral-400'>Perfect for amateurs!</p>
                            </div>
                        </div>
                        <div className='flex flex-col mt-6 gap-2'>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Personal Training</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Strength Training</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Cardiovascular Training</p>
                            </div> 
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Wellness Programs</p>
                            </div> 
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle className='text-neutral-500/80' />
                                <p className='text-neutral-500/80'>Nutritional Guidance</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle className='text-neutral-500/80' />
                                <p className='text-neutral-500/80'>Fitness Assessments</p>
                            </div>
                        </div>
                        <div className='mt-4 text-center'>
                            <h1 className='text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-orange-500'>$50<span className='text-sm'>/mo</span></h1>
                        </div>
                        <div className='mt-6'>
                            <button className={`py-2 px-4 rounded-3xl bg-orange-500 border-2 border-orange-500 transition-[all] duration-200 ease-in-out text-white text-lg font-medium text-center hover:border-orange-600 hover:bg-orange-600 justify-center items-center gap-1 lg:gap-2 w-full`}> Join now</button>       
                        </div>
                    </PricingCard>
                    <PricingCard styles={'lg:scale-95'}>
                        <div className='flex items-center gap-2 scale-'>
                            <AiOutlineThunderbolt className='text-6xl'/>
                            <div>
                                <h1 className='text-3xl'>Elite</h1>
                                <p className='text-neutral-400'>Perfect for experts!</p>
                            </div>
                        </div>
                        <div className='flex flex-col mt-6 gap-2'>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Personal Training</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Strength Training</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Cardiovascular Training</p>
                            </div> 
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Wellness Programs</p>
                            </div> 
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Nutritional Guidance</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AiOutlineCheckCircle />
                                <p>Fitness Assessments</p>
                            </div>
                        </div>
                        <div className='mt-4 text-center'>
                            <h1 className='text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-orange-500'>$75<span className='text-sm'>/mo</span></h1>
                        </div>
                        <div className='mt-6'>
                            <button className={`py-2 px-4 rounded-3xl border-2 border-orange-500 transition-[all] duration-200 ease-in-out text-white text-lg font-medium text-center hover:bg-orange-600  justify-center items-center gap-1 lg:gap-2 w-full`}> Join now</button>       
                        </div>
                    </PricingCard>
                </div>
            </div>
        </div>
    )
}

export default Pricing
