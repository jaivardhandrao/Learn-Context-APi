import React, { createContext, useState, useEffect } from 'react';

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [food, setFood] = useState("Sushi");

  const handleChange = () => {
    setFood((prev) => (prev === "Sushi" ? "Ramen" : "Sushi"));
  };

  return (
    <FoodContext.Provider value={{ food, setFood, handleChange }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContext;