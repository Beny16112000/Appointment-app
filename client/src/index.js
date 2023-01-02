import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterVendors from './Components/Authentication/Vendors/register';
import LoginVendors from './Components/Authentication/Vendors/login';
import Logout from './Components/Authentication/Vendors/logout';
import ManageIndex from './Components/Manage/manageIndex';
import Settings from './Components/Manage/settings';
import MakeAppointment from './Components/Manage/create';
import ManageAppointments from './Components/Manage/manage';
import Navbar from './Components/Navbar/navbar';


// Render All


const registerVendors = ReactDOM.createRoot(document.getElementById('registerVendors'));
registerVendors.render(
  <Router>
  <React.StrictMode>
  <Switch>
    <Route path="/auth/vendor/register">
      <RegisterVendors url="/auth/vendor/register" />
    </Route>
  </Switch>
  </React.StrictMode>
  </Router>
);


const loginVendors = ReactDOM.createRoot(document.getElementById('loginVendors'))
loginVendors.render (
  <Router>
  <React.StrictMode>
  <Switch>
    <Route path="/auth/vendor/login">
      <LoginVendors url="/auth/vendor/login" />
    </Route>
  </Switch>
  </React.StrictMode>
  </Router>
);


const logout = ReactDOM.createRoot(document.getElementById('logout'))
logout.render (
  <Router>
  <React.StrictMode>
  <Switch>
    <Route path="/auth/vendor/logout">
      <Logout url="/auth/vendor/logout" />
    </Route>
  </Switch>
  </React.StrictMode>
  </Router>
);


const manageIndex = ReactDOM.createRoot(document.getElementById('manageIndex'))
manageIndex.render (
  <Router>
  <React.StrictMode>
  <Switch>
    <Route path="/manage/home">
      <ManageIndex url="/manage/home" />
    </Route>
  </Switch>
  </React.StrictMode>
  </Router>
);


const manageSettings = ReactDOM.createRoot(document.getElementById('manageSettings'))
manageSettings.render (
  <Router>
  <React.StrictMode>
  <Switch>
    <Route path="/manage/setting">
      <Settings url="/manage/home" />
    </Route>
  </Switch>
  </React.StrictMode>
  </Router>
);


const makeAppointment = ReactDOM.createRoot(document.getElementById('makeAppointment'))
makeAppointment.render (
  <Router>
  <React.StrictMode>
  <Switch>
    <Route path="/manage/create/appointment">
      <MakeAppointment url="/appointment/create"/>
    </Route>
  </Switch>
  </React.StrictMode>
  </Router>
);


const manageAppointments = ReactDOM.createRoot(document.getElementById('manageAppointments'))
manageAppointments.render (
  <Router>
  <React.StrictMode>
  <Switch>
    <Route path="/manage/manage/appointment">
      <ManageAppointments url="/appointment/manage"/>
    </Route>
  </Switch>
  </React.StrictMode>
  </Router>
);


const nav = ReactDOM.createRoot(document.getElementById('nav'))
nav.render (
  <Router>
  <React.StrictMode>
  <Switch>
    <Route path="/">
      <Navbar/>
    </Route>
  </Switch>
  </React.StrictMode>
  </Router>
);


