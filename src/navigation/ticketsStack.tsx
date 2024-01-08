import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Empty } from '../screens/empty';

const Stack = createNativeStackNavigator();

export function TicketsStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Tickets'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Tickets" component={Empty} />
    </Stack.Navigator>
  );
}
