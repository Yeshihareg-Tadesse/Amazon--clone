import { useContext } from 'react';
import LayOut from '../../LayOut/LayOut'; 
import { DataContext } from '../../DataProvider/DataProvider'; 
import ProductCard from '../../Product/ProductCard';
import { Type } from "../../../Utility/Action.type";
import { Link } from 'react-router-dom';
import currencyFormatter from 'currency-formatter';
import classes from './Cart.module.css';

function Cart() {
    const [{ basket }, dispatch] = useContext(DataContext);

    const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);

    const increment = (item) => {
        dispatch({ type: Type.ADD_TO_BASKET, item });
    };

    const decrement = (id) => {
        dispatch({ type: Type.REMOVE_FROM_BASKET, id });
    };

    return (
        <LayOut>
            <section className={classes.container}>
                <div className={classes.cart_container}>
                    <h2>Your shopping basket</h2>
                    <hr />
                    {basket.length === 0 ? (
                        <p>Oops! No items in your cart</p>
                    ) : (
                        basket.map((item) => (
                            <section key={item.id} className={classes.cart_product}>
                                <ProductCard
                                    product={item}
                                    renderDesc={true}
                                    renderAdd={false}
                                    flex={true}
                                />
                                <div className={classes.btn_container}>
                                    <button onClick={() => increment(item)}>+</button>
                                    <span>{item.amount}</span>
                                    <button onClick={() => decrement(item.id)}>-</button>
                                </div>
                            </section>
                        ))
                    )}
                </div>
                {basket.length !== 0 && (
                    <div className={classes.subtotal}>
                        <div>
                            <p>Subtotal ({basket.length} items)</p>
                            <p>Quantity: {basket.reduce((total, item) => total + item.amount, 0)}</p>
                            <p>{currencyFormatter.format(total, { code: 'USD' })}</p>  
                        </div>
                        <span>
                            <input type="checkbox" />
                            <small>This order contains a gift</small>
                        </span>
                        <Link to="/payments">Continue to checkout</Link>
                    </div>
                )}
            </section>
        </LayOut>
    );
}

export default Cart;






























// import { useContext } from 'react';
// import LayOut from '../../LayOut/LayOut'; 
// import { DataContext } from '../../DataProvider/DataProvider'; 
// import ProductCard from '../../Product/ProductCard';
// import { Type } from "../../../Utility/Action.type";
// import { Link } from 'react-router-dom';
// import currencyFormatter from 'currency-formatter';
// import classes from './Cart.module.css';

// function Cart() {
//     const [{ basket }, dispatch] = useContext(DataContext);

//     const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);

//     const increment = (item) => {
//         dispatch({ type: Type.ADD_TO_BASKET, item });
//     };

//     const decrement = (id) => {
//         dispatch({ type: Type.REMOVE_FROM_BASKET, id });
//     };

//     return (
//         <LayOut>
//             <section className={classes.container}>
//                 <div className={classes.cart_container}>
//                     <h2>Your shopping basket</h2>
//                     <hr />
//                     {basket.length === 0 ? (
//                         <p>Oops! No items in your cart</p>
//                     ) : (
//                         basket.map((item) => (
//                             <section key={item.id} className={classes.cart_product}>
//                                 <ProductCard
//                                     product={item}
//                                     renderDesc={true}
//                                     renderAdd={false}
//                                     flex={true}
//                                 />
//                                 <div className={classes.btn_container}>
//                                     <button onClick={() => increment(item)}>+</button>
//                                     <span>{item.amount}</span>
//                                     <button onClick={() => decrement(item.id)}>-</button>
//                                 </div>
//                             </section>
//                         ))
//                     )}
//                 </div>
//                 {basket.length !== 0 && (
//                     <div className={classes.subtotal}>
//                         <div>
//                             <p>Subtotal ({basket.length} items)</p>
//                             <p>Quantity: {basket.reduce((total, item) => total + item.amount, 0)}</p>
//                             <p>{currencyFormatter.format(total, { code: 'USD' })}</p>  
//                         </div>
//                         <span>
//                             <input type="checkbox" />
//                             <small>This order contains a gift</small>
//                         </span>
//                         <Link to="/payments">Continue to checkout</Link>
//                     </div>
//                 )}
//             </section>
//         </LayOut>
//     );
// }

// export default Cart;
