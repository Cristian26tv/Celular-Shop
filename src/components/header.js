import EvilIcons from "@react-native-vector-icons/evil-icons";
import { StyleSheet, Text, View, Pressable } from "react-native";

function Header({ onPress, onPressAdd, role }) {
  return (
    <View style={styles.header}>
      
      {/* Logo izquierda */}
      <View style={{ flexDirection: "row", gap: 5, marginLeft: 10 }}>
        <Text style={styles.headerTitle}>Celular</Text>
        <Text style={styles.headerTitle}>Shop</Text>
      </View>

      {/* Iconos derecha */}
      <View style={{ flexDirection: "row", gap: 10, marginRight: 10 }}>
        {role === "admin" && (
          <Pressable onPress={onPressAdd}>
            <EvilIcons name="plus" size={35} color="#F5C518" />
          </Pressable>
        )}

        <Pressable onPress={onPress}>
          <EvilIcons name="cart" size={35} color="#F5C518" />
        </Pressable>
      </View>

    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // logo a la izquierda, iconos a la derecha
  },
  headerTitle: {
    color: "#F5C518",
    fontSize: 20,
    fontWeight: "bold",
  },
});