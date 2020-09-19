import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RestuarantFoods({ navigation, route }: any) {
  const { resturant } = route.params;
  return (
    <View>
      <Text>{resturant.name}</Text>
    </View>
  );
}
