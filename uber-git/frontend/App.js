import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';
import Home from './Home';
import Hash from './Hash';

class App extends Component {

  render() {
    return (
        <Router history={browserHistory} onUpdate={this.logPageView}>
            <Route path='/hash/:hash' component={Hash} >
            </Route>
            <Route path='*' component={Home} >
            </Route>
        </Router>
    );
  }
}



export default App;
