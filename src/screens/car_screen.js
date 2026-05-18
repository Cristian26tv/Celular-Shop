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

        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})  
export default CarScreen