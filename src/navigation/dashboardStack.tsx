import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../screens/dashboard';

const Stack = createNativeStackNavigator();

export function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
