import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currencySymbol } = useContext(AppContext);
    const [remainingBudget, setRemainingBudget] = useState(0);

    useEffect(() => {
        const totalExpenses = expenses.reduce((total, item) => {
            return total + item.cost;
        }, 0);
        setRemainingBudget(budget - totalExpenses);
    }, [expenses, budget]); // Re-render whenever expenses or budget changes

    const alertType = remainingBudget < 0 ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`} >
            <span>Remaining: {currencySymbol} {Math.abs(remainingBudget)}</span>
        </div>
    );
};

export default Remaining;
