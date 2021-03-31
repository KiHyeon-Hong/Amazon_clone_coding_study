import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

import Header from './Header';
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'

import React, {useEffect} from "react";
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('나의 퍼블릭 키를 넣습니다');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the the app compnent loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if(authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user:null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
