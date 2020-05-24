import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom' 
import './App.css';

// BOOTSTRAP JQUERY
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';
// BOOTSTRAP JQUERY

import ReactNotifications from 'react-notifications-component';

import {ProtectedRoute} from './protected.route'
import {ProtectedRouteAdmin} from './protected.route.admin'


import Header from './includes/Header'


import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'

import UserHome from './pages/user/UserHome'

import AdminLogin from './pages/admin/AdminLogin'
import AdminHome from './pages/admin/AdminHome'



function App() {
  return (
    <>
    <ReactNotifications />
    <Router>
      <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />

                <ProtectedRoute exact path="/userhome" component={UserHome} />



                <ProtectedRouteAdmin exact path="/adminhome" component={AdminHome} />
                <Route exact path="/adminlogin" component={AdminLogin} />



                <Route path="*" component={() => "404 Page NOT FOUND"} />

                
      </Switch>
    </Router>
    </>


  );
}

export default App;
