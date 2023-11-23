import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function DetailScreen({ route }) {

  const { id } = route.params;
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const fetchDetailData = async () => {
      const url = `https://shazam.p.rapidapi.com/songs/v2/get-details?id=${id}&l=en-US`;
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
        setDetailData(result.data[0].attributes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetailData();
  }, [id]);

  const getImageUrlWithDimensions = () => {
    const { artwork } = detailData;
    if (artwork) {
      const { width, height, url } = artwork;
      return url.replace('{w}', width).replace('{h}', height);
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: getImageUrlWithDimensions() }}
        style={styles.detailImage} 
      ></Image>
      <Text style={styles.detailTitle}>{detailData.name}</Text>
      <Text style={styles.detailArtist}>{detailData.artistName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(30 41 59)',
  },
  detailImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  detailArtist: {
    fontSize: 12,
    color: '#fff'
  }
});

export default DetailScreen;
