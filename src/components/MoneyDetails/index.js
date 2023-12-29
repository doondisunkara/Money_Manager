import './index.css'

const MoneyDetails = props => {
  const {moneyDetails, amount} = props
  const {title, category, imgUrl, categoryClassName} = moneyDetails
  console.log(moneyDetails, amount)
  return (
    <li className={categoryClassName}>
      <img className="details-img" src={imgUrl} alt={category} />
      <div>
        <p>{title}</p>
        <p>{`Rs ${amount}`}</p>
      </div>
    </li>
  )
}

export default MoneyDetails
