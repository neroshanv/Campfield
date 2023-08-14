{/* import a function that allows value as state, where changes in the value should reflect in the component functino recalled again */ }
import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  {/* useState needs to be in the component function */ }
  {/* store both elements in separate variable or consts */ }
  {/* title --> is a point at the managed value "useState(props.title)" so the value stored in props.title */ }
  {/* setTitle --> is a function which we can later call to set a new title which is setTitle */ }
  const [title, setTitle] = useState(props.title);



  {/* function clickHandler() */ }
  const clickHandler = () => {
    {/* calling this function is an special variable, it will receive a new value and will execute the entire component again */ }
    setTitle = 'Updated';
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
