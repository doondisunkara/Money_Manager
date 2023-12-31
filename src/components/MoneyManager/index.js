import {Component} from 'react'
import {v4} from 'uuid'

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
    transactionsList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    income: 0,
    expenses: 0,
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = event => {
    this.setState({amount: event.target.value})
  }

  updateType = event => {
    this.setState({type: event.target.value})
  }

  onSubmitAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type, income, expenses} = this.state
    let incomeAmt
    let expensesAmt
    if (type === 'INCOME') {
      incomeAmt = parseInt(amount)
      expensesAmt = expenses
    } else {
      expensesAmt = parseInt(amount)
      incomeAmt = income
    }
    const newTransaction = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type,
    }
    this.setState(prev => ({
      transactionsList: [...prev.transactionsList, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
      income: incomeAmt,
      expenses: expensesAmt,
    }))
  }

  render() {
    const {title, amount, type, income, expenses} = this.state
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
          <div className="interaction-container">
            <form className="form card" onSubmit={this.onSubmitAddTransaction}>
              <h1 className="card-heading">Add Transaction</h1>
              <label htmlFor="title" className="labels">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                className="inputs"
                value={title}
                onChange={this.updateTitle}
              />
              <label htmlFor="amount" className="labels">
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                placeholder="AMOUNT"
                className="inputs"
                value={amount}
                onChange={this.updateAmount}
              />
              <label htmlFor="type" className="labels">
                TYPE
              </label>
              <select
                className="inputs"
                value={type}
                onChange={this.updateType}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="history card">
              <h1 className="card-heading">History</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
