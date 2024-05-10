import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './auth.css'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { API_URL } from '../App';

function SignUp() {
  let [view,setView] = useState(true)
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSignup = async(e)=>{
    e.preventDefault();
    try {
      let formData = {
        name , email , password
      }
      let res = await axios.post(`${API_URL}/user/signup`,formData)
      toast.success(res.data.message||"Signup Success")
      navigate('/login')
    } catch (error) {
      toast.error(error.response.data.message|| "Internal Server Error")
    }
  }
  return <>
  <div className="login-page">
    <div className="login-container">
      <form onSubmit={handleSignup} className="login-form">
        <h1>Welcome to Recipe App</h1>
        <p>Already Have an Account? <span className='signup-span' onClick={()=>navigate('/login')}>Login...!</span></p>

        <label htmlFor="name">Name</label>
        <input type="name"  name='name'  onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="name">Email</label>
        <input type="email"  name='email'onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type={view?"password":"text"} onChange={(e)=>setPassword(e.target.value)} />
        <div className='forgot-div'>
  
        </div>
        <div className='view-password-div ' onClick={()=>setView(!view)}>
         {view?<RemoveRedEyeIcon/>:<VisibilityOffIcon/>}{view? <span>View Password</span>:<span>Hide Password</span>}
        </div>
        <button className='login-button' type='submit'>SignUp</button>
      </form>
    </div>
  </div>
  </>
}

export default SignUp