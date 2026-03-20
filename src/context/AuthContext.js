import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const value = await AsyncStorage.getItem("isLoggedIn");
    const username = await AsyncStorage.getItem("username");

    if (value === "true") {
      setIsLoggedIn(true);
      setUser(username);
    }
  };

  // 🔥 ĐĂNG KÝ
  const signUp = async (username, email, password) => {
    if (!username || !email || !password) {
      return { success: false, message: "Vui lòng nhập đầy đủ thông tin" };
    }

    const users = JSON.parse(await AsyncStorage.getItem("users")) || [];

    const exist = users.find((u) => u.email === email);
    if (exist) {
      return { success: false, message: "Email đã tồn tại" };
    }

    const newUser = { username, email, password };
    users.push(newUser);

    await AsyncStorage.setItem("users", JSON.stringify(users));

    return { success: true };
  };

  // 🔥 ĐĂNG NHẬP (CHECK ĐẦY ĐỦ)
  const signIn = async (email, password) => {
    const users = JSON.parse(await AsyncStorage.getItem("users")) || [];

    // ❌ thiếu input
    if (!email || !password) {
      return { success: false, message: "Vui lòng nhập đầy đủ thông tin" };
    }

    // ❌ chưa có tài khoản
    const foundUser = users.find((u) => u.email === email);
    if (!foundUser) {
      return { success: false, message: "Tài khoản chưa tồn tại" };
    }

    // ❌ sai mật khẩu
    if (foundUser.password !== password) {
      return { success: false, message: "Sai mật khẩu" };
    }

    // ✅ thành công
    await AsyncStorage.setItem("isLoggedIn", "true");
    await AsyncStorage.setItem("username", foundUser.username);

    setUser(foundUser.username);
    setIsLoggedIn(true);

    return { success: true };
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("isLoggedIn");
    await AsyncStorage.removeItem("username");

    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, signIn, signUp, signOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};