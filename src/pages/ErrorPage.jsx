import React from 'react'
import {useNavigate} from 'react-router-dom'
function ErrorPage() {

  const navigate = useNavigate()
  return <>
  <div className="error-page">
    <div className="error-page-container">
      
        <div className="heading-error">
           <img src="https://media.istockphoto.com/id/477465228/photo/number-four-4-balloon-font.jpg?s=170x170&k=20&c=cTKXIMDvdtGdZXyLqXOVhi-CTUtgkLY-IdYhZ0CArSs=" alt="" />
           <img className='sandwitch-image' src="https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" alt="" />
           <img src="https://media.istockphoto.com/id/477465228/photo/number-four-4-balloon-font.jpg?s=170x170&k=20&c=cTKXIMDvdtGdZXyLqXOVhi-CTUtgkLY-IdYhZ0CArSs=" alt="" />
        </div>
        <div className="not-found">
          PAGE NOT FOUND !!!
        </div>
        <p>The page you are looking for might have been removed had it's name changed or temporarily unavailable</p>
        <button className='not-found-button' onClick={()=>navigate('/login')} >GO TO HOMEPAGE</button>
    </div>
  </div>
  </>
}

export default ErrorPage