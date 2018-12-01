import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Home from './views/home';
import Portfolio from './views/portfolio';
import Apple from './views/apple';
import Reasons from './views/reasons';
import Model from './views/model';
import Paan from './views/paan';
import Grocery from './views/grocery';
import About from './views/about';


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/portfolio" component={Portfolio}/>
            <Route exact path ="/portfolio/maroapple" component={Apple}/>
            <Route exact path ="/portfolio/maropuns" component={Reasons}/>
            <Route exact path ="/portfolio/maronawn" component={Model}/>
            <Route exact path ="/portfolio/ethnopaan" component={Paan}/>
            <Route exact path ="/portfolio/uxgroceries" component={Grocery}/>
            <Route exact path ="/about" component={About}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
