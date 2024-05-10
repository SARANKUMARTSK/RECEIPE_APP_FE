import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import AboutSearch from '../components/AboutSearch'
import Footer from '../components/Footer'
import axios from 'axios'
import { API_URL } from '../App'
import Recipe from '../components/Recipe'
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import '../components/components.css'

function LandingPage({mode,setMode}) {
   
    let [veg,setveg] = useState([])
    let [nonVeg,setNonVeg] = useState([])
    let [snacks,setSnacks] = useState([])
    let [veverages,setVeverages] = useState([])
    let [dessert,setDessert] = useState([])

    let fetchData = async()=>{
        try {
            let res = await axios.get(`${API_URL}/recipe`)
            let data = res.data.recipe
            let veg = data.filter((e)=>{
                if(e.type==="Veg"){
                    setveg(e)
                }
                if(e.type==="Non-Veg"){
                    setNonVeg(e)
                }
                if(e.type==="Snacks"){
                    setSnacks(e)
                }
                if(e.type==="Veverages"){
                    setVeverages(e)
                }
                if(e.type==="Dessert"){
                    setDessert(e)
                }
            })
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
       fetchData()
    },[])

  return <>
  <Topbar mode={mode} setMode={setMode}/> 
  <AboutSearch mode={mode} setMode={setMode}/>
  {/* _____________________________________________________________________________________________________________ */}

  <div className={`center ${mode?"bg-dark":"bg-light"} p-top-bot-20`}>
      <h2 style={{color:"orangered"}}>Vegetarian </h2>
  </div>
        <div className={`feature-container ${mode?"bg-dark":"bg-light"}`}>
        <div className="feature-list">
            <Recipe data={veg}/>
            <div className="extention">
                    <ReadMoreOutlinedIcon/>
                    <h1> More..</h1> 
            </div>
        </div>
        </div>
  {/* ______________________________________________________________________________________________________________________ */}
  <div  className={`center ${mode?"bg-dark":"bg-light"} p-top-bot-20`}>
      <h2 style={{color:"orangered"}}>Non Vegetarian</h2>
  </div>
   <div className={`feature-container ${mode?"bg-dark":"bg-light"}`}>
        <div className="feature-list">
            <Recipe data={veg}/>
            <div className="extention">
                    <ReadMoreOutlinedIcon/>
                    <h1> More..</h1> 
            </div>
        </div>
        </div>
  {/* ______________________________________________________________________________________________________________________ */}
  <div  className={`center ${mode?"bg-dark":"bg-light"} p-top-bot-20`}>
      <h2 style={{color:"orangered"}}>Snacks</h2>
  </div>
   <div className={`feature-container ${mode?"bg-dark":"bg-light"}`}>
        <div className="feature-list">
            <Recipe data={veg}/>
            <div className="extention">
                    <ReadMoreOutlinedIcon/>
                    <h1> More..</h1> 
            </div>
        </div>
        </div>
  {/* ______________________________________________________________________________________________________________________ */}
  <div  className={`center ${mode?"bg-dark":"bg-light"} p-top-bot-20`}>
      <h2 style={{color:"orangered"}}>Veverages</h2>
  </div>
   <div className={`feature-container ${mode?"bg-dark":"bg-light"}`}>
        <div className="feature-list">
            <Recipe data={veg}/>
            <div className="extention">
                    <ReadMoreOutlinedIcon/>
                    <h1> More..</h1> 
            </div>
        </div>
        </div>
  {/* ______________________________________________________________________________________________________________________ */}
  <div className={`center ${mode?"bg-dark":"bg-light"} p-top-bot-20`}>
      <h2 style={{color:"orangered"}}>Dessert</h2>
  </div>
   <div className={`feature-container ${mode?"bg-dark":"bg-light"}`}>
        <div className="feature-list">
            <Recipe data={veg}/>
            <div className="extention">
                    <ReadMoreOutlinedIcon/>
                    <h1> More..</h1> 
            </div>
        </div>
        </div>
  {/* ______________________________________________________________________________________________________________________ */}

  <Footer mode={mode} setMode={setMode}/>
  </>
}

export default LandingPage