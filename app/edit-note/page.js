'use client'
import Form from '@components/Form'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
const page = () => {
  const [myNotes, setMyNotes] = useState({ title: "", description: "" });
  const searchParams = useSearchParams();
  const noteID = searchParams.get("id");
  const router = useRouter()
  const { data: session } = useSession();

  useEffect(() => {
    const fetchNotes = async()=>{
      const response = await fetch(`/api/userNotes/${session?.user.id}/${noteID}`);
      const data = await response.json();
      setMyNotes(data[0])
    }
    if (session?.user.id) fetchNotes();
  }, [session?.user.id])
  
  const updateNote =async (e) => {
    e.preventDefault()
    try {                          
      const response = await fetch(`/api/userNotes/${session?.user.id}/${noteID}`, {
        method: "PATCH",
        body: JSON.stringify({title: myNotes.title,description: myNotes.description}),
      });
      if(response.status === 200){
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Form type='Edit'  myNotes={myNotes} setMyNotes={setMyNotes} handleSubmit={updateNote}/>
    </>
  )
}

export default page