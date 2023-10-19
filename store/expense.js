import { createSlice } from "@reduxjs/toolkit";

const ExpenseListSlice = createSlice({
  name: "ExpenseList",
  initialState: {
    Dummy_Expenses: [
      {
        id: "e1",
        description: "pair of shoes",
        amount: 640,
        date: "2021-12-1",
      },
      {
        id: "e2",
        description: "pair of trousers",
        amount: 1640,
        date: "2022-2-25",
      },
      {
        id: "e3",
        description: "some bananas",
        amount: 200,
        date: "2022-3-1",
      },
      {
        id: "e4",
        description: "a book",
        amount: 700,
        date: "2022-5-2",
      },
      {
        id: "e5",
        description: "a plushie",
        amount: 320,
        date: "2022-5-4",
      },
      {
        id: "e6",
        description: "a bottle",
        amount: 320,
        date: "2023-10-20",
      },
    ],
  },
  reducers: {
    addExpense: (state, actions) => {
      state.Dummy_Expenses.push(actions.payload.expenseList);
    },
    deleteExpense: (state, actions) => {
   state.Dummy_Expenses= state.Dummy_Expenses.filter(currentVal=> currentVal.id !=actions.payload.id)
   
    },
    updateExpense:(state,actions)=>{
      let currentVal= state.Dummy_Expenses.find(val=>val.id==actions.payload.id);
      let indexToFind=state.Dummy_Expenses.indexOf(currentVal);
      let tempVal={...currentVal,...actions.payload}
      // tempVal={...tempVal,...actions.payload.id};

      console.log('temp Val is ',tempVal);
      state.Dummy_Expenses[indexToFind]=tempVal;
    }
  },
});

export const addExpense=ExpenseListSlice.actions.addExpense;
export const deleteExpense=ExpenseListSlice.actions.deleteExpense;
export const updateExpense=ExpenseListSlice.actions.updateExpense;

export default ExpenseListSlice.reducer;