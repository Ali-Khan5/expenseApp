import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';

const styles = StyleSheet.create({
    container: {
       flex: 1,
    //   backgroundColor: '#fff',
      padding:20
    },
  });
  
export default function AllExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod={"Total"}/>
    </View>
  );
}