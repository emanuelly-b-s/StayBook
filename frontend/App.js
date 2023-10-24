import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import { UsersProvider } from './context/UserContext.js';
import { useState } from 'react';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <UsersProvider>
        <Stack.Navigator screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#000' }
        }}>
          <Stack.Screen name="cadastro" options={{ headerShown: false }} component={Cadastro} />
          <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
        </Stack.Navigator>
      </UsersProvider>
    </NavigationContainer>
  );
} 