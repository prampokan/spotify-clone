import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { LinearGradient } from 'expo-linear-gradient';


function ProfileScreen() {

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgb(5 150 105)', 'rgb(3 7 18)']}
                style={styles.background}
            >
            <View style={styles.wrapper}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/profile.jpg')} style={styles.image}></Image>
                    <Image source={require('../assets/spotify-logo.png')} style={styles.image}></Image>
                </View>
                <Text style={styles.textName}>Pramudya Firdausy Di' Agusta</Text>
                <Text style={styles.textNim}>21120121130082 · Software Engineer</Text>
            </View>
            </LinearGradient>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image source={require('../assets/spotify-logo.png')} style={styles.imageSpotify}></Image>
                    <Text style={styles.cardText}>spotifyclone.app</Text>
                </View>
            </View>
            <Text style={styles.textDesc}>Aplikasi yang berjudul Spotify Clone ini adalah aplkasi yang mengumpulkan data musik dari API, kemudian mengubahnya menjadi tampilan yang semirip mungkin dengan spotify. </Text>
            <Text style={styles.textDev}>Dikembangkan menggunakan</Text>
            <View style={styles.cardContainerBot}>
                <View style={styles.cardBot}>
                    <Image source={require('../assets/react-logo.svg')} style={styles.imageDev}></Image>
                    <Text style={styles.cardTextDev}>React Native</Text>
                </View>
                <View style={styles.cardBot}>
                    <Image source={require('../assets/shazam-logo.jpg')} style={styles.imageDev}></Image>
                    <Text style={styles.cardTextDev}>Shazam API</Text>
                </View>
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
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 20
    },  
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 50,
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    textName: {
        fontSize: 23,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textNim: {
        color: 'gray',
        fontSize: 15
    },
    cardContainer: {
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        width: 335,
        height: 50,
        backgroundColor: 'rgb(39 39 42)',
        borderRadius: 10,
        alignItems: 'center',
        gap: 5
    },
    textDesc: {
        color: '#fff',
        fontSize: 15,
        marginHorizontal: 41,
        marginTop: 20,
        fontWeight: 'bold'
    },
    imageSpotify: {
        width: 35,
        height: 35,
        marginLeft: 10
    },
    cardText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    textDev: {
        fontSize: 15,
        color: 'rgb(167 243 208)',
        margin: 14,
        marginHorizontal: 41

    },
    cardContainerBot: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardBot: {
        width: 158,
        height: 130,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    imageDev: {
        width: 50,
        height: 50,
    },
    cardTextDev: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold'
    }
});

export default ProfileScreen