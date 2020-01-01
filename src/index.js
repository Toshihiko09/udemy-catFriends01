import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchCats } from './reducers';
import 'tachyons';

const logger = createLogger();
const store = createStore(searchCats, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store} >
      <App /> 
    </Provider> , document.getElementById('root'));

serviceWorker.unregister();
