'use client'
import { submitData } from '@app/create-note/action'
import { useSession } from "next-auth/react";
import React from 'react'

const Form = () => {
  const { data: session } = useSession();
const handleSubmit =async (formData)=>{
  try {
    const response = await submitData({
      creator:session?.user.id,
      title:formData.get('title'),
      description:formData.get('description'),
    })
    if(response.status){
      window.location.href = "/";
    }
    console.log(response)
  } catch (error) {
    
  }
  console.log('hello')
}

  return (
    <div className="w-[50rem] mx-auto mt-10 ">
  <form className="main-form" action={handleSubmit}>
    <div className="mb-4">
      <label className="label-form" htmlFor="username">Title</label>
      <input className="input-field" id="username" type="text" placeholder="title" name='title'/>
    </div>
    <div className="mb-6">
      <label className="label-form" htmlFor="password">Description</label>
      <input className="input-field focus:shadow-outline" id="password" type="text" placeholder='description'  name='description'/>
    </div>
    <div className="button-form">
      <button className="button" type="submit">
        Create
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Daily-Task. All rights reserved.
  </p>
</div>
  )
}

export default Form