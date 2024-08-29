import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {img} from './Images/data'
import classes from './carouse.module.css'


function CarouselEffect() {
  return (
    <div>
<Carousel
autoPlay
infiniteLoop
showIndicators={false}
showThumbs={false}
>
{img.map((imageItemLink, index) => (
        <div key={index}>
            <img key={imageItemLink}src={imageItemLink} alt={`Slide ${index}`} />
        </div>
        ))}
</Carousel>
 <div className={classes.lower_img}> </div>  
    </div>
  )
}

export default CarouselEffect