import logo from './logo.svg';
import './App.css';
import './components/RestaurantView/restaurant_api.js'
import './firebase.js'
import RestaurantView from './components/RestaurantView/RestaurantView';
import CartView from './components/CartView/CartView';
import LoginPage from './components/LoginPage/LoginPage';
import './components/RestaurantView/restaurant_api.js'
import Username from './components/Username/Create-Username';
import JoinUsername from './components/Username/Join-Username';
import Order from './components/Order/Order.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <Router>
        <Routes>
          <Route path = "/" element={<LoginPage/>} exact></Route>
          <Route exact path = "/create" element={<Username/>}/>
          <Route exact path = "/join" element={<JoinUsername/>}/>
          <Route exact path = "/cart-view" element={<CartView/>}/>
          <Route exact path = "/restaurant-view" element={<RestaurantView/>}/>
          <Route exact path = "/order" element={<Order/>}/>
        </Routes>
      </Router>


    // <Username/>
    //  <LoginPage/>
    // <CartView/>
    // <RestaurantView/>
  );
}

export default App;