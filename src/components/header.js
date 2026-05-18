import EvilIcons from "@react-native-vector-icons/evil-icons";
import { StyleSheet, Text, View, Pressable } from "react-native";

function Header({onPress}) {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "33%", marginLeft: 10 }}>
        <Text style={styles.headerTitle}>Celular</Text>
        <Text style={styles.headerTitle}>Shop</Text>

      </View>
      <EvilIcons name="cart" size={30} color="#F5C518" style={{ position: "absolute", right: 10 }} />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 70,
    alignItems: "left",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#F5C518",
    fontSize: 20,
    fontWeight: "bold",
  },
});