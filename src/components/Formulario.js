import React from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";

export default function Form({ name, setName, showSaludo }) {
  const [count, setCount] = React.useState(0);
  const handleNombre = (e) => {
    setName(e.nativeEvent.text);
    if (e.nativeEvent.text.length > count) setCount(e.nativeEvent.text.length);
    else {
      setCount(0);
      showSaludo(false);
    }
    console.log(e.nativeEvent);
  };

  return (
    <View>
      <Text style={styles.text}>Ingresa tu nombre</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#acacac"
        placeholder="NOMBRE"
        value={name}
        onChange={(e) => handleNombre(e)}
      />
      <Button title="Aceptar" style={styles.button} onPress={showSaludo} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
  },
  input: {
    marginTop: 12,
    marginBottom: 12,
    padding: 8,
    color: "#fff",
    borderStyle: "solid",
    borderColor: "#fff",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  button: {
    marginTop: 5,
    backgroundColor: "658230",
  },
});
