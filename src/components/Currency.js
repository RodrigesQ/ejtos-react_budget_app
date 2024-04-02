import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CURRENCIES = [
    { symbol: '$', label: 'Dolar' }, 
    { symbol: '£', label: 'Pound' },
    { symbol: '€', label: 'Euro' },
    { symbol: '₹', label: 'Rupee' },
];

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);

    const handleCurrencyChange = (event) => {
        const selectedSymbol = event.target.value;
        const selectedCurrency = CURRENCIES.find((currency) => currency.symbol === selectedSymbol);
        setSelectedCurrency(selectedCurrency);

        // Dispatch the CHG_CURRENCY action to update the currency symbol in the global state
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    return (
        <div className="alert alert-success custom-dropdown row align-items-center">
            <div className="col">
                <select
                    id="currency"
                    value={selectedCurrency.symbol} 
                    onChange={handleCurrencyChange}
                    className="form-select border-0 alert alert-success"
                >
                    {CURRENCIES.map((currency) => (
                        <option key={currency.symbol} value={currency.symbol}>
                            {selectedCurrency.symbol === currency.symbol ? `Currency: ${currency.symbol} ${currency.label}` : `${currency.symbol} ${currency.label}`} 
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Currency;
