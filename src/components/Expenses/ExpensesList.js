import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) =>   {let expensesContent = <p>No expenses found</p>
if (props.filteredExpenses.length > 0) { 
  expensesContent = props.filteredExpenses.map((item) => 
  <ExpenseItem 
    key={item.id}
    title={item.title} 
    amount={item.amount} 
    date={item.date} 
  />)}
  return <ul className="expenses-list">{expensesContent}</ul>
}

export default ExpensesList;
