import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';

const styles = StyleSheet.create({
    container: {
       flex: 1,
    //   backgroundColor: '#fff',
      
    },
  });
  
export default function RecentExpense() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod={'Last 7 Days'}/>
    </View>
  );
}