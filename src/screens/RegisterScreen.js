// src/screens/RegisterScreen.js
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
import { saveUser } from "../data/userDB"; // importar nuestro "diccionario"

const RegisterScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!nombre || !correo || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    // Guardar en el diccionario
    const ok = saveUser(nombre, correo, password);

    if (!ok) {
      Alert.alert("Error", "Ya existe un usuario con ese correo");
      return;
    }

    Alert.alert("Registro exitoso", "Ahora puedes iniciar sesión", [
      {
        text: "Ir a Login",
        onPress: () => navigation.navigate("LoginScreen"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        placeholderTextColor="#999"
        value={nombre}
        onChangeText={setNombre}
      />

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
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <View style={styles.loginLink}>
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={{ color: "#F5C518" }}>¿Ya tienes cuenta?</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterScreen;

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

  loginLink: {
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
