import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function SmallCard() {
    const navigation = useNavigation();
    const [songData, setSongData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const url = 'https://shazam.p.rapidapi.com/search?term=alternative%20rock&locale=en-US&offset=0&limit=4';
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'f64e5c0f67mshf9543fcc89a16c1p13dcffjsnb9fe5be28d4b',
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
                    source={{ uri: song.track.images.coverart}}
                    style={styles.cardImage} 
                ></Image>
                <Text style={styles.cardTitle}>{song.track.title.substring(0, 17)}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'rgb(39 39 42)',
        flexDirection: 'row',
        alignItems: 'center',
        width: 170,
    },
    cardImage: {
        width: 50,
        height: 50,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    cardTitle: {
        fontSize: 9,
        fontWeight: 'bold',
        marginHorizontal: 10,
        color: '#fff',
    },
});

export default SmallCard;
