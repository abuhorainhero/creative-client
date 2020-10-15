import React, { createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import { useState } from 'react';
import Order from './components/Customar/Order/Order';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './components/Customar/ServiceList/ServiceList';
import Review from './components/Customar/Review/Review';
import AllServicesList from './components/AdminSite/AllServicesList/AllServicesList';
import AddService from './components/AdminSite/AddService/AddService';
import MakeAdmin from './components/AdminSite/MakeAdmin/MakeAdmin';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/order/:title">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/servicesList">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>

          <PrivateRoute path="/allServicesList">
            <AllServicesList />
          </PrivateRoute>
          <PrivateRoute path="/addServices">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
