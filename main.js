import React from 'react';
import { Switch } from 'react-router-dom';
import Cover from './cover';
import { Route } from 'react-router-dom';
import Resume from './resume';
import Contact from './contact';
import { Component } from 'react';

class Main extends Component {
    render() {
     return(
      <Switch>
        <Route exact path="/" component={Cover} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
     )
  }
}

export default Main;