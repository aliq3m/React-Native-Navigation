import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screen/CategoriesScreen";
import MealsOverviewScreen from "./screen/MealsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <stack.Screen
            name="MealsCategories"
            options={{
              title: "All Categories",
            }}
            component={CategoriesScreen}
          />
          <stack.Screen
            name="MealsOverview"
            options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              return { title: catId };
            }}
            component={MealsOverviewScreen}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
