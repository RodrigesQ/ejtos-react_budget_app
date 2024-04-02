import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
      <div className='container'>
        {/* Title row */}
        <h1 className='mt-3'>Company's Budget Allocation</h1>

        {/* Four equal columns in a row */}
        <div className='row mt-3'>
          <div className='col-sm-3'>  {/* Budget component */}
            <Budget />
          </div>
          <div className='col-sm-3'>  {/* Remaining component */}
            <Remaining />
          </div>
          <div className='col-sm-3'>  {/* ExpenseTotal component */}
            <ExpenseTotal />
          </div>
          <div className='col-sm-3'>  {/* ExpenseItem component */}
            <ExpenseItem />
          </div>
        </div>

        {/* ExpenseList takes full row */}
        <div className='row mt-3'>
          <div className='col-sm-12'>  {/* ExpenseList component */}
            <ExpenseList />
          </div>
        </div>

        {/* AllocationForm takes full row */}
        <div className='row mt-3'>
          <div className='col-sm-12'>  {/* AllocationForm component */}
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
    );
};
export default App;
