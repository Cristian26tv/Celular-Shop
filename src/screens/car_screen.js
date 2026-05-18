import { StyleSheet, Text, View } from "react-native"

function CarScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola desde CarScreen</Text>
        </View>
    )
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