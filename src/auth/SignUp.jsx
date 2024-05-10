import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './auth.css'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  let [view,setView] = useState(true)
  const navigate = useNavigate()
  return <>
  <div className="login-page">
    <div className="login-container">
      <form action="" className="login-form">
        <h1>Welcome to Recipe App</h1>
        <p>Already Have an Account? <span className='signup-span' onClick={()=>navigate('/login')}>Login...!</span></p>

        <label htmlFor="name">Name</label>
        <input type="name"  name='name' />
        <label htmlFor="name">Email</label>
        <input type="email"  name='email' />
        <label htmlFor="password">Password</label>
        <input type={view?"password":"text"} />
        <div className='forgot-div'>
  
        </div>
        <div className='view-password-div ' onClick={()=>setView(!view)}>
         {view?<RemoveRedEyeIcon/>:<VisibilityOffIcon/>}{view? <span>View Password</span>:<span>Hide Password</span>}
        </div>
        <button className='login-button'>SignUp</button>
      </form>
    </div>
  </div>
  </>
}

export default SignUp