import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './navigation/AuthNavigator';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Settings from './screens/Settings';
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}>
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Auth' component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
