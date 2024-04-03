
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle  } from '@fortawesome/free-solid-svg-icons';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    function decreaseAllocation(name) {
        let expense = {
            name,
            cost: -10, // Decreasing the cost by 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }


    return (
        <tr style={{ marginLeft: '2rem' }}>
            <td>{props.name}</td>
            <td>{currency} {props.cost}</td>
            <td><button onClick={event => increaseAllocation(props.name)} style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                    }}><FontAwesomeIcon icon={faPlusCircle} style={{ color: 'green', fontSize: '1.5em' }} /></button></td>
            <td><button onClick={event => decreaseAllocation(props.name)} style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                    }}><FontAwesomeIcon icon={faMinusCircle} style={{ color: 'red', fontSize: '1.5em' }} /></button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;