'use client'
import Form from '@components/Form'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [myNotes, setMyNotes] = useState({ title: "", description: "" });
  const { data: session } = useSession();
  useEffect(() => {
    const fetchNotes = async()=>{
      const response = await fetch(`/api/users/${session?.user.id}/notes`);
      const data = await response.json();
      console.log(data)
    }
    if (session?.user.id) fetchNotes();
  }, [session?.user.id])
  
  
  const handleEdit = ()=>{} 
  const handleDelete = ()=>{}

  return (
    <>
    <Form type='Edit' handleEdit={handleEdit} handleDelete={handleDelete} myNotes={myNotes} setMyNotes={setMyNotes}/>
    </>
  )
}

export default page