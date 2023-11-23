import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

function SearchScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery.trim() === '') {
        setSongData([]);
        return;
      }

      const url = `https://shazam.p.rapidapi.com/search?term=${encodeURIComponent(
        searchQuery
      )}&locale=en-US&offset=0&limit=5`;

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f64e5c0f67mshf9543fcc89a16c1p13dcffjsnb9fe5be28d4b',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
        },
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
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <Header headerText={'Search'} />
      <TextInput
        style={styles.input}
        placeholder="What do you want to listen to?"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={songData}
        keyExtractor={(item) => item.track.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              if (songData) {
                  navigation.navigate('DetailScreen', { id: item.track.hub.actions[0].id });
              }
            }}
            >
          <View style={styles.songContainer}>
            
              <Image
                  source={{ uri: item.track.images.coverart}}
                  style={styles.songImage} 
              ></Image>
              <View style={styles.songText}>
                  <Text style={styles.songTitle}>{item.track.title}</Text>
                  <Text style={styles.songArtist}>{item.track.subtitle}</Text>
              </View>
          </View>
            </TouchableOpacity> 
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(3 7 18)',
  },
  text: {
    color: '#fff',
  },
  input: {
    height: 40,
    width: 350,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 12,
    marginBottom: 20
  },
  songContainer: {
    flexDirection: 'row',
    margin: 5,
    gap: 10
  },
  songImage: {
    width: 50,
    height: 50,
  },
  songText: {
    justifyContent: 'center'
  },
  songTitle: {
    color: '#fff',
    fontSize: 12
  },
  songArtist: {
    color: 'gray',
    fontSize: 10
  },
});

export default SearchScreen;
