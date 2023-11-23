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
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 15,
        marginTop: 30,
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 50
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default Header