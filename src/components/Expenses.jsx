import React, {useState} from 'react'
import './css/Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('2022')
    // sets the default selected option to the hard-coded year 2022

    const selectYearHandler = year => {
        setSelectedYear(selectedYear)
    }

  return (
      <div>
        <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} onSelectYear={selectYearHandler}/>      
            <ExpenseItem 
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />   
            <ExpenseItem 
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />   
            <ExpenseItem 
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />   
            <ExpenseItem 
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />   
        </Card>
    </div>
  )
}

export default Expenses