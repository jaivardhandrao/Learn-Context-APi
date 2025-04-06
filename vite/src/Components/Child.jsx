import React, { useContext } from 'react';
import FoodContext from '../Contexts/FoodContext';

function Child() {
  const { food, handleChange } = useContext(FoodContext);

  return (
    <>
      <div>Child loves this food --: {food}</div>
      <button onClick={handleChange}>Change me daddy</button>
    </>
  );
}

export default Child;