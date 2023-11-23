import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Header headerText={"Profile"}/>
            <View style={styles.wrapper}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/profile.jpg')} style={styles.image}></Image>
                    <Image source={require('../assets/spotify-logo.png')} style={styles.image}></Image>
                </View>
                <Text style={styles.textName}>Pramudya Firdausy Di' Agusta</Text>
                <Text style={styles.textNim}>21120121130082</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(3 7 18)',
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },  
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 50,
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    textName: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10
    },
    textNim: {
        color: 'gray',
        fontSize: 15
    }
    
});

export default ProfileScreen