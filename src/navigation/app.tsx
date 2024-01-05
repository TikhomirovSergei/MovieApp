import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { SearchStack } from './searchStack';
import { TicketsStack } from './ticketsStack';
import { AccountStack } from './accountStack';
import { DashboardStack } from './dashboardStack';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'DashboardStack'}
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'red'
          }}
        >
          <Tab.Screen
            name="DashboardStack"
            component={DashboardStack}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="movie-open-play-outline"
                  color={color}
                  size={size}
                />
              )
            }}
          />
          <Tab.Screen
            name="SearchStack"
            component={SearchStack}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="movie-search"
                  color={color}
                  size={size}
                />
              )
            }}
          />
          <Tab.Screen
            name="TicketsStack"
            component={TicketsStack}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="ticket-outline"
                  color={color}
                  size={size}
                />
              )
            }}
          />
          <Tab.Screen
            name="AccountStack"
            component={AccountStack}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
