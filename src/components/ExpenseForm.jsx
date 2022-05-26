import React, {useState} from 'react'
import './css/ExpenseForm.css'

function ExpenseForm(props) {    
    
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput]= useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    // can either useState individually as in the first three functions above or the above function where you can create an object and place everything within it. need to save the state of values using the spread operator below to save state while only updating one piece

    const titleChangeHandler = evt => {
        setEnteredTitle(evt.target.value)
        // use the above when using the above individual useState functions

        // setUserInput({
        //     ...userInput,
        //     // spread operator allows you to save the state of the amount and date and only change the title, else you will lose the other values
        //     enteredTitle: evt.target.value,

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: evt.target.value}
        //     // best to use this way if your state update depends on the previous state
        //     })
    }    
    const amountChangeHandler = evt => {
        setEnteredAmount(evt.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: evt.target.value,
        // })

    }
    const dateChangeHandler = evt => {
        setEnteredDate(evt.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: evt.target.value,
        // })
    }
    const submitHandler = evt => {
        evt.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        // above clears the input fields
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__crontrol'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__crontrol'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__crontrol'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01' max='2024-12-21'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm