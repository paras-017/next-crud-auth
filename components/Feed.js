'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

    const Feed = () => {
    const [myNotes, setMyNotes] = useState([])
    const { data: session } = useSession();
    useEffect(() => {
      const fetchNotes = async()=>{
        const response = await fetch(`/api/users/${session?.user.id}/notes`);
        const data = await response.json();
        console.log(data)
        setMyNotes(data)
      }
      if (session?.user.id) fetchNotes();
    }, [session?.user.id])
    
const handleEdit =()=>{}
const handleDelete =()=>{}  


  return (
    <section className='w-full   flex justify-center '>
  <div className="flex mt-[3%] w-3/4 flex-col ">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">Id</th>
              <th scope="col" className="px-6 py-4">Title</th>
              <th scope="col" className="px-6 py-4">Description</th>
              <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
              {myNotes.map((note , index)=>(
                <tr className="border-b dark:border-neutral-500" key={index}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{note.title}</td>
                    <td className="whitespace-nowrap px-6 py-4">{note.description}</td>
                    <td className="whitespace-nowrap px-6 py-4 flex gap-2">
            <button  type='button' className="action-edit-btn" onClick={handleEdit}>Edit</button>
                    <button className='action-delete-btn' onClick={handleDelete}>Delete</button>
                    </td>
                </tr>
              ))}
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </section>
  )
}

export default Feed