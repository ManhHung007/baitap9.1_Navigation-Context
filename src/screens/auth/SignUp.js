import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import { AuthContext } from "../../context/AuthContext";

export default function SignUp({ navigation }) {
  const { signUp } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const result = await signUp(username, email, password);

    if (!result.success) {
      Alert.alert("Lỗi", result.message);
      return;
    }

    Alert.alert("Thành công", "Đăng ký thành công");
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account ✨</Text>

      <CustomTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <CustomTextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Sign Up" onPress={handleRegister} />

      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.link}>
          Already have an account, Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  link: {
    marginTop: 15,
    textAlign: "center",
    color: "blue",
  },
});