import React from 'react'
import LunchDiningTwoToneIcon from '@mui/icons-material/LunchDiningTwoTone';

function Footer({mode,setMode}) {
  return <>
  <div className={`footer ${mode?"bg-dark":"bg-light"}`}>
  <div className="footer-container">
    <h1>Choose your health preference.</h1>
    <p>Choosing your health preference is an important step towards axhieving a healthier lifestyle</p>
    <div className="button-grouping">
            <button>Wheat-Free</button>
            <button>Vegetarian</button>
            <button>Tree-Nut-Free</button>
            <button>Sugar-Conscious</button>
            <button>Red-Meat-Free</button>
            <button>Peanut-Free</button>
            <button>Dairy-Free</button>
            <button>Gluten-Free</button>
            <button>Low-Carb</button>
            <button>Organic</button>
            <button>Non-GMO</button>
            <button>Low-Calorie</button>
            <button>High-Fiber</button>
            <button>Plant-Based</button>
            <button>Locally-Sourced</button>
            <button>Whole30</button>
            <button>Keto-Friendly</button>
            <button>Halal</button>
            <button>Kosher</button>
            <button>Soy-Free</button>
            <button>Shellfish-Free</button>
            <button>MSG-Free</button>
            <button>Artificial-Color-Free</button>
            <button>Preservative-Free</button>
            <button>Low-Sodium</button>
    </div>
  </div>

  </div>
  <div className="copyRights">
  <div>Copyright &#169; 2024 , AllRights Reserved</div>
  </div>
  </>
}

export default Footer