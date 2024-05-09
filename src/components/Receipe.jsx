import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import { useNavigate } from 'react-router-dom';

function Receipe({mode,setMode}) {

  let navigate = useNavigate()
  return <>
     <div onClick={()=>navigate('/detailed-view')} className="feature">
          <img src="https://vanitascorner.com/wp-content/uploads/2018/10/Ulli-Karam-Dosa.jpg" 
          alt="https://png.pngtree.com/png-clipart/20210413/ourmid/pngtree-dining-logo-design-png-image_3205621.jpg" />
          <h4>Spicy Dosa With Tomato Chatni </h4>
          <div className="space-between">
            <div className='center'><AccessTimeIcon/>&nbsp;20 min</div>
            <div><BookmarkAddOutlinedIcon/></div>
          </div>
      </div>
  </>
}

export default Receipe