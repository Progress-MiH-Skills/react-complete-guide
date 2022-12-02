import { React, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../Filters/ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2015');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // filter is a built-in array method that takes a function as an argument and returns a new array 
  // with the elements that pass the test implemented by the provided function 
  const filteredExpenses = props.expenses.filter((expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  }));
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filteredYear={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map((item) => 
          <ExpenseItem 
            key={item.id}
            title={item.title} 
            amount={item.amount} 
            date={item.date} 
          />)}

      </Card>
    </div>
  );
}

export default Expenses;
