import React from 'react';
import { useState } from 'react';
import './NewExpense.css';

const ExpenseForm = (props) => {
  // One State approach - useState() returns an array with 2 elements -
  // the current state snapshot and a function to update the state snapshot (setState()) -
  // the function is called with the new state snapshot as an argument - the function is
  // called by React when the component is rendered - the function is called by React
  // when the component is unmounted

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput, // spread operator to keep the previous state values and only update the changed value below (enteredTitle)
  //     enteredTitle: event.target.value, // update the changed value (enteredTitle) only and keep the previous state values (enteredAmount and enteredDate) as they are (see spread operator above)
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput, // spread operator
  //     enteredAmount: event.target.value,
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput, // spread operator
  //     enteredDate: event.target.value,
  //   });

  // // when depending on the previous state, use the function syntax below
  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });

  // Multiple States approach (preferred) - useState()
  //returns an array with 2 elements - the current state snapshot and a
  //function to update the state snapshot (setState()) - the function is
  //called with the new state snapshot as an argument - the function is called by
  //React when the component is rendered - the function is called by React when the
  //component is re-rendered - the function is called by React when the component is unmounted

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent the default browser behavior of reloading the page on form submission

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log('Expense Form Data: ', expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
