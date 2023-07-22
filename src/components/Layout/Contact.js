import React, { useRef } from 'react'
import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from '@emailjs/browser';


const Contact = () => {
   
    const formRef = useRef();
    const submitHandler = (e)=>{
        e.preventDefault();
        const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID 
        const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
        const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,USER_ID).then((res)=>{
            console.log("Success");
        },(err)=> alert(JSON.stringify(err)));
    }
    return (
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row md:flex-row justify-around items-center text-white p-6 gap-14 lg:gap-0">
        <div className="flex flex-col gap-6 justify-center order-2 lg:order-1">
          <div className="flex items-center gap-3">
            <GoLocation className="text-2xl lg:text-4xl" />
            <h1 className="text-lg lg:text-xl text-neutral-400">
              Ranchi, Jharkhand, India
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <IoCallOutline className="text-2xl lg:text-4xl" />
            <h1 className="text-lg lg:text-xl text-neutral-400">
              +91 9304497613
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineMail className="text-2xl lg:text-4xl" />
            <h1 className="text-lg lg:text-xl text-neutral-400">
              ujjawalraj131@gmail.com
            </h1>
          </div>
        </div>
        <div className="rounded-xl w-80 bg-neutral-900 p-6 order-1 lg:order-2">
          <div>
            <h1 className="text-center text-2xl">Contact us</h1>
            <form
              ref={formRef}
              onSubmit={submitHandler}
              className="mt-8 flex flex-col gap-4"
            >
              <input
                name="name"
                className="rounded-md bg-neutral-700 px-2 py-2 w-full border-none outline-none placeholder:text-white text-white"
                placeholder="Name"
              ></input>
              <input
                name="Phone"
                className="rounded-md bg-neutral-700 px-2 py-2 w-full border-none outline-none placeholder:text-white text-white"
                placeholder="Phone No"
              ></input>
              <input
                name="email"
                className="rounded-md bg-neutral-700 px-2 py-2 w-full border-none outline-none placeholder:text-white text-white"
                placeholder="Email"
              ></input>
              <textarea
                name="message"
                rows="4"
                className="rounded-md bg-neutral-700 px-2 py-2 border-none resize-none placeholder:text-white text-white scroll outline-none"
                placeholder="Enter your query here..."
              ></textarea>
              <button className="text-white rounded-3xl p-2 w-28 border-2 transition-text duration-150 ease-in-out border-neutral-400/70 hover:bg-white hover:text-black hover:border-white">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Contact
