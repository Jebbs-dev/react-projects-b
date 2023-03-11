import React from 'react'
import BudgetForm from './BudgetForm'

const NewBudget = (props) => {
  const saveBudgetHandler = (inputBudgetData) => {
    const budgetData = {
      ...inputBudgetData, id: Math.random().toString()
    }
    props.onAddBudget(budgetData)
  }
  return (
    <>
      <BudgetForm onSaveBudgetData={saveBudgetHandler} />
    </>
  )
}

export default NewBudget