import React from 'react'
import BackToHomeButton from '@/components/back-home-button'

export default function login() {
  return (
    <div className= 'container-center bg-white w-2/4 h-2/4 top-20 absolute left-1/4' >
      <form>
        <div>
        <h1>Login</h1>
        <label htmlFor="User" >User: </label>
        <input type="text" id="User" name="name" required ></input>
        </div>

        <div>
        <label htmlFor="Password" >Password: </label>
        <input type="password" id="Password" name="password" required ></input>
        </div>

        <button type='submit'> Sign in </button>
      </form>
      <a href='/createUser'> No login? Register Now</a>

      <BackToHomeButton/> 
    </div>

  )
}
