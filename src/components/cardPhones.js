import { StyleSheet, Text, View, Button, Pressable, Image } from "react-native";

function CardPhones({ onPress, name, price, image }) {
  return (
    <View style={{
      backgroundColor: "#222222",
      padding: 2,
      borderRadius: 10,
      alignItems: "center",
      margin: 3,
    }}>
      
      {/* Antes era texto fijo "iPhone", ahora usa el prop */}
      <Text style={{ color: "#F5C518", fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        {name}
      </Text>

      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100, marginBottom: 10 }}
      />

      <Text style={{ color: "#F5C518", fontSize: 15, fontWeight: "bold" }}>
        {price}
      </Text>

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
    </View>
  );
}

export default CardPhones;