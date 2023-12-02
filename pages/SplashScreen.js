import { View, Text, StyleSheet, Image } from "react-native"
import { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const splashTimeout = setTimeout(() => {
        navigation.replace('Main');
        }, 3000);
      
        return () => clearTimeout(splashTimeout);
        }, [navigation]);

    return(
        <View style={styles.container}>
            <Image source={require('../assets/spotify-logo.png')} style={styles.image}></Image>
            <Text style={styles.containerText}>Welcome to Spotify Clone!</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'rgb(3 7 18)',
        padding: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 130,
        height: 130,
        marginBottom: 20
    },
    containerText: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold'
    }
})