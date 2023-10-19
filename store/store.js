import {configureStore} from '@reduxjs/toolkit'

import ExpenseReducer from "./expense";

export const Store=configureStore({
    reducer:{
        ExpenseList:ExpenseReducer
    }
});