import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import classes from './product.module.css';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/Action.type';

function ProductCard({ product, flex, renderDesc }) {
  const { id, title, image, rating, price, description } = product;

  const [dispatch] = useContext(DataContext);

  const addToCart = () => {
    if (dispatch) {
      dispatch({
        type: Type.ADD_TO_BASKET, 
        item: { 
          id, title, image, rating, price, description 
        }
      });
    } else {
      console.error("Dispatch is not defined");
    }
  };

  if (!product || !product.rating) {
    return null; 
  }

  return (
    <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={classes.productImage} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div>{renderDesc(description)}</div>}
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small>({rating.count})</small>
        </div>
        <div>
          <p>${price}</p>
        </div>
        <button className={classes.button} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  flex: PropTypes.bool,
  renderDesc: PropTypes.func, 
  renderAdd: PropTypes.bool, 
};

export default ProductCard;









