import { View, Text, StyleSheet, ScrollView } from "react-native"
import PremiumCardSmall from "../components/PremiumCardSmall"
import PremiumCardBig from "../components/PremiumCardBig"

function PremiumScreen() {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.textBanner}>Get more out of your music with Premium</Text>
            <ScrollView horizontal style={styles.smallCard}>
                <PremiumCardSmall textLeft={'Ad breaks'} textRight={'Ad-free music listening'}/>
                <PremiumCardSmall textLeft={'Play in shuffle'} textRight={'Play in any order'}/>
                <PremiumCardSmall textLeft={'Basic sound quality'} textRight={'Higher sound quality'}/>
                <PremiumCardSmall textLeft={'Streaming only'} textRight={'Offline listening'}/>
            </ScrollView>
            <Text style={styles.textSmall}>You can't upgrade to Premium in the app. We know, it's not ideal.</Text>
            <View style={styles.bigCard}>
                <View style={styles.cardFree}>
                    <Text style={styles.cardFreeTextTop}>Spotify Free</Text>
                    <Text style={styles.cardFreeTextBot}>CURRENT PLAN</Text>
                </View>
                <PremiumCardBig 
                    textTop={'Premium Individual'} 
                    textMid={'Ad-free music listening · Download to listen offline · Play songs in any order · Higher sound quality · Cancel anytime'}
                    textBot={'Subscribe monthly · Or pay once from 1 day to 12 months'}
                    colorDark={'rgb(6 78 59)'}
                    colorLight={'rgb(34 197 94)'}
                />
                <PremiumCardBig 
                    textTop={'Premium Student'} 
                    textMid={'Ad-free music listening · Download to listen offline · Play songs in any order · Higher sound quality · Cancel anytime'}
                    textBot={'Subscribe monthly · Or pay once from 1 day to 12 months'}
                    colorDark={'rgb(234 179 8)'}
                    colorLight={'rgb(202 138 4)'}
                />
                <PremiumCardBig 
                    textTop={'Premium Duo'} 
                    textMid={'Ad-free music listening · Download to listen offline · Play songs in any order · Higher sound quality · Cancel anytime'}
                    textBot={'Subscribe monthly · Or pay once from 1 day to 12 months'}
                    colorDark={'rgb(2 132 199)'}
                    colorLight={'rgb(7 89 133)'}
                />
                <PremiumCardBig 
                    textTop={'Premium Family'} 
                    textMid={'Ad-free music listening · Download to listen offline · Play songs in any order · Higher sound quality · Cancel anytime'}
                    textBot={'Subscribe monthly · Or pay once from 1 day to 12 months'}
                    colorDark={'rgb(59 7 100)'}
                    colorLight={'rgb(107 33 168)'}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(3 7 18)',
    },
    textBanner: {
        color: 'rgb(167 243 208)',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 90,
        marginHorizontal: 17
    },
    smallCard: {
        flexDirection: 'row',
        marginTop: 20,
        paddingLeft: 65,
    },
    textSmall: {
        color: 'rgb(167 243 208)',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20
    },
    bigCard: {
        paddingRight: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardFree: {
        backgroundColor: 'rgb(39 39 42)',
        width: 380,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 15
    },
    cardFreeTextTop: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardFreeTextBot: {
        color: '#fff',
        fontSize: 13,
    }, 
    bigCard: {
        alignItems: 'center',
        marginBottom: 120
    }
    
})

export default PremiumScreen