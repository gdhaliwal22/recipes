import React from "react";
import { RandomMeal } from "./components";

//TODOs
// 1. Search for meals
// 2. Display the results
// 3. Random / Featured meals
// Bonus
// - Favorite recipe

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Featued Meal</h2>
        <RandomMeal />
      </div>
    </div>
  );
}

export default App;
