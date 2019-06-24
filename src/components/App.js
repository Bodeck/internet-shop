import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import Cart from './Cart';
import NoMatch from './NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/cart"} component={Cart} />
            <Route exact path={"/product"} component={Product} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </Router>
    )
  }
}

export default App;