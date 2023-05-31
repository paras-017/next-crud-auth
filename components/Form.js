'use client'
import React from 'react'

const Form = ({type,handleSubmit,myNotes, setMyNotes}) => {


  return (
    <div className="w-[50rem] mx-auto mt-10 ">
      <h1 className='head_text text-left '>
        <span className='blue_gradient'>{type} Note</span>
      </h1>
      <form className="main-form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="label-form" htmlFor="username">Title</label>
          <input className="input-field" id="username" type="text" placeholder="title" name='title' value={myNotes.title}
           onChange={(e) => setMyNotes({ ...myNotes, title: e.target.value })}/>
        </div>
        <div className="mb-6">
          <label className="label-form" htmlFor="description">Description</label>
          <input className="input-field focus:shadow-outline" id="description" type="text" placeholder='description'  name='description' value={myNotes.description} onChange={(e) => setMyNotes({ ...myNotes, description: e.target.value })} />
        </div>
        <div className="button-form">
          <button className="button" type="submit">{type}</button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Daily-Task. All rights reserved.
      </p>
</div>
  )
}

export default Form