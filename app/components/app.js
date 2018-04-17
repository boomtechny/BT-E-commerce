import React from 'react';
import ProductList from 'components/product-list.js';
import Checkout from 'components/checkout';
import { Route, Switch } from 'react-router-dom';


export default (props) => {
   /* let logoSource = require('https://s3.amazonaws.com/boomtechny/web/logo.png'); */

    return <div className = "body_container"> 
    <div className = "header_wrapper">
        <div className = "header">
        <img className = "header_logo" src="https://s3.amazonaws.com/boomtechny/web/logo.png"/>
</div>
</div>
<div className = "container">
        <div className = "content" >

        <Switch >
        <Route exact path = "/checkout" component = { Checkout }/> <Route exact path = "/" component ={ ProductList }
    /> </Switch> </div></div></div>;
}