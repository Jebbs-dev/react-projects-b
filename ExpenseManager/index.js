import React, { useState } from 'react'
import Expenses from './Expenses/Expenses';
import './index.css'
import NewExpense from './NewExpense/NewExpense';


const oldExpenses =  [
  {
    id: "e1",
    title: "iPad",
    amount: 422.0,
    date: new Date(2022, 7, 16),
  },
  {
    id: "e2",
    title: "Inverter",
    amount: 3761.56,
    date: new Date(2022, 2, 29),
  },
  {
    id: "e3",
    title: "Deep Freezer",
    amount: 562.89,
    date: new Date(2022, 5, 22),
  },
  {
    id: "e4",
    title: "Television",
    amount: 984.77,
    date: new Date(2022, 9, 7),
  },
];

const Home = () => {
  const [expenses, setExpenses] = useState(oldExpenses);

  

  const addExpenseHandler =(expense)=>{
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]});
  }

  return (
    <>
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses}/>
    </>
  )
}

export default Home