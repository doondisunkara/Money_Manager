import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const categoriesList = [
  {
    category: 'balance',
    title: 'Your Balance',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    categoryClassName: 'money-details-item balance-item',
  },
  {
    category: 'income',
    title: 'Your Income',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    categoryClassName: 'money-details-item income-item',
  },
  {
    category: 'expenses',
    title: 'Your Expenses',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    categoryClassName: 'money-details-item expenses-item',
  },
]

class MoneyManager extends Component {
  state = {
    income: 1000,
    expenses: 300,
  }

  render() {
    const {income, expenses} = this.state
    const money = {
      balance: income - expenses,
      income,
      expenses,
    }
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="user-container">
            <h1 className="user">Hi, Rahul</h1>
            <p className="welcome-note">
              Welcome back to your{' '}
              <span className="app-name">Money Manager</span>
            </p>
          </div>
          <ul className="money-details-list">
            {categoriesList.map(each => (
              <MoneyDetails
                key={each.category}
                moneyDetails={each}
                amount={money[each.category]}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
