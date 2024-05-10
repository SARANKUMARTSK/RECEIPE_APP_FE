import React ,{ useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import Receipe from './Recipe';
import axios from 'axios'
import {API_URL} from '../App'

function ReceipiesContainer() {

  let [data,setData] = useState([])
 
  const getRecipeData = async()=>{
    try {
      let res = await axios.get(`${API_URL}/recipe`)
      setData(res.data.recipe)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
   getRecipeData()
  },[])


  return <>
  <div className="receipe-list-container">
  <Receipe data={data}/>
  </div>
  </>
}

export default ReceipiesContainer