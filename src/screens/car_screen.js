import { StyleSheet, Text, View, ScrollView, Image, Pressable } from "react-native";
import { useCart } from "../context/cartContext";
import Header from "../components/header";
function CarScreen({navigation}) {
    const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/\./g, ""));
    return sum + price * item.quantity;
  }, 0);

    return (
    <View style={{ flex: 1, marginTop: 40, backgroundColor: "#0A0A0A" }}>
      <View style={{ backgroundColor: "#141414" }}>
        <Header />
      </View>

      <ScrollView style={{ padding: 10 }}>

        {cart.length === 0 ? (
          <Text style={{ color: "#F5C518", textAlign: "center", marginTop: 40, fontSize: 16 }}>
            Tu carrito está vacío
          </Text>
        ) : (
          cart.map((item) => (
            <View key={item.id} style={{
              backgroundColor: "#1A1A1A",
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
            }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 70, height: 70, borderRadius: 8 }}
              />

              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ color: "#F5C518", fontWeight: "bold", fontSize: 16 }}>
                  {item.name}
                </Text>
                <Text style={{ color: "#fff", fontSize: 13 }}>
                  Precio: {item.price}
                </Text>
                <Text style={{ color: "#fff", fontSize: 13 }}>
                  Cantidad: {item.quantity}
                </Text>
              </View>

              <Pressable
                onPress={() => removeFromCart(item.id)}
                style={{ backgroundColor: "#ff4444", padding: 8, borderRadius: 5 }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>✕</Text>
              </Pressable>

            </View>
          ))
        )}

        {cart.length > 0 && (
          <View style={{
            backgroundColor: "#1A1A1A",
            borderRadius: 10,
            padding: 15,
            marginTop: 10,
            marginBottom: 60,
          }}>
            <Text style={{ color: "#F5C518", fontWeight: "bold", fontSize: 18, textAlign: "right" }}>
              Total: ${total.toLocaleString("es-CO")}
            </Text>
          </View>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0A0A0A",
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white"
    },
})  
export default CarScreen