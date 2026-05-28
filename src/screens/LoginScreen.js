// src/screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import { validateUser } from "../data/userDB"; // importar validador

const LoginScreen = ({ navigation }) => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!correo || !password) {
      Alert.alert("Error", "Debes ingresar correo y contraseña");
      return;
    }

    const result = validateUser(correo, password);
    console.log(result);

    if (!result.ok) {
      if (result.reason === "not_found") {
        Alert.alert("Error", "No existe un usuario con ese correo");
      } else if (result.reason === "wrong_password") {
        Alert.alert("Error", "Contraseña incorrecta");
      }
      return;
    }
    // // Si todo está bien
    navigation.navigate("Home", { role: result.user.role });

    // LOGIN CORRECTO → NAVEGA
    //
    // ← CAMBIA POR TU SCREEN
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <Text style={styles.label}>Correo</Text>
      <TextInput
  style={styles.input}
  placeholder="correo@ejemplo.com"
  placeholderTextColor="#999"
  keyboardType="email-address"
  autoCapitalize="none"
  value={correo}
  onChangeText={setCorreo}
/>

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
  style={styles.input}
  placeholder="********"
  placeholderTextColor="#999"
  secureTextEntry
  value={password}
  onChangeText={setPassword}
/>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <View style={styles.registerLink}>
        <Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#F5C518" }}>¿No tienes cuenta?</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#0A0A0A",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#F5C518",
  },
  label: {
    marginTop: 10,
    marginBottom: 4,
    fontWeight: "900",
    color: "#F5C518",
  },
  input: {
    borderWidth: 1,
    borderColor: "#eb1313",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    color: "#FFF",
  },
  registerLink: {
    marginTop: 20,
  },

  button: {
    backgroundColor: "#F5C518",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: "#0A0A0A",
    fontWeight: "bold",
    fontSize: 16,
  },
});
