// `src/components/BurgerStack.jsx`
import React from "react";


const BurgerStack = (props) => {
    return (

        <div>
            <h2>Your Burger Stack</h2>
            <ul>
                {props.stack.map((ingredient) => (
                    <li key={ingredient.name} style={{ color: ingredient.color }}>
                        <button onClick={() => props.removeFromBurger(ingredient)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
  };
  
  export default BurgerStack;
  