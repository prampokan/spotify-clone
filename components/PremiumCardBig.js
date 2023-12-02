import { Text, StyleSheet, View, SafeAreaView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

function PremiumCardBig({textTop, textMid, textBot, colorDark, colorLight}) {

    return(
        <View style={styles.container}>
            <LinearGradient
                colors={[colorDark, colorLight]}
                style={styles.card}
                >
                <Text style={styles.textTop}>{textTop}</Text>
                <Text style={styles.textMid}>{textMid}</Text>
                <Text style={styles.textBot}>{textBot}</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    card: {
        backgroundColor: 'green',
        width: 380,
        height: 230,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        gap: 15,
        padding: 20
    },
    textTop: {
        color: 'rgb(167 243 208)',
        fontSize: 23,
        marginTop: 5,
        fontWeight: 'bold'
    },
    textMid: {
        color: 'rgb(167 243 208)',
        fontSize: 16,
        textAlign: 'center',
    },
    textBot: {
        color: 'rgb(167 243 208)',
        fontSize: 16,
        textAlign: 'center',
    },
})

export default PremiumCardBig