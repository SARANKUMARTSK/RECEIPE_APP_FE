import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import ReceipeList from './pages/ReceipeList'
import SavedReceipe from './pages/SavedReceipe'
import DetailedView from './pages/DetailedView'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'

function App() {
  let [mode,setMode] = useState(true)

  return <>

  <BrowserRouter>
        <Routes>
            <Route path='landing-page' element={<LandingPage mode={mode} setMode={setMode}/>}/>
            <Route path='receipes' element={<ReceipeList  mode={mode} setMode={setMode}/>}/>
            <Route path='saved-receipes' element={<SavedReceipe mode={mode} setMode={setMode}/>}/>
            <Route path='detailed-view' element={<DetailedView mode={mode} setMode={setMode}/>}/>


            <Route path='' element={<Navigate to={'/landing-page'}/>}/>
            <Route path='*' element={<ErrorPage/>}/>


        </Routes>
  </BrowserRouter>
  
  <div className="wrapper">
  
  
  </div>
  
   
  </>
}

export default App