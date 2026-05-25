import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import Header from "../components/header";
import Search from "../components/search";

const DetailInformationScreen = ({ navigation, route }) => {
  
  // Aquí extraemos el teléfono que nos mandaron desde HomeScreen
  const { phone } = route.params;

  return (
    <View style={{ height: "100%", marginTop: 40, backgroundColor: "#0A0A0A" }}>
      <ScrollView>
        <View style={{ backgroundColor: "#141414" }}>
          <Header onPress={() => navigation.navigate("Car")}/>
        </View>
        <Search />

        <View style={{
          backgroundColor: "#1A1A1A",
          padding: 10,
          borderRadius: 10,
          marginVertical: 10,
          marginHorizontal: 10,
          alignItems: "center",
        }}>
         
          <Text style={{ color: "#F5C518", fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            {phone.name}
          </Text>

          <Image source={{ uri: phone.image }} style={{ width: 110, height: 140, marginBottom: 10 }} />

          <Text style={{ color: "#F5C518", fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
            {phone.price}
          </Text>

          

          <View style={{
            backgroundColor: "#222222",
            padding: 10,
            borderRadius: 10,
            width: "98%",
            marginTop: 10,
            flexDirection: "row",
          }}>
            {/* Columna izquierda */}
            <View style={{ flex: 1, paddingRight: 10 }}>
              <Text style={{ color: "#F5C518", fontSize: 18, fontWeight: "bold" }}>DISEÑO</Text>
              <Text style={{ color: "#f5c51895", fontSize: 15 }}>COLOR</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>{phone.color}</Text>
              <Text style={{ color: "#f5c51895", fontSize: 15 }}>DIMENSIÓN</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>{phone.dimension}</Text>
              <Text style={{ color: "#F5C518", fontSize: 18, fontWeight: "bold" }}>CÁMARA</Text>
              <Text style={{ color: "#f5c51895", fontSize: 15 }}>CÁMARA PRINCIPAL</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>{phone.camaraPrincipal}</Text>
              <Text style={{ color: "#f5c51895", fontSize: 15 }}>MPX</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>{phone.MPX}</Text>
            </View>

            {/* Línea divisora */}
            <View style={{ width: 1, backgroundColor: "#F5C518", marginHorizontal: 8 }} />

            {/* Columna derecha */}
            <View style={{ flex: 1, paddingLeft: 10 }}>
              <Text style={{ color: "#F5C518", fontSize: 18, fontWeight: "bold" }}>MEMORIA</Text>
              <Text style={{ color: "#f5c51895", fontSize: 15 }}>INTERNA</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>{phone.memoriaInterna}</Text>
              <Text style={{ color: "#F5C518", fontSize: 18, fontWeight: "bold" }}>PROCESADOR</Text>
              <Text style={{ color: "#f5c51895", fontSize: 15 }}>MARCA</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>{phone.marcaProcesador}</Text>
              <Text style={{ color: "#f5c51895", fontSize: 15 }}>VELOCIDAD</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>{phone.velocidad} GHz</Text>
              <Text style={{ color: "#f5c51895", fontSize: 15 }}>NÚCLEOS</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>{phone.nucleos}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Pressable
            style={{
              backgroundColor: "#F5C518",
              padding: 10,
              borderRadius: 8,
              width: "100%",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 60,
            }}
            onPress={() => navigation.navigate("EditPhone", { phone })}
          >
            <Text style={{ color: "#0A0A0A", fontWeight: "bold", fontSize: 16 }}>
              Editar
            </Text>
          </Pressable>

    </View>
  );
};

export default DetailInformationScreen;