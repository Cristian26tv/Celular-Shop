import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import Search from "../components/search";
import CardPhones from "../components/cardPhones";
import phones from "../data/phones";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        height: "100%",
        marginTop: 40,
        backgroundColor: "#0A0A0A",
      }}
    >
      <ScrollView>
         <View
          style={{
            backgroundColor: "#141414",
          }}
        >
          <Header 
          onPress={() => navigation.navigate("Car") }/>
          </View>
        <Search />


        <Text
          style={{
            color: "#F5C518",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          DESTACADOS
        </Text>
        <View
          style={{
            backgroundColor: "#1A1A1A",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            marginHorizontal: 10,
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            marginBottom:60

          }}
        >
          {/*En vez de repetir CardPhones 18 veces, usamos .map() */}
          {phones.map((phone) => (
            <View key={phone.id} style={{ width: "33%" }}>
              <CardPhones
                name={phone.name}
                price={phone.price}
                image={phone.image}
                onPress={() => navigation.navigate("DetailInformation", { phone })}
              />
            </View>
          ))}

        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;