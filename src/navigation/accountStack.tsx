import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Empty } from '../screens/empty';

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Account'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Account" component={Empty} />
    </Stack.Navigator>
  );
}
