import React, {useState} from 'react'
import './css/Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('2022')
    // sets the default selected option to the hard-coded year 2022

    const selectYearHandler = selectedYear => {
        setSelectedYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={selectedYear}
                    onSelectYear={selectYearHandler}/>
                    <ExpensesChart expenses={filteredExpenses}/>
                    <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses