import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SmallCard() {
    const navigation = useNavigation();
    const [songData, setSongData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://shazam.p.rapidapi.com/search?term=dewa&locale=en-US&offset=0&limit=4';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e4f156a2e3mshd1fd73ce4ffb6fep1c966fjsnd69fcaa0d9cc',
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setSongData(result.tracks.hits);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <View>
            {songData.map((song, index) => (
                <TouchableOpacity
                    key={song.track.hub.actions[0].id}
                    style={styles.card}
                    onPress={() => {
                        if (song) {
                            navigation.navigate('DetailScreen', { id: song.track.hub.actions[0].id });
                        }
                    }}
                >
                    <Image
                        source={{ uri: song.track.images.coverart }}
                        style={styles.cardImage}
                    ></Image>
                    <Text style={styles.cardTitle}>{song.track.title.substring(0, 16)}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        marginVertical: 4,
        backgroundColor: 'rgb(39 39 42)',
        flexDirection: 'row',
        alignItems: 'center',
        width: 190,
    },
    cardImage: {
        width: 58,
        height: 58,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    cardTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        marginHorizontal: 10,
        color: '#fff',
    },
});

export default SmallCard;
