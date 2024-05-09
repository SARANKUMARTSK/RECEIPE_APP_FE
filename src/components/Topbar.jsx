import React from 'react'
import './components.css'
import LunchDiningTwoToneIcon from '@mui/icons-material/LunchDiningTwoTone';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useNavigate } from 'react-router-dom';

function Topbar({mode,setMode}) {

  const navigate = useNavigate()

  return <>
  <div className={`topbar ${mode?"bg-dark":"bg-light"}`}>
    <div onClick={()=>navigate('/landing-page')} className='top-logo'><LunchDiningTwoToneIcon/>RecipeMate</div>
    <div className='top-nav'>
      <ul>
        <li onClick={()=>navigate('/landing-page')} >Home</li>
        <li onClick={()=>navigate('/receipes')}>Recipes</li>
      </ul>
    </div>
    <div className='top-saved'><button onClick={()=>navigate('/saved-receipes')}>Saved Recipes<BookmarkAddOutlinedIcon/></button>&nbsp;<NightlightRoundIcon onClick={()=>setMode(!mode)} /></div>
  </div>
  </>
}

export default Topbar