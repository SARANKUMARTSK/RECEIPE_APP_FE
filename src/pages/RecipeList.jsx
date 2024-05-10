import React from 'react'
import Topbar from '../components/Topbar'
import SearchBar from '../components/SearchBar'
import ReceipiesContainer from '../components/RecipiesContainer'

function ReceipeList({mode,setMode}) {
  return <>
  <div className={`receipeList ${mode?"bg-dark":"bg-light"}`}>
    <Topbar mode={mode} setMode={setMode}/>
    <SearchBar mode={mode} setMode={setMode} />
    <ReceipiesContainer/>
  </div>
  </>
}

export default ReceipeList