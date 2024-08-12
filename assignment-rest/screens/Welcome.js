import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({ navigation, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const storedUserDetails = await AsyncStorage.getItem('userDetails');
        if (storedUserDetails) {
          const users = JSON.parse(storedUserDetails);
          const currentUser = users.find(u => u.isLoggedIn);
          if (currentUser) {
            setUsername(currentUser.username);
          }
        }
      } catch (error) {
        console.log('Failed to load user details');
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    try {
      const storedUserDetails = await AsyncStorage.getItem('userDetails');
      if (storedUserDetails) {
        const users = JSON.parse(storedUserDetails).map(user =>
          user.username === username ? { ...user, isLoggedIn: false } : user
        );
        await AsyncStorage.setItem('userDetails', JSON.stringify(users));
      }
    } catch (error) {
      console.log('Failed to update user details');
    }

    setIsLoggedIn(false);
    navigation.navigate('GettingStarted');
  };

  const handleGoToCategorySelection = () => {
    navigation.navigate('CategorySelection'); // Replace 'CategorySelection' with your actual category selection screen name
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://t4.ftcdn.net/jpg/03/07/46/87/360_F_307468782_ZUz6wnZ5YupJDedYjmWhVJirJqrYt2jI.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Welcome, {username}</Text>
        <View style={styles.content}>
          <Text style={styles.text}>
            You have successfully logged in!
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Log Out"
              onPress={handleLogout}
              color="#ff6347" // Tomato color for contrast
              style={styles.button}
            />
            <Button
              title="Go to Products"
              onPress={handleGoToCategorySelection}
              color="#ff6347" // Tomato color for contrast
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(51, 51, 51, 0.8)', // Semi-transparent dark background for contrast
  },
  header: {
    fontSize: 32,
    marginBottom: 20,
    fontFamily: 'Roboto', // Updated font family
    fontWeight: 'bold',
    color: '#fff', // White text color for contrast
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ddd', // Light text color for contrast
    fontFamily: 'Roboto', // Updated font family
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-around', // Adjust spacing between buttons
    width: '100%', // Ensure buttons take full width of container
    marginTop: 20,
  },
  button: {
    width: '40%', // Adjust width of buttons as needed
  },
});

export default Welcome;
