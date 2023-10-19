import { StyleSheet, Text, View } from "react-native";
import { useSelector, UseSelector } from "react-redux/";
import ExpensesOutput from "../components/ExpensesOutput";
import { getDateMinusDays } from "../util/date";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: '#fff',
  },
});

export default function RecentExpense() {
  const allExpenses = useSelector((state) => state.ExpenseList.Dummy_Expenses);
  const recentExpenses = allExpenses.filter((val) => {
    const today = new Date();
    const dateSevenDaysAgo = getDateMinusDays(today, 7);
    return new Date(val.date) > dateSevenDaysAgo;
  });
  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod={"Last 7 Days"}
        fallBackText="You dont have any Recent Expenses"
      />
    </View>
  );
}
