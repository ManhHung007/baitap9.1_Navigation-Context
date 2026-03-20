import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

export default function RootRouter() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <View style={styles.wrapper}>
      <NavigationContainer>
        {isLoggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    maxWidth: 400, // 👈 GIỚI HẠN GIỐNG MOBILE
    flex: 1,
    backgroundColor: "#fff",
  },
});