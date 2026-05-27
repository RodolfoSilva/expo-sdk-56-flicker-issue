import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Host, TextInput, useNativeState } from "@expo/ui";
import { useCallback } from "react";

function formatPhone(input) {
  "worklet";
  try {
    console.log(input);
    const digits = input.replace(/\D/g, "").slice(0, 10);
    console.log(digits);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  } catch (e) {
    console.log(e);
    return "";
  }
}

export default function App() {
  const phone = useNativeState("");
  const selection = useNativeState({ start: 0, end: 0 });

  const handleChangeText = useCallback(
    (value) => {
      "worklet";
      console.log("CB", value);
      const formatted = formatPhone(value);
      if (formatted !== value) {
        phone.value = formatted;
        // Snaps to end for demo. Real masks need smarter cursor handling.
        selection.value = { start: formatted.length, end: formatted.length };
      }
    },
    [selection, phone],
  );

  return (
    <View style={styles.container}>
      <Host matchContents={{ vertical: true }} style={{ width: 300 }}>
        <TextInput
          value={phone}
          selection={selection}
          keyboardType="phone-pad"
          placeholder="(555) 123-4567"
          textAlign="center"
          onChangeText={handleChangeText}
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
  },
});
