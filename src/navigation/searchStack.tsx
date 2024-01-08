import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Empty } from '../screens/empty';

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Search'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Search" component={Empty} />
    </Stack.Navigator>
  );
}
