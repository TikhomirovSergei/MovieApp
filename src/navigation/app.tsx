import * as React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { SearchStack } from './searchStack';
import { TicketsStack } from './ticketsStack';
import { AccountStack } from './accountStack';
import { DashboardStack } from './dashboardStack';
import { TabScreenNames } from './types';
import { TabBarButton, AnimatedTabBarButton } from './components';

const Tab = createBottomTabNavigator();

function App() {
  const [currentTab, setCurrentTab] = React.useState(
    `/${TabScreenNames.DashboardStack}`
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator
          initialRouteName={'DashboardStack'}
          screenOptions={{
            headerShown: false,
            tabBarLabel: ''
          }}
        >
          <Tab.Screen
            name={TabScreenNames.DashboardStack}
            component={DashboardStack}
            options={{
              tabBarIcon: ({ size }) => (
                <MaterialCommunityIcons
                  name="movie-open-play-outline"
                  color={'white'}
                  size={size}
                />
              ),
              tabBarButton: props =>
                AnimatedTabBarButton(props, currentTab, setCurrentTab)
            }}
          />
          <Tab.Screen
            name={TabScreenNames.SearchStack}
            component={SearchStack}
            options={{
              tabBarIcon: ({ size }) => (
                <MaterialCommunityIcons
                  name="movie-search"
                  color={'white'}
                  size={size}
                />
              ),
              tabBarButton: props => TabBarButton(props, setCurrentTab)
            }}
          />
          <Tab.Screen
            name={TabScreenNames.TicketsStack}
            component={TicketsStack}
            options={{
              tabBarIcon: ({ size }) => (
                <MaterialCommunityIcons
                  name="ticket-outline"
                  color={'white'}
                  size={size}
                />
              ),
              tabBarButton: props => TabBarButton(props, setCurrentTab)
            }}
          />
          <Tab.Screen
            name={TabScreenNames.AccountStack}
            component={AccountStack}
            options={{
              tabBarIcon: ({ size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={'white'}
                  size={size}
                />
              ),
              tabBarButton: props => TabBarButton(props, setCurrentTab)
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
