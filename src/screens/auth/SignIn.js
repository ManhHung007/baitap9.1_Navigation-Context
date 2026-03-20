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
import IconButton from "../../components/IconButton";
import { AuthContext } from "../../context/AuthContext";

export default function SignIn({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await signIn(email, password);

    if (!result.success) {
      Alert.alert("Lỗi", result.message);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>

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

      <Button title="Login" onPress={handleLogin} />

      <Text style={styles.or}>--- Or login with ---</Text>

      <IconButton title="Google" />
      <IconButton title="Facebook" />

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.link}>
          No account yet? SignIn now
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
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  or: {
    textAlign: "center",
    marginVertical: 15,
  },
  link: {
    marginTop: 15,
    textAlign: "center",
    color: "blue",
  },
});