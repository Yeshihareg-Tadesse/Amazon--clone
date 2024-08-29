import classes from'./Header.module.css'
import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import LowerHeader from './LowerHeader'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/Firebase';


function Header() {
    const [{user, basket}]=useContext(DataContext)
    console.log(basket);
  return (
    <>
    <section className={classes.fixed}>
    <section>
    <div className= {classes.header_container}>
            <div className={classes.logo_container}>
                {/* logo */}
                <a href="/">
                     <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon log"/> 
                </a>
                <div className={classes.delivery}>
                <span>
                <SlLocationPin />
                </span>
                <div>
                    <p>Delivery to</p>
                    <span>Ethiopia</span>
                </div>
                </div>
            </div>
            <div className={classes.search}>
                {/* search */}
                <select name="All" id="all">
                    <option value="">All</option>
                </select>
                <input type="text" />
                <span><FaSearch size={25}/></span>      
            </div>
            <div className={classes.order_container}>
                <Link to='/language' className={classes.language}>
                <img src="https://pngimg.com/uploads/flags/flags_PNG14655.png" alt=""/>
                <select name='EN' id='en'>
                    <option value="#">EN</option>
                </select>
                </Link>
                <Link to={!user && "/Auth"}>
                    <div>
                     {user? (
                        <>
                            <p>Hello {user?.email?.split("@")[0]}</p>
                        <span onClick={()=>auth.signOut.then}>Sign Out</span>
                        </>
                        ):(
                        <>
                        <p>Hello, Sign In</p>
                        <span>Account & Lists</span>
                        </>    
                    )}
                    </div>
            </Link> 
            <Link to='/orders'>
                <p>Returns</p>
                <span>& Orders</span>
            </Link>
            {/* orders */}
            <Link to ='/cart' className={classes.cart}>
            <FaShoppingCart size={35} />
            <span>{basket.length}</span>
            </Link>
            </div>
        </div>
    </section>
    <LowerHeader/>
    </section>

    
    </>
  )
}

export default Header