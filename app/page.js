'use client'

import React from 'react'
import {useSession} from "next-auth/react"
import TaskList from '@/components/TaskList'
import Stats from '@/components/Stats'
import NewTask from '@/components/NewTask'



const Home = () => {
    const {data: session, status} = useSession()
    if(status !== 'authenticated'){
        return <p className='text-center'>Sign in to start mangage your tasks.</p>
    }
  return (
    <section className='mx-auto max-w-screen-xl py-6'>
        <NewTask />
        <div className='flex items-center'>
        <Stats />
        </div>
        <TaskList />
    </section>
  )
}

export default Home