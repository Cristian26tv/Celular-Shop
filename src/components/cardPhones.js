import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { useCart } from "../context/cartContext";
import { deletePhone } from "../data/phones";
function CardPhones({ onPress, name, price, image, phone, onPressDelete, role }) {
  const { addToCart } = useCart();
  return (
    <View
      style={{
        backgroundColor: "#222222",
        padding: 2,
        borderRadius: 10,
        alignItems: "center",
        margin: 3,
      }}
    >
      <Text
        style={{
          color: "#F5C518",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        {name}
      </Text>

      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100, marginBottom: 10 }}
      />

      <Text style={{ color: "#F5C518", fontSize: 15, fontWeight: "bold" }}>
        {price}
      </Text>

      <View
        style={{ flexDirection: "row", gap: 5, marginTop: 5, marginBottom: 5 }}
      >
        <Pressable
          style={{
            backgroundColor: "#F5C518",
            padding: 5,
            borderRadius: 5,
            width: "50%",
            alignItems: "center",
          }}
          onPress={onPress}
        >
          <Text style={{ color: "#0A0A0A", fontWeight: "bold" }}>Ver</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#F5C518",
            padding: 5,
            borderRadius: 5,
            width: "25%",
            alignItems: "center",
          }}
          onPress={() => {
            addToCart(phone);
            Alert.alert("¡Agregado!", `${phone.name} se agregó al carrito`);
          }}
        >
          <Text style={{ color: "#0A0A0A", fontWeight: "bold", fontSize: 18 }}>
            +
          </Text>
        </Pressable>
      </View>

      {role === "admin" && (
        <Pressable
          style={{
            backgroundColor: "#ff0000",
            padding: 5,
            borderRadius: 5,
            width: "50%",
            alignItems: "center",
          }}
          onPress={() =>
            Alert.alert("Eliminar", "¿Estas seguro de eliminar el producto?", [
              { text: "Cancelar", style: "cancel" },
              {
                text: "Eliminar",
                style: "destructive",
                onPress: () => onPressDelete(),
              },
            ])
          }
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            X
          </Text>
        </Pressable>
      )}
    </View>
  );
}

export default CardPhones;
