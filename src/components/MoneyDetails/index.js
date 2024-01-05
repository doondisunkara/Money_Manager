import './index.css'

const MoneyDetails = props => {
  const {moneyDetails, amount} = props
  const {
    title,
    category,
    imgUrl,
    categoryClassName,
    attributeValue,
  } = moneyDetails
  return (
    <div className={categoryClassName}>
      <img className="details-img" src={imgUrl} alt={category} />
      <div className="category-content-container">
        <p className="category-title">{title}</p>
        <p
          data-testid={attributeValue}
          className="category-amount"
        >{`Rs ${amount}`}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
