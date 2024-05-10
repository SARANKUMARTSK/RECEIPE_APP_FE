import React, { useState } from 'react'
import './auth.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function ResetPassword() {

  let [view,setView] = useState(true)

  return <>
  <div className="login-page">
    <div className="login-container">
      <form action="" className="login-form">
        <h1>Welcome to Recipe App</h1>
        <p>Remembered? just <span className='signup-span'>Login...!</span></p>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' />
        <label htmlFor="password">Enter New Password</label>
        <input type={view?"password":"text"} />
        <div className='view-password-div ' onClick={()=>setView(!view)}>
         {view?<RemoveRedEyeIcon/>:<VisibilityOffIcon/>}{view? <span>View Password</span>:<span>Hide Password</span>}
        </div>
        <button className='login-button'>Submit</button>
      </form>
    </div>
  </div>
  </>
}

export default ResetPassword