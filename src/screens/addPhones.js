import { savePhone } from "../data/phones";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";
import { useState } from "react";

const AddPhones = ({ navigation }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [dimension, setDimension] = useState("");
  const [camaraPrincipal, setCamaraPrincipal] = useState("");
  const [MPX, setMPX] = useState("");
  const [memoriaInterna, setMemoriaInterna] = useState("");
  const [marcaProcesador, setMarcaProcesador] = useState("");
  const [velocidad, setVelocidad] = useState("");
  const [nucleos, setNucleos] = useState("");


  const addPhone = () => {
    console.log(
      id,
      name,
      price,
      image,
      color,
      dimension,
      camaraPrincipal,
      MPX,
      memoriaInterna,
      marcaProcesador,
      velocidad,
      nucleos,
    );
    const ok = savePhone({
      id: id,
      name: name,
      price: price,
      image: image,
      color: color,
      dimension: dimension,
      camaraPrincipal: camaraPrincipal,
      MPX: MPX,
      memoriaInterna: memoriaInterna,
      marcaProcesador: marcaProcesador,
      velocidad: velocidad,
      nucleos: nucleos,
    });
    console.log(ok);

    if (!ok) {
      Alert.alert("Error", "No se pudo agregar el telefono");
      return;
    }

    Alert.alert("Telefono agregado", "El telefono se agrego con exito", [
      {
        text: "Ir a home",
        onPress: () => navigation.navigate("Home"),
      },
    ]);
  };


  
   return (
    
    <View style={styles.container}marginTop={40}>
      <ScrollView>
       <Text style={styles.title}>Agregar Telefono</Text>

      <Text style={styles.label}>Id del Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el id"
        placeholderTextColor="#999"
        value={id}
        onChangeText={setId}
      />

      <Text style={styles.label}>Nombre del telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="escribe el nombre"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Precio del telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="escribe el precio"
        placeholderTextColor="#999"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.label}>Imagen del Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="Agregar la imagen"
        placeholderTextColor="#999"
        value={image}
        onChangeText={setImage}
      />

      <Text style={styles.label}>Color del Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el color"
        placeholderTextColor="#999"
        value={color}
        onChangeText={setColor}
      />

      <Text style={styles.label}>Dimension del Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe la dimension"
        placeholderTextColor="#999"
        value={dimension}
        onChangeText={setDimension}
      />

      <Text style={styles.label}>Camara Principal del Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe la camara principal"
        placeholderTextColor="#999"
        value={camaraPrincipal}
        onChangeText={setCamaraPrincipal}
      />

      <Text style={styles.label}>MPX del Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el MPX"
        placeholderTextColor="#999"
        value={MPX}
        onChangeText={setMPX}
      />

      <Text style={styles.label}>Memoria Interna del Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe la memoria interna"
        placeholderTextColor="#999"
        value={memoriaInterna}
        onChangeText={setMemoriaInterna}
      />

      <Text style={styles.label}>Marca del Procesador del Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe la marca del procesador"
        placeholderTextColor="#999"
        value={marcaProcesador}
        onChangeText={setMarcaProcesador}
      />

      <Text style={styles.label}>Velocidad del Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe la velocidad"
        placeholderTextColor="#999"
        value={velocidad}
        onChangeText={setVelocidad}
      />

      <Text style={styles.label}>Nucleos del Telefono</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe los nucleos"
        placeholderTextColor="#999"
        value={nucleos}
        onChangeText={setNucleos}
      />

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={addPhone}
      >
        <Text style={styles.buttonText}>Guardar</Text>
      </Pressable>
  </ScrollView>
     
    </View>
  ); 
  
  
};

export default AddPhones;

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
