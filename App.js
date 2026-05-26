import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Host, TextInput, useNativeState } from "@expo/ui";
import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  return (
    <View style={styles.container}>
      <Host matchContents={{ vertical: true }} style={{ width: 300 }}>
        <TextInput
          ref={inputRef}
          defaultValue="Hello Expo Team"
          placeholder="Type here"
          textAlign="center"
          onChangeText={(value) => console.log(value)}
          style={styles.input}
        />
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#99FF99",
    borderWidth: 0,
    textAlign: "center",
  },
});
