import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const Dummy_Expenses = [
  {
    id: "e1",
    description: "pair of shoes",
    amount: 640,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "pair of trousers",
    amount: 1640,
    date: new Date("2022-2-25"),
  },
  {
    id: "e3",
    description: "some bananas",
    amount: 200,
    date: new Date("2022-3-1"),
  },
  {
    id: "e4",
    description: "a book",
    amount: 700,
    date: new Date("2022-5-2"),
  },
  {
    id: "e5",
    description: "a plushie",
    amount: 320,
    date: new Date("2022-5-4"),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    //   backgroundColor: '#fff',
    padding: 24,
  },
});

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={Dummy_Expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={Dummy_Expenses} />
    </View>
  );
}
