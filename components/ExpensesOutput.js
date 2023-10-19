import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useSelector } from "react-redux";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    //   backgroundColor: '#fff',
    padding: 24,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 100,
  },
});

export default function ExpensesOutput({
  expenses,
  expensesPeriod,
  fallBackText,
}) {
  const Dummy_Expenses = useSelector(
    (state) => state.ExpenseList.Dummy_Expenses
  );
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;
  if (expenses && expenses.length > 0) {
    content = <ExpensesList expenses={expenses ? expenses : Dummy_Expenses} />;
  } else if (!expenses) {
    content = <ExpensesList expenses={Dummy_Expenses} />;
  }
  console.log("render?");
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={expenses ? expenses : Dummy_Expenses}
        periodName={expensesPeriod}
      />
      {content}
    </View>
  );
}
