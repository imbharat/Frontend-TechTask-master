import { createStore } from 'redux';
import { reducer } from './CartReducer';

export default createStore(reducer);