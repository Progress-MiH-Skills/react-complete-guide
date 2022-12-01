import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  // State explainations:
  // useState() want a default state value => useState(pros.title)
  // with useState() we basically create a special kind of variable,
  // a variable where changes will lead this components to be called again
  //useState returns an array where the first element is the variable itself,
  //and the second element in the array is that updating function

  // const[title, setTitle] => here we are using array destructuring to store
  // both elements, in separate variables or constantes, the first element is
  // the pointer at that managed value (initially "props.title"), and the second
  // elements is a function which you can later call to set a new title

  // Closer look at the "useState" Hook
  //useState registers some states (some value as a state) for the component in
  // which it is being called, more pricisily it register it for a specific component
  // instance.
  // For example ExpenseItem in 'Expenses.js' is being called four times means we have
  // four expense items in Expenses.js, now every item receive its ouwn separate state
  // in the same way but managed independently by react

  const [title, setTitle] = useState(props.title);
  // console.log("Props from Expenses: ", props.title);

  const clickHandler = () => {
    // let title = props.title;
    setTitle('Updated!');
    // console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
