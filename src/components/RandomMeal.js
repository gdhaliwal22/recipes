import React, { useEffect, useState } from "react";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const RandomMeal = () => {
  const [meal, setMeal] = useState(undefined);

  useEffect(() => {
    // fetch(API_URL)
    //   .then((res) => res.json())
    //   .then((res) => setMeal(res.meals[0]));

    async function getMeal() {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMeal(data.meals[0]);
    }
    getMeal();
  }, []);

  if (!meal) return null;

  const { strMeal, strMealThumb, strInstructions, strArea, strCategory } = meal;

  return (
    <div className="meal">
      <div className="meal-img">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="meal-details">
        <h3 className="meal-title">{strMeal}</h3>
        <p className="meal-instruction">
          {strInstructions.substring(0, 200) + "..."}
        </p>
        <ul className="meal-info">
          <li>
            Category:
            <strong> {strCategory}</strong>
          </li>
          <li>
            Area:
            <strong> {strArea}</strong>
          </li>
        </ul>
        <button className="btn">
          View Recipe <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default RandomMeal;
