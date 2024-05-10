import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import ReceipeList from './pages/ReceipeList'
import SavedReceipe from './pages/SavedReceipe'
import DetailedView from './pages/DetailedView'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import AddReceipe from './pages/AddReceipe'
function App() {
  let [mode,setMode] = useState(true)

  return <>

  <BrowserRouter>
        <Routes>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='forgot-password' element={<ForgotPassword/>}/>
            <Route path='reset-password' element={<ResetPassword/>}/>
            <Route path='landing-page' element={<LandingPage mode={mode} setMode={setMode}/>}/>
            <Route path='receipes' element={<ReceipeList  mode={mode} setMode={setMode}/>}/>
            <Route path='saved-receipes' element={<SavedReceipe mode={mode} setMode={setMode}/>}/>
            <Route path='detailed-view' element={<DetailedView mode={mode} setMode={setMode}/>}/>
            <Route path='add-recipe' element={<AddReceipe mode={mode} setMode={setMode}/>}/>


            <Route path='' element={<Navigate to={'/login'}/>}/>
            <Route path='*' element={<ErrorPage/>}/>


        </Routes>
  </BrowserRouter>
  
  <div className="wrapper">
  
  
  </div>
  
   
  </>
}

export default App