import React from 'react'
import Topbar from '../components/Topbar'
import './pages.css'
function DetailedView({mode,setMode}) {
  return <>
  <Topbar mode={mode} setMode={setMode}/>
  <div className={`detailed-view ${mode?"bg-dark":"bg-light"}`}>

    <div className="detailed-left-container">
        <img src="https://i2.wp.com/buythiscookthat.com/wp-content/uploads/2017/01/hamreuben-12-of-20-1024x597.jpg" alt="" />
    </div>

    <div className="detailed-right-container">
        <h1>Dinner Tonight : Grilled Cheese Sandwiches with Sauerkraut on Rey Receipe</h1>
        <h4>By Saran Kumar </h4>
        <div className="detailed-cound-container">
            <div>
                <h1>5</h1>
                <p>Ingredients</p>
            </div>
            <div>
                <h1>10</h1>
                <p>Minutes</p>
            </div>
            <div>
                <h1>864</h1>
                <p>Calouries</p>
            </div>
        </div>

        <div className="ingredients-header">
         <h3>Ingredients</h3>
         <h3>For 4 Servings</h3>
        </div>

        <div className="making-guide">
            <ul>
                <li>Bread slices (typically white or wheat)</li>
                <li>Butter or margarine</li>
                <li>Cheese slices (common choices include cheddar, American, Swiss, or provolone)</li>
                <li>Optional: Additional fillings such as sliced tomatoes, cooked bacon, ham, avocado, or caramelized onions</li>
                <li>Optional: Condiments like mustard, mayonnaise, or pesto</li>
                <li>Optional: Seasonings such as garlic powder, paprika, or Italian herbs</li>
                <li>Optional: Cooking oil or cooking spray (if using a griddle or frying pan)</li>
                <li>Optional: Pickles or jalapeño slices for a tangy or spicy kick</li>
                <li>Optional: Fresh herbs like basil or thyme for added flavor</li>
                <li>Optional: Sliced deli meats like turkey or roast beef for a heartier sandwich</li>
            </ul>
            <p>
                To make a delicious grilled cheese sandwich, start by preheating your skillet or griddle over 
                medium heat. While it heats up, butter one side of two slices of bread. Then, place a slice of 
                cheese on the unbuttered side of one bread slice. You can add extras like tomatoes, bacon, or 
                caramelized onions if desired. Top with the second slice of bread, buttered side facing out. 
                Carefully transfer the sandwich to the preheated pan and cook for 2-3 minutes on each side until
                 golden brown and crispy, and the cheese is melted. Use a spatula to flip the sandwich halfway 
                 through cooking. Once done, remove from the pan and let it cool for a minute before serving. 
                 Consider adding condiments like mustard or mayo before assembling, and garnish with fresh herbs 
                 or serve with pickles on the side for extra flavor. Enjoy your classic grilled cheese sandwich!
            </p>
            
        </div>
    </div>
  </div>
  </>
}

export default DetailedView