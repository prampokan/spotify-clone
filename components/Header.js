import { StyleSheet, Text, View, Image} from 'react-native';

function Header({headerText}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/profile.jpg')} style={styles.image}></Image>
            <Text style={styles.text}>{headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 15,
        marginTop: 70,
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 50
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 23
    }
});

export default Header