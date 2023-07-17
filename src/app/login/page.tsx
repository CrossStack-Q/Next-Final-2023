'use client'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

function LoginPage({ }: Props) {
    const [user, setUser] = useState(
        {
        email:"",
        password:"",
        username:""
        }
    
      )
    
    
      const onLogin =async ()=>{
    
      }
    
    
      return (
        <main className='flex flex-col h-[100vh] justify-center items-center'>
          <h1 className='text-2xl font-medium m-2'>
            LogIn
          </h1>
          <hr />
          
    
    <label htmlFor="username">Email</label>
          <input className='border-2 border-zinc-600 p-2' type="email" id='email' placeholder='email' value={user.email} onChange={(e)=> {
            setUser({...user, email:e.target.value})
          }} />
    
    <label htmlFor="password">Password</label>
          <input className='border-2 border-zinc-600 p-2' type="password" id='password' placeholder='password' value={user.password} onChange={(e)=> {
            setUser({...user, password:e.target.value})
          }} />
    
    
          <button onClick={onLogin} className='bg-blue-400 px-4 py-2 m-2 rounded-lg'>
            Login
          </button>
    
          <Link href="/signup" >
            Go to SignUp Page
          </Link>
        </main>
    )
}

export default LoginPage