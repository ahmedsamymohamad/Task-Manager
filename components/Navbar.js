'use client'

import React from 'react'
import {useSession, signIn, signOut} from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const {data: session} = useSession()
  return (
    <header className='px-4 py-5 w-full border-b mb-4'>
        <div className='flex justify-between max-w-screen-xl mx-auto '>
            <Link href={'/'}>TaskManager</Link>
            <div className='flex'>
                {session ? (
                    <>
                    <p className='mr-4'>{session.user.email}</p>
                    <button className="bg-slate-800 text-white py-1 px-2 rounded-[4px]" onClick={() => signOut()}>signOut</button>
                    </>
                ) : (
                    <>
                    <button className="bg-green-700 text-white py-1 px-2 rounded-[4px]" onClick={() => signIn()}>SignIn</button>
                    </>
                )
                
                }
            </div>
        </div>
    </header>
  )
}

export default Navbar