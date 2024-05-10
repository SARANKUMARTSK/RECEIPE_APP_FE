import React, { useState } from 'react'
import './auth.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import toast from 'react-hot-toast'
import axios from 'axios'
import {API_URL} from '../App'
import { useNavigate, useParams } from 'react-router-dom';

function ResetPassword() {

  let [view,setView] = useState(true)
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  const navigate = useNavigate()
  let {token} = useParams()

  const handleReset = async(e)=>{
    e.preventDefault();
    try {
      let formData = {
        email , password
      }
      let res = await axios.post(`${API_URL}/user/resetPassword/${token}`,formData)
      toast.success(res.data.message || "Password Reset Successfull")
      navigate('/login')
    } catch (error) {
      toast.error(error.response.data.message ||"Internal Server Error...")
    }
  }

  return <>
  <div className="login-page">
    <div className="login-container">
      <form onSubmit={handleReset} className="login-form">
        <h1>Welcome to Recipe App</h1>
        <p>Remembered? just <span className='signup-span'>Login...!</span></p>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="password">Enter New Password</label>
        <input type={view?"password":"text"} onChange={(e)=>setPassword(e.target.value)}/>
        <div className='view-password-div ' onClick={()=>setView(!view)}>
         {view?<RemoveRedEyeIcon/>:<VisibilityOffIcon/>}{view? <span>View Password</span>:<span>Hide Password</span>}
        </div>
        <button type='submit' className='login-button'>Submit</button>
      </form>
    </div>
  </div>
  </>
}

export default ResetPassword