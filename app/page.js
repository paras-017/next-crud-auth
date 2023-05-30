'use client'
import React from 'react'
import { useSession } from "next-auth/react";
const page = () => {
  const { data: session } = useSession();
  return (
   <section className=' w-full h-screen bg-purple-50 flex justify-center' >
    <div className='mt-[15rem] text-center w-[32rem] '>
    <h1 className='italic font-bold font-mono text-5xl leading-tight"' >Daily Task of day</h1>
    <p className=' font-semibold text-base text-gray-700 my-5'>we makes it easier for a team or individiual to  plan their work by using our app</p>
    <div>
    <p className='font-bold  text-4xl leading-tight"'>To get started, Please SignIn</p>
    <p className='font-semibold text-gray-700 text-2xl'>& enjoy all of our cool <span className='text-purple-400'>feature</span></p>
    </div>
    </div>
   </section>
  )
}

export default page