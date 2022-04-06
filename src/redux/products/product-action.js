import { createAction } from '@reduxjs/toolkit';


const allProducts = createAction('download/allProducts');

const productActions = { allProducts };
export default productActions;
