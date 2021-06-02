import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import { name as appName } from './app.json';
import HelloScreen from './HelloScreen';

const Stack = createStackNavigator();

const linking = {
  prefixes: [`${appName}://`],
  config: {
    screens: {
      Hello: 'hello/:id',
    },
  },
};

export default function AppContainer() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>oh no</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} options={{ title: 'Home' }} />
        <Stack.Screen
          name="Hello"
          component={HelloScreen}
          options={{ title: 'Hello' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
