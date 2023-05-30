'use client'
import Image from 'next/image'

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession();
   const [providers, setProviders] = useState(null)

 useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
   


  return (
    <nav className=' bg-purple-100'>
      <div className="">
        <div className="flex justify-between h-16 px-10 shadow items-center">
          <div className="flex items-center space-x-8">
            <Link href='/'>
           <Image src='/main_logo.png' height={40} width={50} alt='logo'/>
            </Link>
          </div>
          {session?.user ?  (<>
          <div className="flex space-x-4 items-center">
            <Link href='/create-note' type='button' className="button">Create Note</Link>
            <Link href='/' type='button' onClick={signOut}  className="button" >Sign Out</Link>
            <Link href='/profile'><Image src={session?.user.image} width={37} height={37} className='rounded-full' alt='profile'/></Link>
          </div>
          </>):(<>
          {providers && Object.values(providers).map((provider)=>(
              <button type='button'  key={provider.name} onClick={()=>{signIn(provider.id)}} className="button">Sign In</button>
          ))}
          </>)}
        </div>
      </div>
    </nav>
   
  )
}

export default Navbar