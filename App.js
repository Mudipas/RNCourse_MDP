import { useState } from 'react';
// Import statement untuk mengimpor komponen yang akan digunakan dalam aplikasi
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

// Deklarasi fungsi komponen utama 'App'
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }


  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }



  return (
    // Awal dari tampilan aplikasi
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler} />
        <Button
          title="Add Goal"
          onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText} >{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
    // Akhir dari tampilan aplikasi
  );
}

// Objek yang berisi gaya-gaya untuk digunakan dalam komponen
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 2, // Mengganti 'borderBottoom' menjadi 'borderBottom'
    borderBottomColor: 'green'
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'blue',
    width: '65%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: { // Mengganti 'gooalsContainer' menjadi 'goalsContainer'
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }
});
