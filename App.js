import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Form from "./src/components/Formulario";
import Saludo from "./src/components/Saludo";
import Error from "./src/components/Error";

export default function App() {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState(false);
  const showSaludo = (data) => {
    setMessage(true);
    if (!data) setMessage(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de saludos!</Text>
      <Form name={name} setName={setName} showSaludo={showSaludo} />
      <StatusBar style="auto" />
      {message && name !== "" && <Saludo name={name} />}
      {message && name === "" && <Error />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 40,
  },
});
