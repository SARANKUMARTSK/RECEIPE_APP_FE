import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import SearchBar from '../components/SearchBar'
import ReceipiesContainer from '../components/RecipiesContainer'
import Receipe from '../components/Recipe'
import axios from 'axios'
import { API_URL } from '../App'
import { useParams } from 'react-router-dom'

function ReceipeList({mode,setMode}) {
  let token = sessionStorage.getItem("token");
  let {title} = useParams()

  let [data,setData] = useState([])

   let serachedRecipe = async()=>{
    try {
      let res = await axios.get(`${API_URL}/recipe/searchByTitle/${title}`,{
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}` 
        }
      })
      setData(res.data.recipes)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
     serachedRecipe()
  },[])
  return <>
  <div className={`receipeList ${mode?"bg-dark":"bg-light"}`}>
    <Topbar mode={mode} setMode={setMode}/>
    {/* <SearchBar mode={mode} setMode={setMode} /> */}
    <div className="searchRecipeContainer">
    <Receipe data={data}/>
    </div>
  </div>
  </>
}

export default ReceipeList