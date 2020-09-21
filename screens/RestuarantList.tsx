import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Item = ({ name, onClick }: any) => (
  <TouchableOpacity onPress={onClick}>
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  </TouchableOpacity>
);

export default function RestuarantList({ navigation }: any) {
  const data = [
    {
      id: 1,
      name: "Thalapakatti",
      categories: [
        {
          id: 1,
          name: "Soups",
          foods: [
            {
              id: "id",
              name: "Chicken Soup",
              price: 5.44,
              rating: 5,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl eleifend, imperdiet nibh nec, facilisis est.",
            },
          ],
        },
        {
          id: 2,
          name: "Briyani",
          foods: [
            {
              id: "id",
              name: "Chicken Briyani",
              price: 5.44,
              rating: 3,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nisl eleifend, imperdiet nibh nec, facilisis est.",
            },
          ],
        },
      ],
    },
    { id: 2, name: "Anjappar", categories: [] },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(item) => (
          <Item
            name={item.item.name}
            onClick={() =>
              navigation.navigate("Foods", {
                resturant: item.item,
              })
            }
          ></Item>
        )}
        keyExtractor={(item) => item.id + ""}
      ></FlatList>
      {/* <Text>Hai Ashok</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
