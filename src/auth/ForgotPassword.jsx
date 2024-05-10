import React from 'react'
import './auth.css'
import { useNavigate } from 'react-router-dom'
function ForgotPassword() {

  const navigate = useNavigate()

  return <>
  <div className="login-page">
    <div className="login-container">
      <form action="" className="login-form">
        <h1>Welcome to Recipe App</h1>
        <p>Remembered? just <span className='signup-span' onClick={()=>navigate('/login')}>Login...!</span></p>
        <label htmlFor="email">Name</label>
        <input type="text"  name='name' />
        <label htmlFor="email">Email</label>
        <input type="email" name='email' />
        <div className='forgot-div'>
          
        </div>
        <button className='login-button'>Submit</button>
      </form>
    </div>
  </div>
  </>
}

export default ForgotPassword