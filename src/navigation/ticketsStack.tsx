import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../screens/dashboard';

const Stack = createNativeStackNavigator();

export function TicketsStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Tickets'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Tickets" component={Dashboard} />
    </Stack.Navigator>
  );
}
