import React from 'react'
import './auth.css'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  return <>
  <div className="login-page">
    <div className="login-container">
      <form action="" className="login-form">
        <h1>Welcome to Recipe App</h1>
        <p>New Here? <span className='signup-span' onClick={()=>navigate('/signup')}>Signup...!</span></p>
        <label htmlFor="email">Email</label>
        <input type="email"  name='email' />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' />
        <div className='forgot-div'>
          <h3 onClick={()=>navigate('/forgot-password')}>Forgot Password ?</h3>
        </div>
        <button className='login-button'>Login</button>
      </form>
    </div>
  </div>
  </>
}

export default Login