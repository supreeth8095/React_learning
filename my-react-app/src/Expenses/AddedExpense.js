import './ExpensesStyle/AddedExpenses.css';
import AddedExpenseForm from './AddedExpenseForm';
import React from 'react';

const AddedExpense = (props) => {

    const newlyAddedExpenses = (newAddedExpn) => {

        const newExpenses = {
            ...newAddedExpn,
            id : Math.random().toString()
        }

        props.onSaveDisplay(newExpenses);
    };



    return (
        <div className= 'new-expense'>
            <AddedExpenseForm onSubmit ={newlyAddedExpenses}></AddedExpenseForm>
        </div>
    );
};

export default AddedExpense;