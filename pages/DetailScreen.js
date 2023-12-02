import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Audio } from 'expo-av';

function DetailScreen({ route }) {
  const { id } = route.params;
  const [detailData, setDetailData] = useState({});
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchDetailData = async () => {
      const url = `https://shazam.p.rapidapi.com/songs/v2/get-details?id=${id}&l=en-US`;
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
        if (isMounted) {
          setDetailData(result.data[0].attributes);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetailData();
    return () => {
      isMounted = false;
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [id, sound]);

  const getImageUrlWithDimensions = () => {
    const { artwork } = detailData;
    if (artwork) {
      const { width, height, url } = artwork;
      return url.replace('{w}', width).replace('{h}', height);
    }
    return null;
  };

  const playAudio = async (audioUri) => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound, status } = await Audio.Sound.createAsync(
      { uri: audioUri },
      { shouldPlay: true }
    );

    setSound(newSound);
    setIsPlaying(true);
  };

  const pauseAudio = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else if (detailData.previews && detailData.previews.length > 0) {
      playAudio(detailData.previews[0].url);
    }
  };

  return (
    <ScrollView style={styles.wrapper}>
    <LinearGradient
    colors={['rgb(5 150 105)', 'rgb(3 7 18)']}
    style={styles.container}
    >
        <View style={styles.bar}>
          <Entypo name="chevron-thin-down" size={22} color="white" />
          <Text style={styles.barText}>Playing recommended songs for you</Text>
          <Entypo name="dots-three-horizontal" size={20} color="white" /> 
        </View>      
        <Image
          source={{ uri: getImageUrlWithDimensions() }}
          style={styles.detailImage} 
        ></Image>
        <Text style={styles.detailTitle}>{detailData.name}</Text>
        <Text style={styles.detailArtist}>{detailData.artistName}</Text>
        <View style={styles.btnWrapper}>
          <AntDesign name="pluscircleo" size={24} color="white" />
          <FontAwesome name="step-backward" size={32} color="white" />
          <TouchableOpacity 
            onPress={togglePlayPause}
            style={styles.playBtn}
          >
            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={24} color="rgb(30 41 59)" />
          </TouchableOpacity>
          <FontAwesome name="step-forward" size={32} color="white" />
          <AntDesign name="minuscircleo" size={24} color="white" />
        </View>
        <View style={styles.fiturBtn}>
          <MaterialIcons name="devices" size={24} color="white" />
          <View style={styles.fiturBtnRight}>
            <Octicons name="share" size={20} color="white" />
            <FontAwesome name="bars" size={20} color="white" />
          </View>
        </View>
        <View style={styles.lyricsCard}>
          <Text style={styles.lyricsCardTop}>Lyrics</Text>
          <Text style={styles.lyricsCardBot}>Couldn't load the lyrics for this song</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  bar: {
    flexDirection: 'row',
    marginTop: 70,
    alignItems: 'center'
  },
  barText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginHorizontal: 55,
    color: '#fff'
  },
  detailImage: {
    width: 375,
    height: 375,
    borderRadius: 10,
    marginTop: 70
  },
  detailTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#fff',
  },
  detailArtist: {
    fontSize: 17,
    marginTop: 5,
    color: 'rgb(167 243 208)'
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 55,
    marginTop: 30
  },
  playBtn: {
    backgroundColor: '#fff',
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fiturBtn: {
    flexDirection: 'row',
    gap: 290,
    marginTop: 30
  },
  fiturBtnRight: {
    flexDirection: 'row',
    gap: 20
  },
  lyricsCard: {
    backgroundColor: 'rgb(82 82 82)',
    width: 385,
    height: 385,
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  },
  lyricsCardTop: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top: 15,
    left: 15,
  },
  lyricsCardBot: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
});

export default DetailScreen;
