import React from 'react'
import Topbar from '../components/Topbar'
import './pages.css'
function AddReceipe({mode,setMode}) {
  return <>
  <Topbar mode={mode} setMode={setMode}/>
  <div className={`add-recipe-page ${mode?"bg-dark":"bg-light"} `}>

    <div className="add-recipe-container">
        <h2>Add Your Recipe Here &#127789;  &#127828; &#127848;</h2>
      <form className="add-recipe-form">
        <div className="add-recipe-left">
          <img src="https://t4.ftcdn.net/jpg/05/81/98/37/360_F_581983722_yQPMQkehQqr29VYRUdlrNpGYsmDKoRQ0.jpg" alt="" />
           <div className="upload-container">

           </div>
           <input className='upload-image' type="file" name="" id="" />

           <div className="ingredients-input-container">
            <textarea type="text" placeholder='Type Ingredients with "," Seperated '/>
           </div>
        </div>
        <div className="add-recipe-right">
            <input type="text" name='title' placeholder='Food Name'/>
            <input type="text" name='category' placeholder='Category : Chicken , Ice , Dosa etc...'/>
              <h3>Choose Food Type</h3>

            <div className="food-type-container">
                  <div>
                    <input type="radio" id="Non-Veg" name="type" value="Non-Veg"  />
                    <label htmlFor="type">Veg</label>
                  </div>
                  <div>
                    <input type="radio" id="Veg" name="type" value="Veg"  />
                    <label htmlFor="type">Non-Veg</label>
                  </div>
                  <div>
                    <input type="radio" id="Snacks" name="type" value="Snacks"  />
                    <label htmlFor="type">Snacks</label>
                  </div>
                  <div>
                    <input type="radio" id="Veverages" name="type" value="Veverages"  />
                    <label htmlFor="type">Veverages</label>
                  </div>
                  <div>
                    <input type="radio" id="Dessert" name="type" value="Dessert"  />
                    <label htmlFor="type">Dessert</label>
                  </div>
          </div>
          <textarea className='text-area-desc' name="description" placeholder='Type About Your Dish' ></textarea>
           <div className="count-container">
                <input type="number" name='ingredientsCount' placeholder='Total Ingredients' />
                <input type="number" name='timeRequired' placeholder='Time in Minute' />
           </div>
           <div className="count-container">
                <input type="number" name='calouries' placeholder='Total Calouries' />
                <input type="number" name='memberCount' placeholder='Members Count' />
           </div>
           <textarea className='text-area-desc' name="description" placeholder='Type About Your Dish' ></textarea>
        </div>
        <button className='submit-create-button'>Submit</button>
      </form>
    </div>
  </div>
  </>
}

export default AddReceipe