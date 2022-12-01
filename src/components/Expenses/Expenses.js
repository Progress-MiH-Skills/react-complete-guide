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
  console.log('In Expenses: ', filteredYear);

  const expenses = props.expenses;
  console.log("Props:", props);

  return (
    <div>


      

      <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.expenses.map(item => <ExpenseItem title={item.title} amount={item.amount} date={item.date} />)}
        
      </Card>
    </div>
  );
}

export default Expenses;
