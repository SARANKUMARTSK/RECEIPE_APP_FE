import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
function AboutSearch() {
  const navigate = useNavigate()
  return <>
  <div className="about-search">
    <div className="search-content">
        <h1>Your desired dish?</h1>
        <div>
        <input type="text" placeholder='Search recipes' />
        <div className='search-button-icon'><SearchIcon/></div>
        <div className='search-logo'><LocalDiningIcon/></div>
        </div>
        <p>Search any recipe eg., Briyani , Pizza , Burger  </p>
        <button className='add-recipe-button' onClick={()=>navigate("/add-recipe")}><AddIcon/>Add New Recipe</button>
    </div>
  </div>
  </>
}

export default AboutSearch