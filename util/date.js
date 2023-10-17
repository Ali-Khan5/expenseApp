import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
  },
});


export default function getFormattedDate(date) {
  return  `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    
  
}
