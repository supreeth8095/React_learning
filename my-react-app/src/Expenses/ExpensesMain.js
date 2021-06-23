import Expenses from './Expenses';
import './ExpensesStyle/ExpensesMain.css';


const ExpensesMain = (props) => {

    return(
        <div className ='expenses_main'>
            <div className ='expenses'>
            {props.data.map((expese) => (
            <Expenses
            title={expese.title}
            amount={expese.amount}
            date={expese.date}
            />
            ))}
        </div>
        </div>
    );

};

export default ExpensesMain;
