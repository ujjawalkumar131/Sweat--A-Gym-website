import React from 'react'
import { featuresData } from '../../constants/features'
import Card from '../UI/Card'

const Features = () => {
  return (
    <div className="w-11/12 mx-auto py-8 h-full">
        <div className="mx-auto w-fit text-center">
            <h1 className="text-3xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-orange-600">Our Services</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mt-16 justify-center flex-1">
            {featuresData.map((feature,_)=>{
                return(
                    <Card key={feature.id} icon={feature.icon} heading={feature.heading} description={feature.description} />
                )
            })}
        </div>
    </div>
  )
}

export default Features;
