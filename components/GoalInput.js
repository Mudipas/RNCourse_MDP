import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, } from 'react-native';


function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button} ><Button title="Add Goal" onPress={addGoalHandler} /></View>
          <View style={styles.button} ><Button title="Cancel" /></View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 2, // Mengganti 'borderBottoom' menjadi 'borderBottom'
    borderBottomColor: "green",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "blue",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button:{
    width:'100',
    marginHorizontal:6,
  }
});