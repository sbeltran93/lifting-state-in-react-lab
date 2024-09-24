// src/components/IngredientList.jsx
import React from "react";
// import App from "../App";


const IngredientList = (props) => {
    return (
            
            <ul>{props.ingredients.map((ingredient) => (
                <li key={ingredient.name} style={{color: ingredient.color}}>
                    {ingredient.name}
                    <button onClick={() => props.addToBurger(ingredient)}>+</button>
                </li>
                ))}
            </ul>
    
    )
  };

  
  export default IngredientList;
  