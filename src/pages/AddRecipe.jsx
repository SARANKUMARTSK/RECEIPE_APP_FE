import React, { useState } from 'react'
import Topbar from '../components/Topbar'
import './pages.css'
import axios from 'axios'
import { API_URL } from '../App'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
function AddReceipe({mode,setMode}) {

  let [type,setType] = useState("")
  let [calouries,setColouries] = useState("")
  let [category,setCategory] = useState("")
  let [description,setDescription] = useState("")
  let [guide,setGuide] = useState("")
  let [ingredientsCount,setIngredientsCount] = useState("")
  let [ingredients,setIngredients] = useState("")
  let [memberCount,setMemberCount] = useState("")
  let [recipeImage,setRecipeImage] = useState("")
  let [timeRequired,setTimeRequired] = useState("")
  let [title,setTitle] = useState("")

  const navigate = useNavigate()


  const handleAddRecipe = async(e)=>{
    e.preventDefault()
    try {
      let formData = {
        type,calouries,category,description,guide,ingredients,ingredientsCount,memberCount,recipeImage,timeRequired,title
      }
      let res = await axios.post(`${API_URL}/recipe`,formData)
      toast.success(res.data.message)
      navigate('/landing-page')
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message||"Internal Server Error")
    }
  }


  return <>
  <Topbar mode={mode} setMode={setMode}/>
  <div className={`add-recipe-page ${mode?"bg-dark":"bg-light"} `}>

    <div className="add-recipe-container">
        <h2>Add Your Recipe Here &#127789;  &#127828; &#127848;</h2>
      <form onSubmit={handleAddRecipe} className="add-recipe-form">
        <div className="add-recipe-left">
          <img src="https://t4.ftcdn.net/jpg/05/81/98/37/360_F_581983722_yQPMQkehQqr29VYRUdlrNpGYsmDKoRQ0.jpg" alt="" />
           <div className="upload-container">

           </div>
           <input className='upload-image' type="text" placeholder='Paste Your Image //URL::' onChange={(e)=>setRecipeImage(e.target.value)} />

           <div className="ingredients-input-container">
            <textarea type="text" placeholder='Guide For Gook ' onChange={(e)=>setGuide(e.target.value)} />
           </div>
        </div>
        <div className="add-recipe-right">
            <input type="text" name='title' placeholder='Food Name' onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" name='category' placeholder='Category : Chicken , Ice , Dosa etc...' onChange={(e)=>setCategory(e.target.value)}/>
              <h3>Choose Food Type</h3>

              <div className="food-type-container">
                                <div>
                                    <input onChange={() => setType('Veg')} type="radio" id="Veg" name="type" value="Veg" />
                                    <label htmlFor="Veg">Veg</label>
                                </div>
                                <div>
                                    <input onChange={() => setType('Non-Veg')} type="radio" id="Non-Veg" name="type" value="Non-Veg" />
                                    <label htmlFor="Non-Veg">Non-Veg</label>
                                </div>
                                <div>
                                    <input onChange={() => setType('Snacks')} type="radio" id="Snacks" name="type" value="Snacks" />
                                    <label htmlFor="Snacks">Snacks</label>
                                </div>
                                <div>
                                    <input onChange={() => setType('Beverages')} type="radio" id="Beverages" name="type" value="Beverages" />
                                    <label htmlFor="Beverages">Beverages</label>
                                </div>
                                <div>
                                    <input onChange={() => setType('Dessert')} type="radio" id="Dessert" name="type" value="Dessert" />
                                    <label htmlFor="Dessert">Dessert</label>
                                </div>
                            </div>
          <textarea className='text-area-desc' name="description" placeholder='Type About Your Dish' onChange={(e)=>setDescription(e.target.value)} ></textarea>
           <div className="count-container">
                <input type="number" name='ingredientsCount' placeholder='Total Ingredients' onChange={(e)=>setIngredientsCount(e.target.value)} />
                <input type="number" name='timeRequired' placeholder='Time in Minute' onChange={(e)=>setTimeRequired(e.target.value)}/>
           </div>
           <div className="count-container">
                <input type="number" name='calouries' placeholder='Total Calouries'onChange={(e)=>setColouries(e.target.value)} />
                <input type="number" name='memberCount' placeholder='Members Count' onChange={(e)=>setMemberCount(e.target.value)}/>
           </div>
           <textarea className='text-area-desc' name="description" placeholder='Type ingredients "," Seperated' onChange={(e)=>setIngredients(e.target.value)} ></textarea>
        </div>
        <button className='submit-create-button' type='submit'>Submit</button>
      </form>
    </div>
  </div>
  </>
}

export default AddReceipe

