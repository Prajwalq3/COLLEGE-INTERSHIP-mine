import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GettingStarted from './screens/GettingStarted';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import CategorySelection from './screens/CategorySelection';
import Products from './screens/Products';
import Favorites from './screens/Favorites';
import { UserProvider } from './screens/UserContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GettingStarted">
          <Stack.Screen name="GettingStarted" component={GettingStarted} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login">
            {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
          <Stack.Screen name="Welcome">
            {props => <Welcome {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
          <Stack.Screen name="CategorySelection" component={CategorySelection} options={{ title: 'CategorySelection' }} />
          <Stack.Screen name="Products" component={Products} options={{ title: 'Products' }} />
          <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Favorites' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
