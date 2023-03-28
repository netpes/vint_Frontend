import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './navigation/AuthNavigator';
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Auth' component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
