import React from 'react';
import ProductList from 'components/product-list.js';
import Checkout from 'components/checkout';
import {  Route, Switch } from 'react-router-dom'; 
export default (props) => {
  return <div className="container">
    <div className="page-header">
      <h1>BT Product Catalog</h1>
    </div>
 <div className="content">

<Switch>
   <Route exact path = "/checkout" component = {Checkout}/>
   <Route exact path = "/" component = {ProductList}/>
</Switch>
   </div>
  </div>;
}