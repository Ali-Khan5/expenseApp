import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    borderRadius:24,
    padding:6,
    marginHorizontal:8,
    marginVertical:2
  },
  pressed:{
    opacity:0.75
  }
});

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={({pressed})=>pressed?styles.pressed:null}>
      <View style={styles.container}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}
