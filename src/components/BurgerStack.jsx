// `src/components/BurgerStack.jsx`
import React from "react";


const BurgerStack = (stack, removeFromBurger) => {
    return (
        <div>
            <h2>Your Burger Stack</h2>
            <ul>
                {stack.map((ingredient) => {
                    <li key={ingredient.name} style={{ color: ingredient.color }}>
                        <button onClick={() => removeFromBurger(ingredient.name)}>X</button>
                    </li>
                })}
            </ul>;
        </div>
    )
  };
  
  export default BurgerStack;
  