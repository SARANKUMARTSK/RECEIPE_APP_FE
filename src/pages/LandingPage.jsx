import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import AboutSearch from '../components/AboutSearch'
import Footer from '../components/Footer'
import axios from 'axios'
import { API_URL } from '../App'
import Recipe from '../components/Recipe'
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import '../components/components.css'
import { useNavigate } from 'react-router-dom'

function LandingPage({mode,setMode}) {
    const navigate = useNavigate()
    let [veg,setveg] = useState([])
    let [nonVeg,setNonVeg] = useState([])
    let [snacks,setSnacks] = useState([])
    let [veverages,setVeverages] = useState([])
    let [dessert,setDessert] = useState([])

let fetchData = async () => {
    try {
        let res = await axios.get(`${API_URL}/recipe`,{
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });
        let data = res.data.recipe;

        let vegRecipes = [];
        let nonVegRecipes = [];
        let snacksRecipes = [];
        let beveragesRecipes = [];
        let dessertRecipes = [];

        data.forEach((e) => {
            if (e.type === "Veg") {
                vegRecipes.push(e);
            } else if (e.type === "Non-Veg") {
                nonVegRecipes.push(e);
            } else if (e.type === "Snacks") {
                snacksRecipes.push(e);
            } else if (e.type === "Beverages") {
                beveragesRecipes.push(e);
            } else if (e.type === "Dessert") {
                dessertRecipes.push(e);
            }
        });

        setveg(vegRecipes.slice(0,4))
        setNonVeg(nonVegRecipes.slice(0,4))
        setSnacks(snacksRecipes.slice(0,4))
        setVeverages(beveragesRecipes.slice(0,4))
        setDessert(dessertRecipes.slice(0,4))


    } catch (error) {
        console.log(error);
    }
};
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
            <div onClick={()=>navigate('/receipes')} className="extention">
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
            <Recipe data={nonVeg}/>
            <div onClick={()=>navigate('/receipes')} className="extention">
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
            <Recipe data={snacks}/>
            <div onClick={()=>navigate('/receipes')} className="extention">
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
            <Recipe data={veverages}/>
            <div onClick={()=>navigate('/receipes')} className="extention">
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
            <Recipe data={dessert}/>
            <div onClick={()=>navigate('/receipes')} className="extention">
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