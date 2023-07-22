import React from 'react'

const PricingCard = ({children, styles}) => {
    return (
        <div className={`text-white rounded-xl w-full relative bg-neutral-800 p-8 ${styles}`}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default PricingCard
