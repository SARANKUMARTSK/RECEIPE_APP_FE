import React, { useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {API_URL} from '../App'
import toast from 'react-hot-toast';

function Receipe({mode,setMode,data}) {

  let navigate = useNavigate()
  let userId = sessionStorage.getItem("userId")

  

  const handleSaved =async(e)=>{
     try {
      let res = await axios.post(`${API_URL}/user/${userId}/recipe/${e._id}`)
      toast.success(res.data.message||"Saved Successfully")
     } catch (error) {
      console.log(error);
     }
  }
  
  return <>
     {
      data.length?(data.map((e,i)=>{
        return <div key={i}  className="feature">
        <img onClick={()=>navigate(`/detailed-view/${e._id}`)} src={e.recipeImage}/>
        <h4 onClick={()=>navigate(`/detailed-view/${e._id}`)}>{e.title} </h4>
        <div className="space-between">
          <div className='center'><AccessTimeIcon/>&nbsp;{e.timeRequired}</div>
          <div onClick={()=>handleSaved(e)}><BookmarkAddOutlinedIcon/></div>
        </div>
    </div>
      })):"No Recipe Found"
     }
  </>
}

export default Receipe