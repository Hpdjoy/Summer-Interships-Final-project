import React, { useContext } from "react";
import Data from "../Data/data";
import { FavoriteContext } from "./context/favroiteContext";
import { Image, Text, View, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";

const CartScreen = () => {
  const { ids: favoriteItems, removeFromFavoriteItem } = useContext(FavoriteContext);

  const handleRemove = (id) => {
    Alert.alert(
      "Remove from Cart",
      "Are you sure you want to remove this item from the cart?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: () => {
            removeFromFavoriteItem(id);
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemove(item.id)}
        >
          <Text style={styles.removeButtonText}>Remove from Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const favoriteProducts = Data.filter((product) =>
    favoriteItems.includes(product.id)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      <FlatList
        data={favoriteProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  removeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 30, // Changed to 30
    marginTop: 10,
    alignItems: "center",
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  productList: {
    padding: 10,
  },
});

export default CartScreen;
