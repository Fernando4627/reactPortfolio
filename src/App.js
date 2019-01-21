import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavbarSection from '';
import FooterSection from '';
import homePage from './components/content/home';
import MainContainer from '';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavbarSection/>
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
