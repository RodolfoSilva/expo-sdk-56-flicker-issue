import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useState } from "react";
import SegmentedControl from "@expo/ui/community/segmented-control";

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {Array.from({ length: 70 }, (_, index) => (
        <View key={index}>
          <Text>Teste {index}</Text>
          <SegmentedControl values={["One", "Two", "Three"]} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 16,
  },
});
