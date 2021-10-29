import {applyMiddleware, createStore} from 'redux';
import {currencyReducer} from './currencyReducer';
import ThunkMiddleware  from 'redux-thunk';

const store = createStore(currencyReducer, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
