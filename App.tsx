import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ResturantList from "./screens/RestuarantList";
import RestuarantFoods from "./screens/RestuarantFoods";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Resturants">
        <Stack.Screen name="Resturants" component={ResturantList} />
        <Stack.Screen name="Foods" component={RestuarantFoods}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
