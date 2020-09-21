import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const prepareStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <AntDesign name="star" size={24} color="gold" key={`star-${i}`} />
    );
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(
      <AntDesign
        name="star"
        size={24}
        color="gold"
        style={styles.emptyStar}
        key={`empty-star-${i}`}
      />
    );
  }
  return stars;
};

const FoodItem = ({ food }: any) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.foodContainer}>
      <Text style={styles.foodName}>{food.name}</Text>
      <Text style={styles.foodDescription}>{food.description}</Text>
      <Text>${food.price}</Text>
      <Text>{prepareStars(food.rating)}</Text>
      <View style={styles.counter}>
        <Text
          onPress={() => setCount(count + 1)}
          style={[styles.counterBtn, styles.counterEl]}
        >
          +
        </Text>
        <Text style={[styles.counterEl, styles.counterDisplay]}>{count}</Text>
        <Text
          style={[styles.counterBtn, styles.counterEl]}
          onPress={() => {
            let _count = count - 1;
            setCount(_count >= 0 ? _count : 0);
          }}
        >
          -
        </Text>
      </View>
    </View>
  );
};

export default function FoodList({ navigation, route, foods }: any) {
  //   const { resturant } = route.params;
  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <FoodItem food={item}></FoodItem>}
      keyExtractor={({ id }) => id}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  foodContainer: {
    marginBottom: 10,
    marginTop: 10,
    borderBottomColor: "#696969",
    borderBottomWidth: 2,
  },
  foodName: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 25,
  },
  foodDescription: {
    color: "#808080",
  },
  emptyStar: {
    color: "grey",
    borderWidth: 1,
    borderColor: "black",
  },
  counter: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 20,
  },
  counterBtn: {
    backgroundColor: "#dcdcdc",
    marginRight: 5,
    marginLeft: 5,
    // width: 20,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  counterEl: {
    fontSize: 25,
  },
  counterDisplay: {},
});
