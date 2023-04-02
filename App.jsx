import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './navigation/AuthNavigator';
import Welcome from './screens/Welcome';
import HomeNavigator from './navigation/HomeNavigator';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator()

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Auth' component={AuthNavigator} />
        <Stack.Screen name='Home' component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
