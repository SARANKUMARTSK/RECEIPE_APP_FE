import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {API_URL} from '../App'
import toast from 'react-hot-toast';
function AboutSearch() {
  const navigate = useNavigate()
  let token = sessionStorage.getItem("token");
  let [searchTerm,setSearchTerm] = useState("")

  const handleSearch = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/searchRecipe/${searchTerm}`)
    }else{
      toast.error("Please Fill The Search Term")
    }  
  }

 
  let role = sessionStorage.getItem("role")
  
  



  return <>
  <div className="about-search">
    <div className="search-content">
        <h1>Your desired dish?</h1>
        <div>
        <input type="text" placeholder='Search recipes' onChange={(e)=>setSearchTerm(e.target.value)}/>
        <div className='search-button-icon' onClick={handleSearch}><SearchIcon/></div>
        <div className='search-logo'><LocalDiningIcon/></div>
        </div>
        <p>Search any recipe eg., Briyani , Pizza , Burger  </p>
        {
          role==='admin'?<button className='add-recipe-button' onClick={()=>navigate("/add-recipe")}><AddIcon/>Add New Recipe</button>:
          <button className='add-recipe-button' onClick={()=>{toast.error("You are Not Alowed")}}><AddIcon/>Add New Recipe</button>
        }
    </div>
  </div>
  </>
}

export default AboutSearch