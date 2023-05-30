'use client'
import Form from '@components/Form'
import React, { useState } from 'react'

const page = () => {
  const [post, setPost] = useState({title:'', description:''})
  return (
    <Form type='Create' post={post} setPost={setPost}/>
  )
}

export default page