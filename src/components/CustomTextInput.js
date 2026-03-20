import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function CustomTextInput(props) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
});