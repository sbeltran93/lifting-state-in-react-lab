// src/components/IngredientList.jsx
import React from "react";


const IngredientList = ({ ingredients, addToBurger }) => {
    return (
        <div>
            <h1>Build your Burger!</h1>
            <ul>{ingredients.map((ingredient) => {
                <li key={ingredient.name} style={{color: ingredient.color}}>
                    {ingredient.name}
                    <button onClick={() => addToBurger(ingredient)}>+</button>
                </li>
                })}
            </ul>;
        </div>
    )
  };
  
  export default IngredientList;
  