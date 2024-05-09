import React from 'react'
import Topbar from '../components/Topbar'
import AboutSearch from '../components/AboutSearch'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Footer from '../components/Footer'

function LandingPage({mode,setMode}) {
  return <>
  <Topbar mode={mode} setMode={setMode}/> 
  <AboutSearch mode={mode} setMode={setMode}/>
  {/* <Navbar/> */}
  <div className={`center ${mode?"bg-dark":"bg-light"} p-top-bot-20`}>
      <h2 style={{color:"orangered"}}>Vegetarian </h2>
  </div>
  <Features mode={mode} setMode={setMode}/>
  <div  className={`center ${mode?"bg-dark":"bg-light"} p-top-bot-20`}>
      <h2 style={{color:"orangered"}}>Non Vegetarian</h2>
  </div>
  <Features  mode={mode} setMode={setMode}/>
  <div  className={`center ${mode?"bg-dark":"bg-light"} p-top-bot-20`}>
      <h2 style={{color:"orangered"}}>Snacks</h2>
  </div>
  <Features  mode={mode} setMode={setMode}/>
  <div  className={`center ${mode?"bg-dark":"bg-light"} p-top-bot-20`}>
      <h2 style={{color:"orangered"}}>Veverages</h2>
  </div>
  <Features  mode={mode} setMode={setMode}/>
  <div className={`center ${mode?"bg-dark":"bg-light"} p-top-bot-20`}>
      <h2 style={{color:"orangered"}}>Dessert</h2>
  </div>
  <Features  mode={mode} setMode={setMode}/>

  <Footer mode={mode} setMode={setMode}/>
  </>
}

export default LandingPage