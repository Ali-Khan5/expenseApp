import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
  },
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500
  },
  flat:{
    backgroundColor:'transparent'
  },
  buttonText:{
    color:'white',
    textAlign:'center'
  },
  flatText:{
    color:GlobalStyles.colors.primary200
  },
  Pressed:{
    opacity:0.50,
    backgroundColor:GlobalStyles.colors.primary100,
    borderRadius:4
  },

});

export default function Button({ children, onPress ,mode,CustomStyle}) {
  return (
    <View style={CustomStyle}>
      <Pressable onPress={onPress} style={({pressed})=>pressed&&styles.Pressed}>
        <View style={[styles.button,mode==='flat'&&styles.flat]}>
          <Text style={[styles.buttonText,mode=='pressed'&& styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}
