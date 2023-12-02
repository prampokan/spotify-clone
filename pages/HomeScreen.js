import { StyleSheet, Text, View , ScrollView } from 'react-native';
import SmallCard from '../components/SmallCard';
import SmallCardRight from '../components/SmallCardRight';
import BigCard from '../components/BigCard';
import RecentlyPlayed from '../components/RecentlyPlayed';
import Header from '../components/Header';

function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
                <Header headerText={"Home"} />
                <View style={styles.smallCardContainer}>
                    <View style={styles.smallCardContainerLeft}>
                        <SmallCard />
                    </View>
                    <View style={styles.smallCardContainerRight}>
                        <SmallCardRight />
                    </View>
                </View>
                <Text style={styles.textTopArtists}>This is The Beatles</Text>
                <ScrollView horizontal>
                    <View style={styles.bigCardContainer}>
                        <BigCard />
                    </View>
                </ScrollView>
                <Text style={styles.textRecentlyPlayed}>Recently Played</Text>
                <ScrollView horizontal>
                    <View style={styles.bigCardContainerBot}> 
                        <RecentlyPlayed />
                    </View>
                </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(3 7 18)',
        paddingLeft: 17
    },
    smallCardContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingRight: 10,
      gap: 8
    },
    bigCardContainer: {
        flexDirection: 'row',
    },
    bigCardContainerBot: {
        flexDirection: 'row',
        marginBottom: 120
    },
    textTopArtists: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 15,
        fontSize: 22
    },
    textRecentlyPlayed: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 15,
        fontSize: 22
    }
});

export default HomeScreen