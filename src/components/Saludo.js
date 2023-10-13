import { View, Text } from "react-native";
import React from "react";

export default function Saludo({ name }) {
  return (
    <View>
      <Text style={{ color: "#0f0" }}>Saludos {name}</Text>
    </View>
  );
}
