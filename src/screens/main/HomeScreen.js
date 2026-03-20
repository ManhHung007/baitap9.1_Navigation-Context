import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Home 🍔</Text>

      {/* Banner */}
      <Image
        source={{ uri: "https://picsum.photos/600/300" }}
        style={styles.banner}
      />

      {/* Sections */}
      <View style={styles.card}>
        <Text style={styles.section}>Top Categories</Text>
        <Image
          source={{ uri: "https://picsum.photos/300/200" }}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.section}>Popular Items</Text>
        <Image
          source={{ uri: "https://picsum.photos/301/200" }}
          style={styles.image}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.section}>Sale Off</Text>
        <Image
          source={{ uri: "https://picsum.photos/302/200" }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  banner: {
    width: "100%",
    height: 140, // 👈 cố định nhỏ lại
    borderRadius: 10,
    marginBottom: 15,
  },

  card: {
    marginBottom: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,

    // shadow nhẹ
    elevation: 3,
  },

  section: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  image: {
    width: "100%",
    height: 120, // 👈 cố định
    borderRadius: 10,
  },
});