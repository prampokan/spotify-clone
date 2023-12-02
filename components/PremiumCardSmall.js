import { Text, StyleSheet, View, SafeAreaView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

function PremiumCardSmall({textLeft, textRight}) {

    return(
        <View style={styles.container}>
            <View style={styles.cardLeft}>
                <Text style={styles.textTop}>FREE</Text>
                <Text style={styles.textMid}>{textLeft}</Text>
            </View>
            <LinearGradient
                colors={['rgb(6 78 59)', 'rgb(34 197 94)']}
                style={styles.cardRight}
                >
                <Text style={styles.textTop}>PREMIUM</Text>
                <Text style={styles.textMid}>{textRight}</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    cardLeft: {
        backgroundColor: 'rgb(39 39 42)',
        width: 140,
        height: 135,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardRight: {
        backgroundColor: 'green',
        width: 140,
        height: 135,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    textTop: {
        color: 'rgb(167 243 208)',
        fontSize: 12,
        marginTop: 5,
        position: 'absolute',
        top: 0
    },
    textMid: {
        color: 'rgb(167 243 208)',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default PremiumCardSmall