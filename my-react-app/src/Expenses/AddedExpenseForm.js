import './ExpensesStyle/AddedForm.css';
import React from 'react';
import {useState} from 'react';

const AddedExpenseForm = (props) => {

const [ newTitle, setTitle ] = useState('');
const [ newAmount, setAmout ] = useState('');
const [ newDate, setDate ] = useState('');


const addTitle = (event) => {
    setTitle(event.target.value);
};


const addAmount = (event) => {
    setAmout(event.target.value);
};


const addDate = (event) => {
    setDate(event.target.value);
};

const AddingNewExpeses = (event) =>{
    event.preventDefault();

    const newAddedExpense = {
        title : newTitle,
        amount : newAmount,
        date : new Date(newDate)
    }

    props.onSubmit(newAddedExpense);

    setTitle('');
    setAmout('');
    setDate('');
};





    return(
        <form onSubmit={AddingNewExpeses}>
            <div className= 'new-expense__controls'>
                <div className= 'new-expense__controls'>    
                    <label >Title :</label>
                    <input type='Text' value={newTitle} onChange={addTitle}></input>
                </div>
                <div className= 'new-expense__controls'>
                    <label >Ammout :</label>
                    <input type='number' min='1.00' max='999.00' value={newAmount} onChange={addAmount}></input>
                </div>
                <div className= 'new-expense__controls'>
                    <label >Date :</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={newDate} onChange={addDate}></input>
                </div>
                <div className= 'new-expense__action'>
                    <button type='submit'>Add</button>
                </div>
            </div>
        </form>
    );
};

export default AddedExpenseForm;