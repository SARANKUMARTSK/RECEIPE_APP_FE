import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import ReceipeList from './pages/RecipeList'
import SavedReceipe from './pages/SavedReceipe'
import DetailedView from './pages/DetailedView'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import AddReceipe from './pages/AddRecipe'
export const API_URL = "http://localhost:8500"

function App() {
  let [mode,setMode] = useState(true)

  return <>

  <BrowserRouter>
        <Routes>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='forgot-password' element={<ForgotPassword/>}/>
            <Route path='reset-password/:token' element={<ResetPassword/>}/>
            <Route path='landing-page' element={<LandingPage mode={mode} setMode={setMode}/>}/>
            <Route path='receipes' element={<ReceipeList  mode={mode} setMode={setMode}/>}/>
            <Route path='saved-receipes' element={<SavedReceipe mode={mode} setMode={setMode}/>}/>
            <Route path='detailed-view/:id' element={<DetailedView mode={mode} setMode={setMode}/>}/>
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



// landing page - display 
// search Components backend
// filter query 
// Double time adding of saved 