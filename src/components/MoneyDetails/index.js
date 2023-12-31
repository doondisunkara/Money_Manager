import './index.css'

const MoneyDetails = props => {
  const {moneyDetails, amount} = props
  const {title, category, imgUrl, categoryClassName} = moneyDetails
  console.log(moneyDetails, amount)
  return (
    <li className={categoryClassName}>
      <img className="details-img" src={imgUrl} alt={category} />
      <div className="category-content-container">
        <p className="category-title">{title}</p>
        <p className="category-amount">{`Rs ${amount}`}</p>
      </div>
    </li>
  )
}

export default MoneyDetails
