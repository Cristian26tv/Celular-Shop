import { ScrollView, Text, View, Pressable } from "react-native";
import Header from "../components/header";
import Search from "../components/search";
import CardPhones from "../components/cardPhones";
import phones, { deletePhone } from "../data/phones";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = ({ navigation, route }) => {
  const role = route.params?.role || "user";
  const [lista, setLista] = useState(Object.values(phones));

  useFocusEffect(
    useCallback(() => {
      setLista(Object.values(phones));
    }, [])
  );

  const handleDelete = (id) => {
    deletePhone(id);
    setLista(Object.values(phones));
  };

  return (
    <View style={{ height: "100%", marginTop: 40, backgroundColor: "#0A0A0A" }}>
      <ScrollView>
        <View style={{ backgroundColor: "#141414" }}>
          <Header
            role={role}
            onPress={() => navigation.navigate("Car")}
            onPressAdd={() => navigation.navigate("AddPhones")}
          />
        </View>

        <Search />

        <Text style={{
          color: "#F5C518",
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 10,
        }}>
          DESTACADOS
        </Text>

        <View style={{
          backgroundColor: "#1A1A1A",
          padding: 10,
          borderRadius: 10,
          marginVertical: 10,
          marginHorizontal: 10,
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          marginBottom: 60,
        }}>
          {lista.map((phone, index) => (
            <View key={index} style={{ width: "33%" }}>
              <CardPhones
                role={role}
                name={phone.name}
                price={phone.price}
                image={phone.image}
                phone={phone}
                onPress={() => {
                  if (role === "admin") {
                    navigation.navigate("DetailInformation", { phone });
                  } else {
                    navigation.navigate("UserDetail", { phone });
                  }
                }}
                onPressDelete={() => handleDelete(phone.id)}
              />
            </View>
          ))}
        </View>

        <Pressable
          style={{
            backgroundColor: "#eb1313",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
            marginHorizontal: 10,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Cerrar sesión
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;