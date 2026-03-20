import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function IconButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ddd",
    alignItems: "center",
  },
});