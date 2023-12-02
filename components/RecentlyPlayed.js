import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function RecentlyPlayed() {
    const navigation = useNavigation();
    const [songData, setSongData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        const url = 'https://shazam.p.rapidapi.com/search?term=deftones&locale=en-US&offset=0&limit=5';
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
        <View style={styles.bigCardContainer}>
            {songData.map((song, index) => (
                <TouchableOpacity style={styles.card} key={index}
                onPress={() => {
                  if (song) {
                      navigation.navigate('DetailScreen', { id: song.track.hub.actions[0].id });
                  }
                }}
                >
                    <Image source={{ uri: song.track.images.coverart}} style={styles.cardImage}></Image>
                    <Text style={styles.cardTitle}>{song.track.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    bigCardContainer: {
        flexDirection: 'row'
    },
    card: {
        marginRight: 17,
        backgroundColor: 'rgb(3 7 18)',
        width: 170
     },
     cardImage: {
        width: 170,
        height: 170,
     },
     cardTitle: {
        fontSize: 13,
        color: 'gray',
        marginTop: 7
     },
});

export default RecentlyPlayed