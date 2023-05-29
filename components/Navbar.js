'use client'
import Image from 'next/image'

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from 'react';
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
    <nav>
      <div className="">
        <div className="flex justify-between h-16 px-10 shadow items-center">
          <div className="flex items-center space-x-8">
           <Image src='/main_logo.png' height={40} width={50} alt='logo'/>
          </div>
          {session?.user ?  (<>
          <div className="flex space-x-4 items-center">
            <button type='button' className="button">Create Note</button>
            <button  type='button' onClick={signOut}  className="button">Sign out</button>
            <Link href='/profile'><Image src={session?.user.image} width={37} height={37} className='rounded-full' alt='profile'/></Link>
          </div>
          </>):(<>
          {providers && Object.values(providers).map((provider)=>{
              <button type='button'  key='provider.name' onClick={()=>{signIn(provider.id)}} className="">Sign In</button>
          })}
          </>)}
        </div>
      </div>
    </nav>
   
  )
}

export default Navbar