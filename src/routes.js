import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  HomePage  from './components/home/HomePage'
import  Contact  from './components/Contact'
import  Cart  from './components/cart/Cart'
import  Product  from './components/product/Product'
import  NoMatch  from './components/NoMatch'

export default (
    <Switch>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/contact"} component={Contact} />
      <Route exact path={"/cart"} component={Cart} />
      <Route exact path={"/product/:id"} component={Product} />
      <Route component={NoMatch} />
    </Switch>
)