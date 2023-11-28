import { useState } from "react";
// Import statement untuk mengimpor komponen yang akan digunakan dalam aplikasi
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// Deklarasi fungsi komponen utama 'App'
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }


  //--Untuk menghapus--//
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    //console.log('Delet');
  }

  return (
    // Awal dari tampilan aplikasi
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
    paddingHorizontal: 16,
  },
  goalsContainer: {
    // Mengganti 'gooalsContainer' menjadi 'goalsContainer'
    flex: 5,
  }
});
