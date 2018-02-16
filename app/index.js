import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from 'components/app.js';

import reducers from 'reducers'; 
import {Provider} from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import ReduxPromise from 'redux-promise'; 
import { HashRouter, Router, Route, Switch } from 'react-router-dom'; 
import createHashHistory from 'history/createHashHistory'; 
const store = applyMiddleware(ReduxPromise)(createStore)(reducers);


const history = createHashHistory(); 
ReactDOM.render(

<Provider store={store}>
<Router history={history}>

<Route path="/" component={App}>

</Route>
</Router>
  
  </Provider>, document.getElementById('app')); 

