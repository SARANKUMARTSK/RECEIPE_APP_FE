import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

function SearchBar({mode,setMode}) {
  return <>
    <div className={`search-bar ${mode?"bg-dark":"bg-light"}`}>
      <div className="input-container">
        <select name="" id="">
          <option value="">Vegetarian</option>
          <option value="">Non-Vegetarian</option>
          <option value="">Ice-Creams</option>
          <option value="">Snacks</option>
          <option value="">Cakes</option>
        </select>

        <div className='search-bar-input'>
          <input type="text" placeholder='Search Receipe' />
          <div className='search-button-icon-top'><SearchIcon/></div>
          <div className='search-logo-top'><LocalDiningIcon/></div>
        </div>
      </div>
    </div>
  </>
}

export default SearchBar