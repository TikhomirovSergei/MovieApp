import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../screens/dashboard';

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Account'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Account" component={Dashboard} />
    </Stack.Navigator>
  );
}
