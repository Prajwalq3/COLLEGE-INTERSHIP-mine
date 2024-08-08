import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Products = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryTitle } = route.params;

  // Example product data categorized by type


  const filteredProducts = productsByCategory.find(category => category.title === categoryTitle)?.data || [];

  const [favorites, setFavorites] = useState([]);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const lightThemeColors = {
    background: '#f0f0f0',
    text: '#000',
    categoryTitleBackground: '#ccc',
    categoryTitleText: '#000',
    productBackground: '#fff',
    productBorder: '#ccc',
    productText: '#000',
    priceText: 'green',
  };

  const darkThemeColors = {
    background: '#222',
    text: '#fff',
    categoryTitleBackground: '#444',
    categoryTitleText: '#fff',
    productBackground: '#333',
    productBorder: '#555',
    productText: '#fff',
    priceText: 'lightgreen', 
  };
  const colors = isDarkTheme ? darkThemeColors : lightThemeColors;
  const containerStyle = {
    ...styles.container,
    backgroundColor: colors.background,
  };
  const categoryTitleStyle = {
    ...styles.categoryTitle,
    backgroundColor: colors.categoryTitleBackground,
    color: colors.categoryTitleText,
  };
  const productStyle = {
    ...styles.product,
    backgroundColor: colors.productBackground,
    borderColor: colors.productBorder,
  };
  const textStyle = {
    color: colors.text,
    fontFamily: 'Roboto', 
    fontSize: 16, 
  };

  const addToFavorites = (productId) => {
    const productToAdd = filteredProducts.find(product => product.id === productId);
    if (productToAdd && !favorites.some(item => item.id === productId)) {
      setFavorites([...favorites, productToAdd]);
    }
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter(item => item.id !== productId);
    setFavorites(updatedFavorites);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={productStyle}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
    >
      <Image
        source={{ uri: item.img }}
        style={styles.image}
      />
      <View style={styles.productDetails}>
        <Text style={[styles.name, textStyle]}>{item.title}</Text>
        <Text style={[styles.description, textStyle]}>{item.description}</Text>
        <Text style={[styles.price, { ...textStyle, color: colors.priceText }]}>{item.price}</Text>
        {favorites.some(fav => fav.id === item.id) ? (
          <Button title="Remove from Favorites" onPress={() => removeFromFavorites(item.id)} />
        ) : (
          <Button title="Add to Favorites" onPress={() => addToFavorites(item.id)} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={containerStyle}>
      <Text style={categoryTitleStyle}>{categoryTitle}</Text>
      <SectionList
        sections={[{ data: filteredProducts }]}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={renderItem}
      />
      <Button
        title={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        onPress={toggleTheme}
      />
      <Button
        title="View Favorites"
        onPress={() => navigation.navigate('Favorites', { favorites })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  product: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Products;
