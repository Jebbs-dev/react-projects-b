import React from 'react'
import { SummarySection, SummaryH2, SummaryText } from './MealsSummaryStyles'

const MealsSummary = () => {
  return (
    <>
      <SummarySection>
        <SummaryH2>Delicious Food, Delivered To You</SummaryH2>
        <SummaryText>
          Choose your favourite meals from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
        </SummaryText>
        <SummaryText>
          All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
        </SummaryText>
      </SummarySection>
    </>
  )
}

export default MealsSummary
