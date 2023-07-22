import React from 'react'
import TrainerCard from '../TrainerCard'
import { trainersData } from '../../constants/trainersData'

const Trainers = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='mx-auto w-fit text-center'>
                <h1 className="text-3xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-orange-600">Meet Our Trainers</h1>
            </div>
            <div className='flex flex-col lg:flex-row justify-center mt-8 lg:mt-14 gap-4'>
                {trainersData.map((data, index)=> <TrainerCard profileImage={data.profileImage} index={index} key={data.id} name={data.name} desc={data.desc} experience={data.experience} />)}
            </div>
        </div>
    )
}

export default Trainers
