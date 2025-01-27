import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducers/reducer';
import thunk from 'redux-thunk';

// WITH THUNK
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
