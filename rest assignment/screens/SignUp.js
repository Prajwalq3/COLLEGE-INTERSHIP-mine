import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    if (username && email && password) {
      try {
        const storedUsers = await AsyncStorage.getItem('users');
        const users = storedUsers ? JSON.parse(storedUsers) : [];

        // Check if the username already exists
        const userExists = users.some(user => user.username === username);
        if (userExists) {
          setError('Username already exists');
          return;
        }

        const newUser = { username, email, password };
        users.push(newUser);
        await AsyncStorage.setItem('users', JSON.stringify(users));
        navigation.navigate('Login');
      } catch (error) {
        setError('Failed to save user details');
      }
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://wallpaperaccess.com/full/400472.jpg' }} 
      style={styles.backgroundImage}
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
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
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
        <Button title="Sign Up" onPress={handleSignUp} color="#ff6347" />
        
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Already have an account? Click here to log in</Text>
        </TouchableOpacity>
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
  linkText: {
    color: '#ff6347',
    marginTop: 20,
    fontFamily: 'Roboto',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default SignUp;
