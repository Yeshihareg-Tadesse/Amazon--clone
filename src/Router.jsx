import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Pages/Landing/Landing';
// import Signup from './Components/Pages/Auth/Auth';
import Payment from './Components/Pages/Payment/Payment'; // Assuming Payment is a component
import Orders from './Components/Pages/Orders/Orders';
import Cart from './Components/Pages/Cart/Cart';
import Results from './Components/Pages/Results/Results'
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail'
import Auth from './Components/Pages/Auth/Auth';
import DataProvider from './Components/DataProvider/DataProvider';
import { reducer } from './Utility/Reducer';
import { initialState } from './Utility/Reducer';


function Routing() {
  return (
    <Router>
      <DataProvider reducer={reducer} initialState={initialState}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Payments" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />  
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      </DataProvider>   
  </Router>
  );
}

export default Routing;





