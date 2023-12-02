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
          'X-RapidAPI-Key': 'e4f156a2e3mshd1fd73ce4ffb6fep1c966fjsnd69fcaa0d9cc',
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
    paddingHorizontal: 17
  },
  text: {
    color: '#fff',
  },
  input: {
    height: 50,
    width: 380,
    borderWidth: 1,
    paddingLeft: 15,
    color: 'black',
    backgroundColor: '#fff',
    borderRadius: 7,
    fontSize: 18,
    marginBottom: 20
  },
  songContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    gap: 10
  },
  songImage: {
    width: 60,
    height: 60,
  },
  songText: {
    justifyContent: 'center'
  },
  songTitle: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 5
  },
  songArtist: {
    color: 'gray',
    fontSize: 13
  },
});

export default SearchScreen;
