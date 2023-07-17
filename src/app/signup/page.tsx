'use client'

import React, { useState } from 'react'
import {useRouter} from 'next/navigation'
import { Axios } from 'axios'
import Link from 'next/link'


type Props = {}

function SignupPage({}: Props) {
  const [user, setUser] = useState(
    {
    email:"",
    password:"",
    username:""
    }

  )


  const onSignup =async ()=>{

  }


  return (
    <main className='flex flex-col h-[100vh] justify-center items-center'>
      <h1 className='text-2xl font-medium m-2'>
        SignUp
      </h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input className='border-2 border-zinc-600 p-2' type="text" id='username' placeholder='username' value={user.username} onChange={(e)=> {
        setUser({...user, username:e.target.value})
      }} />

<label htmlFor="username">Email</label>
      <input className='border-2 border-zinc-600 p-2' type="email" id='email' placeholder='email' value={user.email} onChange={(e)=> {
        setUser({...user, email:e.target.value})
      }} />

<label htmlFor="password">Password</label>
      <input className='border-2 border-zinc-600 p-2' type="password" id='password' placeholder='password' value={user.password} onChange={(e)=> {
        setUser({...user, password:e.target.value})
      }} />


      <button onClick={onSignup} className='bg-blue-400 px-4 py-2 m-2 rounded-lg'>
        Signup
      </button>

      <Link href="/login" >
        Go to Login Page
      </Link>
    </main>
  )
}

export default SignupPage