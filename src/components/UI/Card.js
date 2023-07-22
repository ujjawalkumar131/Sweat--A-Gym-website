import React from 'react'

const Card = ({icon, heading, description}) => {
  return (
    <div className="bg-zinc-950 rounded-xl w-66 py-8 px-4 flex flex-col items-center justify-between flex-1 border-2 border-white/40 hover:border-2 hover:border-orange-500 transition-[all] duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
      <div className="flex flex-col items-center gap-4 h-full flex-1">
        <div className="text-white text-5xl item-start">
          {icon}
        </div>
        <div className="text-center text-neutral-100 mt-2">
          <h1 className="text-3xl font-bold break-words">{heading}</h1>
        </div>
        <div className="text-center">
          <p className="text-neutral-400">{description}</p>
        </div>
      </div>
  </div>

  )
}

export default Card
