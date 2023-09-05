import { useState } from "react";
// Import statement untuk mengimpor komponen yang akan digunakan dalam aplikasi
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// Deklarasi fungsi komponen utama 'App'
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    // Awal dari tampilan aplikasi
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}/>;
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
