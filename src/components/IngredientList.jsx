// src/components/IngredientList.jsx
import React from "react";


const IngredientList = (props) => {
    return (
        <div>
            <h1>Build your Burger!</h1>
            <ul>{props.ingredients.map((ingredient) => (
                <li key={ingredient.name} style={{color: ingredient.color}}>
                    {ingredient.name}
                    <button onClick={() => addToBurger(ingredient)}>+</button>
                </li>
                ))}
            </ul>
        </div>
    )
  };


  
  export default IngredientList;
  