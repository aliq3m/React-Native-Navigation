import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMealItem = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMealItem.imageUrl }} />
      <Text style={styles.title}> {selectedMealItem.title}</Text>
      <MealDetails
        duration={selectedMealItem.duration}
        complexity={selectedMealItem.complexity}
        affordability={selectedMealItem.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <Subtitle> Ingredients</Subtitle>

          <List data={selectedMealItem.ingredients}></List>

          <Subtitle> Steps</Subtitle>
          <List data={selectedMealItem.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;
const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",

    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,

    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  listOuter: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});