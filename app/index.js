import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from 'components/app.js'
import reducers from 'reducers'; 
import {Provider} from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import ReduxPromise from 'redux-promise'; 

const store = applyMiddleware(ReduxPromise)(createStore)(reducers);

ReactDOM.render(<Provider store={store}>
  <App/>
  </Provider>, document.getElementById('app')); 

