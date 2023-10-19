import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/iconButton";
import { GlobalStyles } from "../constants/styles";
import { useDispatch } from "react-redux";
import { addExpense, deleteExpense ,updateExpense} from "../store/expense";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: '#fff',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  button: {
    minWidth: 90,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const dispatch = useDispatch();
  const isEditing = !!editedExpenseId; //converted into boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Mange Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);


  function deleteExpenseHandler(id) {
    // console.log("id is", id);
    dispatch(deleteExpense({ id: id }));

    navigation.goBack();
  }
  
  function cancelExpenseHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    navigation.goBack();
  }
  function updateStuff(id){
    dispatch(updateExpense({id:id,amount:500}))
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          CustomStyle={styles.button}
          mode="flat"
          onPress={cancelExpenseHandler}
        >
          Cancel
        </Button>
        <Button CustomStyle={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={24}
            onPress={() => deleteExpenseHandler(editedExpenseId)}
          />
            <IconButton
            icon="add"
            color={'white'}
            size={24}
            onPress={() => updateStuff(editedExpenseId)}
          />
        </View>
      )}
    </View>
  );
}
