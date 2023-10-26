import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import { UsersProvider } from './context/UserContext.js';
import { useState } from 'react';
import HomePage from './src/screens/HomePage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <UsersProvider>
        <Stack.Navigator screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#000' }
        }}>
          <Stack.Screen name="home" options={{ headerShown: false }} component={HomePage} />
          <Stack.Screen name="cadastro" options={{ headerShown: false }} component={Cadastro} />
          <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
        </Stack.Navigator>
      </UsersProvider>
    </NavigationContainer>
  );
} 