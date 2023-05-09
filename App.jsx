import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './navigation/AuthNavigator';
import Welcome from './screens/Welcome';
import HomeNavigator from './navigation/HomeNavigator';
import { StatusBar } from 'expo-status-bar';

import { Provider } from "react-redux";
import store from './redux/store';
import Context from './components/AppContext';

const Stack = createNativeStackNavigator()

export default function App({ navigation }) {
  return (
    <Provider store={store}>
      <Context>
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
      </Context>
    </Provider>
  );
}
