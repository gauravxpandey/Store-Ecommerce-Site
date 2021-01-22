import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from "../Home/Home";
import {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from '../Checkout/Checkout';
import Login from '../Login/Login';
import { auth } from '../Main/firebase';
import { useStateValue } from '../Extra/StateProvider';
import Payment from '../Checkout/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements }from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HyuLeISq7OY0AIqrnjKGWUBrUsxxD6fvctU3wFW9wfODKQYDNV7LjfInfO8DFaaC7MCPYO3vgFpHQj640yVACuX00nUOD7Dpt'
);

function App() {
  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("user is logged in >>>> " , authUser)

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
}, [])

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Navbar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Navbar />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>  
  );
}

export default App;
