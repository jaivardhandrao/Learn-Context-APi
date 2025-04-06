// App.jsx
import React from 'react';
import GrandParent from './Components/GrandParent.jsx';
import { FoodProvider } from './Contexts/FoodContext.jsx';

function App() {
  return (
    <FoodProvider>
      <GrandParent />
    </FoodProvider>
  );
}

export default App;