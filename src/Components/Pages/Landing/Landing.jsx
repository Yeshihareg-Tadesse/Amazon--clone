import CarouselEffect from "../../Carousel/CarouselEffect"
import Catagory from "../../Catagory/Catagory.jsx"
import LayOut from "../../LayOut/LayOut"
import Product from "../../Product/Product.jsx"


function Landing() {
  return (
    <LayOut>
    <CarouselEffect />
    <Catagory />
    <Product />
    </LayOut>
  )
}

export default Landing