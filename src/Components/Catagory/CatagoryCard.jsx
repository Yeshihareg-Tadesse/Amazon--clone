import { Link } from "react-router-dom";
import classes from "./catagory.module.css"
import PropTypes from 'prop-types';

const CatagoryCard=({data})=> {

  return (
    <div className={classes.catagory}>
      <Link to={`products/category/${data.name}`}>
      <span>
        <h2>{data.title}</h2>
      </span>
        <img src={data.imgLink} alt=""></img>
        <p>Shop Now</p>
      </Link>
    </div>
  )
}

CatagoryCard.propTypes = {
  data: PropTypes.object.isRequired, 
};


export default CatagoryCard;
