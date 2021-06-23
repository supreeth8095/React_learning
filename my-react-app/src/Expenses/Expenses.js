import ExpenseDate from './ExpensesDate';
import './ExpensesStyle/ExpensesCss.css';


const Expenses = (props) => {
    return(
       
        <div className ='expense-item'>
            <ExpenseDate date = {props.date}/>
        <div className = 'expense-item__description'>{props.title}</div>
        <div className = 'expense-item__price'>{props.amount + '$'}</div>
        </div>
    );
};

export default Expenses;