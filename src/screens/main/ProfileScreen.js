import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function ProfileScreen() {
  const { signOut, user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👤</Text>

      {/* 👇 HIỂN THỊ USERNAME */}
      <Text style={styles.name}>{user}</Text>

      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    fontSize: 80,
  },
  name: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
});