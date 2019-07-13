import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from 'containers/Login';
import HomePage from 'containers/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
