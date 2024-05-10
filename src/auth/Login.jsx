import React, { useState } from 'react'
import './auth.css'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../App'
import toast from 'react-hot-toast'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()

  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")

  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      let formData = {
        email , password
      }
      let res = await axios.post(`${API_URL}/user/login`,formData)
      if(res.status===200){
        sessionStorage.setItem("name",res.data.name)
        sessionStorage.setItem("email",res.data.email)
        sessionStorage.setItem("userId",res.data.userId)
        sessionStorage.setItem("role",res.data.role)
        sessionStorage.setItem("token",res.data.token)
      }
      toast.success(res.data.message)
      navigate('/landing-page')

    } catch (error) {
      toast.error(error.response.data.message || "Internal Server Error")
    }
  }

  return <>
  <div className="login-page">
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Welcome to Recipe App</h1>
        <p>New Here? <span className='signup-span' onClick={()=>navigate('/signup')}>Signup...!</span></p>
        <label htmlFor="email">Email</label>
        <input type="email"  name='email' onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} />
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