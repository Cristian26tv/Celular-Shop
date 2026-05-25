import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { editPhone } from "../data/phones";

const EditPhone = ({ navigation, route }) => {
  const { phone } = route.params;

  const [name, setName] = useState(phone.name);
  const [price, setPrice] = useState(phone.price);
  const [image, setImage] = useState(phone.image);
  const [color, setColor] = useState(phone.color);
  const [dimension, setDimension] = useState(phone.dimension);
  const [camaraPrincipal, setCamaraPrincipal] = useState(phone.camaraPrincipal);
  const [MPX, setMPX] = useState(phone.MPX);
  const [memoriaInterna, setMemoriaInterna] = useState(phone.memoriaInterna);
  const [marcaProcesador, setMarcaProcesador] = useState(phone.marcaProcesador);
  const [velocidad, setVelocidad] = useState(phone.velocidad);
  const [nucleos, setNucleos] = useState(phone.nucleos);
  const handleEdit = () => {
    if (!name || !price || !image) {
      Alert.alert("Error", "Nombre, precio e imagen son obligatorios");
      return;
    }

    editPhone(
      phone.id,
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

    Alert.alert("Éxito", "Teléfono editado correctamente", [
      {
        text: "Volver",
        onPress: () => navigation.navigate("Home"),
      },
    ]);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#0A0A0A",
        padding: 20,
        marginTop: 40,
      }}
    >
      <Text
        style={{
          color: "#F5C518",
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Editar Teléfono
      </Text>

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>Nombre</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={name}
        onChangeText={setName}
      />

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>Precio</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={price}
        onChangeText={setPrice}
      />

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>Imagen (URL)</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={image}
        onChangeText={setImage}
      />

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>Color</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={color}
        onChangeText={setColor}
      />

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>Dimensión</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={dimension}
        onChangeText={setDimension}
      />

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>
        Camara principal
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={camaraPrincipal}
        onChangeText={setCamaraPrincipal}
      />

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>MPX</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={MPX}
        onChangeText={setMPX}
      />

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>Memoria interna</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={memoriaInterna}
        onChangeText={setMemoriaInterna}
      />

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>
        Marca procesador
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={marcaProcesador}
        onChangeText={setMarcaProcesador}
      />

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>Velocidad</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={velocidad}
        onChangeText={setVelocidad}
      />

      <Text style={{ color: "#F5C518", marginBottom: 4 }}>Nucleos</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#F5C518",
          color: "#fff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        value={nucleos}
        onChangeText={setNucleos}
      />

      <Pressable
        style={{
          backgroundColor: "#F5C518",
          padding: 12,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 10,
          marginBottom: 40,
        }}
        onPress={handleEdit}
      >
        <Text style={{ color: "#0A0A0A", fontWeight: "bold", fontSize: 16 }}>
          Guardar cambios
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default EditPhone;
