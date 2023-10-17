import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
  },
});

function renderExpenseItem(itemData) {
  return (
    <ExpenseItem
      description={itemData.item.description}
      amount={itemData.item.amount}
      date={itemData.item.date}
    />
  );
}
export default function ExpensesList({ expenses }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
