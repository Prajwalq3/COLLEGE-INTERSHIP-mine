import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const Favorites = ({ route }) => {
  const { favorites } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <ImageBackground
        source={{ uri: item.img }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.itemDetails}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://wallpaperaccess.com/full/400472.jpg' }} 
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Favorites</Text>
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundImageStyle: {
    opacity: 0.8,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background over the image
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden', // Ensures that child content doesn't overflow outside the parent
  },
  imageBackground: {
    width: 150,
    height: 150,
    justifyContent: 'flex-end', // Aligns the text to the bottom of the image
  },
  image: {
    resizeMode: 'cover',
  },
  itemDetails: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background for text overlay
    padding: 10,
    width: 150, // Width matching the image width
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
  description: {
    fontSize: 14,
    color: '#ddd', // Light gray text color
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Favorites;
