// src/App.jsx
import { useState } from 'react';
import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

const App = () => {
  const [stack, setStack] = useState([]);

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const addToBurger = (ingredient) => {
  setStack({ ...stack, ingredient });
};

const removeFromBurger = (ingredientRemoved) => {
  setStack(stack.filter((ingredient => ingredient.name !== ingredientRemoved.name)));
};

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList 
          ingredients={availableIngredients}
          addToBurger={addToBurger}
      />
      <BurgerStack 
        stack={stack}
        removeFromBurger={removeFromBurger}
      />
      </section>
    </main>
  );
};


export default App;
