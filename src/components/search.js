import EvilIcons from "@react-native-vector-icons/evil-icons";
import { StyleSheet, Text, View, TextInput } from "react-native";

function Search() {
  return (
    <View style={styles.search}>
      <TextInput
        type="text"
        placeholder="Buscar celular, marca..."
        placeholderTextColor="#F5C518"
        style={{
          backgroundColor: "#1A1A1A",
          color: "#F5C518",
          padding: 10,
          borderRadius: 5,
          width: "80%",
          margin: 20,
        }}
      />
    </View>
  );
}

export default Search;
const styles = StyleSheet.create({
  search: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
