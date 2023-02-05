import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Home from "./Home";
import About from "./About";
import API from "./API";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
    <div className="App">
    <Navbar />
      <Switch>
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={API} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;
