import React, { useState } from 'react'
import './auth.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { API_URL } from '../App'
function ForgotPassword() {

  const navigate = useNavigate()
  let [email,setEmail] = useState("")
  
  const handleReset=async(e)=>{
   e.preventDefault();
   try {
    let data = {
      email
    }
    let res = await axios.post(`${API_URL}/user/forgotPassword`,data)
    toast.success(res.data.message||"Mail Successfully Send")
   } catch (error) {
    toast.error(error.response.data.message||"Internal Server Error")
   }
  }
  return <>
  <div className="login-page">
    <div className="login-container">
      <form onSubmit={handleReset} className="login-form">
        <h1>Welcome to Recipe App</h1>
        <p>Remembered? just <span className='signup-span' onClick={()=>navigate('/login')}>Login...!</span></p>
        <label htmlFor="email">Name</label>
        <input type="text"  name='name' />
        <label htmlFor="email">Email</label>
        <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} />
        <div className='forgot-div'>
          
        </div>
        <button type='submit' className='login-button'>Submit</button>
      </form>
    </div>
  </div>
  </>
}

export default ForgotPassword