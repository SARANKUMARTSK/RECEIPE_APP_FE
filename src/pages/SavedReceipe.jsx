import React, { useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import Topbar from '../components/Topbar';
import SearchBar from '../components/SearchBar';
import Receipe from '../components/Recipe';
import axios from 'axios';
import { API_URL } from '../App';

function SavedReceipe({mode,setMode}) {

  let [data,setData] = useState([])

  let id = sessionStorage.getItem("userId")
  let savedRecipe = async()=>{
    try {
      let user = await axios.get(`${API_URL}/user/${id}`,{
        headers: {
          Authorization: `Bearer ${token}` 
        }
      })
      setData(user.data.user.savedList)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    savedRecipe()
  },[])
  return<>
  <Topbar mode={mode} setMode={setMode}/>
  <SearchBar mode={mode} setMode={setMode}/>
   <div className={`receipe-list-container ${mode?"bg-dark":"bg-light"}`}>
    <Receipe data={data}/>
  </div>
  </>
}

export default SavedReceipe