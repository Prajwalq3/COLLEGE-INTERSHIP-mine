import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './UserContext';

const Login = ({ navigation, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUserDetails } = useContext(UserContext);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const storedUserDetails = await AsyncStorage.getItem('users');
        if (storedUserDetails) {
          setUserDetails(JSON.parse(storedUserDetails));
        }
      } catch (error) {
        setError('Failed to load user details');
      }
    };

    getUserDetails();
  }, []);

  const handleLogin = async () => {
    try {
      const storedUserDetails = await AsyncStorage.getItem('users');
      if (storedUserDetails) {
        const users = JSON.parse(storedUserDetails);
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          setIsLoggedIn(true);
          navigation.navigate('Welcome');
        } else {
          setError('Invalid username or password');
        }
      } else {
        setError('No user details found');
      }
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://api.wallpapers.ai/static/downloads/59e47f2e04874701bb63cf82cd2ee0d8/upscaled/000000_711761716_kdpmpp2m15_PS7.5_FOCUS_._digital_art_concept_art_[upscaled].jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholderTextColor="#ccc"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#ccc"
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title="Login" onPress={handleLogin} color="#DE3163" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(51, 51, 51, 0.8)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#888',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: 'Roboto',
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
  error: {
    color: '#ff6347',
    marginBottom: 20,
    fontFamily: 'Roboto',
    fontSize: 14,
  },
});

export default Login;
