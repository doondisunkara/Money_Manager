import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onClickDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const typeDisplay = type === 'INCOME' ? 'Income' : 'Expenses'
  const deleteTransaction = () => {
    onClickDeleteTransaction(id)
  }
  console.log(title, amount, type)
  return (
    <li className="transaction-item">
      <p className="transaction-item-text">{title}</p>
      <p className="transaction-item-text">{`Rs ${amount}`}</p>
      <p className="transaction-item-text">{typeDisplay}</p>
      <div className="delete-container">
        <button
          data-testid="delete"
          type="button"
          className="delete-btn"
          onClick={deleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
