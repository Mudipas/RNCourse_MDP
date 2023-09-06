import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, } from 'react-native';


function GoalInput(props) {
 const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

function addGoalHandler(){
  props.onAddGoal(enteredGoalText);
  setEnteredGoalText('');
}

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2, // Mengganti 'borderBottoom' menjadi 'borderBottom'
    borderBottomColor: "green",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "blue",
    width: "65%",
    marginRight: 8,
    padding: 8,
  },
});