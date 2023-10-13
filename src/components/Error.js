import { View, Text } from "react-native";
import React from "react";

export default function Error() {
  return (
    <View>
      <Text style={{ color: "#f00" }}>
        Debes ingresar tu nombre antes de darle aceptar!
      </Text>
    </View>
  );
}
