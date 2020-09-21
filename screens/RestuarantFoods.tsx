import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FoodList from "./FoodList";

const Drawer = createDrawerNavigator();

export default function RestuarantFoods({ navigation, route }: any) {
  const { resturant } = route.params;
  let allFoods = resturant.categories.reduce(
    (allFoods: any, { foods, name }: any) => [
      ...allFoods,
      ...foods.map(({ id, ...rest }: any) => ({
        id: `${name}-${id}`,
        ...rest,
      })),
    ],
    []
  );
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="All">
        {(props) => <FoodList {...props} foods={allFoods}></FoodList>}
      </Drawer.Screen>
      {resturant.categories.map((category: any) => {
        return (
          <Drawer.Screen name={category.name} key={category.id}>
            {(props) => <FoodList {...props} foods={category.foods}></FoodList>}
          </Drawer.Screen>
        );
      })}
    </Drawer.Navigator>
  );
}
