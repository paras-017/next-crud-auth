'use client'
import Form from '@components/Form'
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import { useState } from 'react'

const page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [myNotes, setMyNotes] = useState({ title: "", description: "" });
  
  const createNote =async (e) => {
    e.preventDefault()
    console.log('create Note function')
    try {                          
      const response = await fetch(`/api/users/${session?.user.id}/notes`, {
        method: "POST",
        body: JSON.stringify({
          creator: session?.user.id,
          title: myNotes.title,
          description: myNotes.description,
        }),
      });
      if(response.status === 201){
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
  <Form type='Create' handleSubmit={createNote} myNotes={myNotes} setMyNotes={setMyNotes}/>
  )
}

export default page