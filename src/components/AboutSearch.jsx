import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

function AboutSearch() {
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
    </div>
  </div>
  </>
}

export default AboutSearch