import React from 'react'

const Header = () => {
  return (
    <div className=" w-11/12 mx-auto flex items-center h-hero-container pb-14">
      <div className="w-hero-text-container px-4 ">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-grey-600 ">
          We train You smarter , not harder.
        </h1>
        <br></br>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-red-600 ">
          Unleash Your Inner Athelete
        </h1>
        <p className="text-zinc-300 mt-8 text-2xl text-ellipsis text-sl">
          Get ready to unleash your full potential at Sweat, your ultimate
          destination for fitness and well-being.
        </p>
        <button className="w-40 py-2 mt-6 px-4 rounded-3xl bg-orange-500 transition-[all] duration-200 ease-in-out text-white text-lg font-medium text-center hover:bg-orange-600 flex justify-center items-center gap-1 lg:gap-2">
          Join now
        </button>
      </div>
    </div>
  );
}

export default Header
