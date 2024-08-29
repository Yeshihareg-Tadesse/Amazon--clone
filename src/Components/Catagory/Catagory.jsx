import CatagoryCard from './CatagoryCard'
import{catagoryInfo} from './CatagoryInfo/'
import classes from './catagory.module.css'

function Catagory() {
  return (
    <section className={classes.catagory_container}>
        
{catagoryInfo.map((info)=>(
    <CatagoryCard key={info.name} data={info}/>
        ))}
    </section>
    
        )
}

export default Catagory