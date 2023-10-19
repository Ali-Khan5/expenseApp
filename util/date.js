import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
  },
});


export default function getFormattedDate(date) {
  let tempDate=new Date(date);
  return  `${tempDate.getFullYear()}-${tempDate.getMonth()+1}-${tempDate.getDate()}`;
    
  
}

export function getDateMinusDays(date,days){
  return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days);
}