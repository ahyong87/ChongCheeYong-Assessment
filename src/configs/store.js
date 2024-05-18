import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';

import reducers from '../reducers';

const middleware = [thunk];
// const thunkMiddleware = require('redux-thunk').default;
const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
