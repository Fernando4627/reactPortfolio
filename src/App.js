import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainContainer from "./components/MainContainer";
import FooterSection from './components/FooterSection';
import homePage from './components/content/home';
import portfolio from "./components/content/portfolio";
import contact from "./components/content/contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <MainContainer/>
        <FooterSection/>
        <Switch>
          {<Route exact path= "/" Component = {homePage}/>},
          {<Route exact path= "/portfolio" Component = {portfolio}/>},
          {<Route exact path= "/contact" Component = {contact}/>}
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

// https://whispering-scrubland-73810.herokuapp.com/