import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Search } from '../screens/search';

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Search'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
