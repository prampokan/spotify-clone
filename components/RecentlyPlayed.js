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
        margin: 5,
        backgroundColor: 'rgb(3 7 18)',
        width: 150
     },
     cardImage: {
        width: 150,
        height: 150,
     },
     cardTitle: {
        fontSize: 9,
        color: 'gray'
     },
});

export default RecentlyPlayed