import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategorySelection = () => {
  const navigation = useNavigation();

  const categories = [
    { id: '1', title: 'Foot-Wear' },
    { id: '2', title: 'Pants' },
    { id: '3', title: 'T-Shirts' },
    // Add more categories as needed
  ];

  const navigateToProducts = (categoryTitle) => {
    navigation.navigate('Products', { categoryTitle });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://e0.pxfuel.com/wallpapers/354/672/desktop-wallpaper-jamiroquai-jamiroquai-a-funk-odyssey.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select a Category</Text>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryButton}
            onPress={() => navigateToProducts(category.title)}
          >
            <Text style={styles.categoryText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' as per your requirement
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent overlay
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', // White text color
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Text shadow for better readability
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  categoryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background for buttons
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Dark gray text color
  },
});

export default CategorySelection;
