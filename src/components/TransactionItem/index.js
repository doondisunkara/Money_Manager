import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onClickDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails
  const deleteTransaction = () => {
    onClickDeleteTransaction(id)
  }
  console.log(title, amount, type)
  return (
    <li className="transaction-item">
      <p>{title}</p>
      <p>{`Rs ${amount}`}</p>
      <p>{type}</p>
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
    </li>
  )
}

export default TransactionItem
