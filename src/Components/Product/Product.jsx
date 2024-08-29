import  { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './product.module.css';
import Loader from '../Loader/Loader';


function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError(err); // Set error state to handle errors
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <section className={classes.product_list}>
      {isLoading ? (
        <Loader />
      ) : (
        Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} rendeAdd={true} />
          ))
        ) : (
          <div>No products found</div> 
        )
      )}
    </section>
  );
}


export default Product;
