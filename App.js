import React from "react";
import { View, StyleSheet } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";
import RootRouter from "./src/navigation/RootRouter";

export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <RootRouter />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // 👈 căn giữa
    backgroundColor: "#ddd", // nền ngoài
  },
});