import './ExpenseItem.css';
// A componente in react is just a javascript function
function ExpenseItem(props) {
    return (
    <div className='expense-item'>
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__decription'>
            <h2> {props.title} </h2>
            <div className='expense-item__price'> ${props.amount} </div>
        </div>
    </div>
    );
}

export default ExpenseItem;