import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

import useHttp from "../../SetTask/Components/Hooks/useHttp";


const Meals = () => {
 

  
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  )
}

export default Meals