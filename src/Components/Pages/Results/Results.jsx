import LayOut from '../../LayOut/LayOut'
import {useParams} from 'react-router-dom'
import axios from 'axios';
// import { productUrl } from '../../../API/Endpoints';
import { useEffect, useState } from 'react';
import ProductCard from '../../Product/ProductCard';
import classes from './Results.module.css'
import Loader from "../../Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const {categoryName} = useParams();
  const [isLoading, setLoading]= useState(false)
  // useEffect(()=>{
  //   axios.get(`('https://fakestoreapi.com')/products/category/${categoryName}`)
  //   .then((res)=>{
  //     setResults(res.data)
  //   })
  //   .catch((err)=>{
  //     console.error("Error", err);
  //   });
  // },[categoryName])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`(https://fakestoreapi.com)/products/category/${categoryName}`);
        setResults(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false)
      }
    };

    fetchProducts();
  }, [categoryName]);
  
  return (
    <LayOut>
      <section>
        <h1 style={{padding: '30px'}}>Results</h1>
        <p style={{padding: '30px'}}>{categoryName}</p>
      <hr />
      {isLoading? (<Loader/>):(
      <div className={classes.products_container}>
            {results?.map((product)=>(
            <ProductCard key={product.id}
            renderAdd={true}
            product={product}
            renderDesc={false} 
            />
          ))}
      </div>
    )}
  </section>
  </LayOut>
  )
}

export default Results