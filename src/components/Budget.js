import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, upperLimit } = useContext(AppContext); // Accessing from the context
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);

     // Calculate total expenses within Budget.js
     const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

        // Check if the new budget exceeds the upper limit
        if (newBudgetValue > upperLimit) {
            alert(`The budget cannot exceed ${upperLimit} ${totalExpenses}.`);
            return;
        }

        // Check if the new budget is less than the total spending already allocated
        if (newBudgetValue < totalExpenses) {
            alert(`The budget cannot be lower than the total spending ${totalExpenses} already allocated.`);
            return;
        }


        // Update the budget
        setNewBudget(newBudgetValue);
        dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });

        
    };
    

    return (
        <div className='alert alert-secondary' style={{ marginLeft: '2rem'}}>
            <span>Budget: £{budget}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange} 
            />

        </div>
    );
};

export default Budget;
