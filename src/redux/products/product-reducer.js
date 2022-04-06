import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './product-action';

const products = createReducer([], {
     [actions.allProducts]: ( _, { payload }) => payload,
});

export default combineReducers({
    products
});