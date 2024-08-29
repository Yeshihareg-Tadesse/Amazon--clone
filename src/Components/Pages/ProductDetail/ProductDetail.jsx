import LayOut from "../../LayOut/LayOut"
import { useParams } from "react-router-dom"
import axios from "axios";
import {productUrl} from '../../../API/Endpoints';
import { useEffect, useState } from "react";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";

function ProductDetail() {
  const {productId} = useParams();
  const [product, setProduct]= useState(null)
  const [isLoading, setLoading]= useState(true)

  useEffect(()=>{
    setLoading(true)
      axios.get(`${productUrl}/products/${productId}`)
      .then((res)=>{
        setProduct(res.data)
        setLoading(false)
      }).catch((err)=>{
        console.log("Error fetching product", err);
        setLoading(false)
      })
  },[productId]);
  if (isLoading) {
    return <Loader />;
  }


  return (
    <LayOut>
    {product? (
        <ProductCard 
        product={product}
        flex ={true}
       renderDesc={true}
       renderAdd={true}
       />
      ):(
<p>product not found</p>
      )}
      </LayOut>    
  )
}

export default ProductDetail