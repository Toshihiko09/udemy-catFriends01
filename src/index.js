import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchCats, requestCats } from './reducers';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchCats, requestCats })
const store = 
  createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
    <Provider store={store} >
      <App /> 
    </Provider> , document.getElementById('root'));

serviceWorker.unregister();
