import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/LoginPage';
import Cadastro from './src/screens/RegisterPage';
import { UsersProvider } from './context/UserContext.js';
import HomePage from './src/screens/HomePage';
import ConfirmCode from './src/screens/ConfirmCodePage';
import RecoverPassword from './src/screens/RecoverPasswordPage';
import RedefinePassword from './src/screens/RedefinePasswordPage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)  ;

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
          <Stack.Screen name="recover" options={{ headerShown: false }} component={RecoverPassword} />
          <Stack.Screen name="redefine" options={{ headerShown: false }} component={RedefinePassword} />
          <Stack.Screen name="confirm" options={{ headerShown: false }} component={ConfirmCode} />
          <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
        </Stack.Navigator>
      </UsersProvider>
    </NavigationContainer>
  );
} 