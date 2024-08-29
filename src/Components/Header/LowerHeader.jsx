import { FiAlignJustify } from "react-icons/fi";
import classes from "./Header.module.css"

function LowerHeader() {
  return (
    <div className={classes.lower_container}>
        <ul>
            <li>
            <FiAlignJustify />
            <p>All</p> 
            </li>
            <li>Todays Deals</li>
            <li>Costumer Services</li>
            <li>registry</li>
            <li>gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader