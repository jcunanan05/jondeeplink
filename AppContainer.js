import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
