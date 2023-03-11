import React, { useCallback, useState, useEffect } from "react";
import {
  MealsSection,
  MealsListWrapper,
  MealsUl,
  MealsList,
} from "./AvailableMealsStyles";

import { LoadMessage } from "../../StarWars/Indexstyles";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch("https://restaurant-3dfaf-default-rtdb.firebaseio.com/meals.json"
      );
      if(!response.ok){
        throw new Error("Error getting food list!");
      }
      const responseData = await response.json();
      const loadedMeals = [];

      for (const mealKey in responseData){
        loadedMeals.push({
          id: mealKey,
          name: responseData[mealKey].name,
          description: responseData[mealKey].description,
          price: responseData[mealKey].price
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false)
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [])

  useEffect(()=>{
    fetchMealsHandler()
  }, [])

  let content = <LoadMessage>No meals available.</LoadMessage>;


  if (error) {
    content = <LoadMessage>{error}</LoadMessage>;
  }

  if (isLoading) {
    content = <LoadMessage>Loading...</LoadMessage>;
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
    ));

    if (meals.length > 0) {
      content = <MealsUl>{mealsList}</MealsUl>;
    }
  

  return (
    <>
      <MealsSection>
        <MealsListWrapper>
          {content}
        </MealsListWrapper>
      </MealsSection>
    </>
  );
};

export default AvailableMeals;
