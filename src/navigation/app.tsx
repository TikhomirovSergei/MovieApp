import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { store } from '../store';

import { SearchStack } from './searchStack';
import { TicketsStack } from './ticketsStack';
import { AccountStack } from './accountStack';
import { DashboardStack } from './dashboardStack';
import { TabScreenNames } from './types';
import { TabBarButton, AnimatedTabBarButton, TabBarIcon } from './components';

const Tab = createBottomTabNavigator();

function App() {
  const [currentTab, setCurrentTab] = React.useState(
    `/${TabScreenNames.DashboardStack}`
  );

  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
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
                tabBarIcon: ({ focused, size }) =>
                  TabBarIcon('movie-open-play-outline', focused, size),
                tabBarButton: props =>
                  AnimatedTabBarButton(props, currentTab, setCurrentTab)
              }}
            />
            <Tab.Screen
              name={TabScreenNames.SearchStack}
              component={SearchStack}
              options={{
                tabBarIcon: ({ focused, size }) =>
                  TabBarIcon('movie-search', focused, size),
                tabBarButton: props => TabBarButton(props, setCurrentTab)
              }}
            />
            <Tab.Screen
              name={TabScreenNames.TicketsStack}
              component={TicketsStack}
              options={{
                tabBarIcon: ({ focused, size }) =>
                  TabBarIcon('ticket-outline', focused, size),
                tabBarButton: props => TabBarButton(props, setCurrentTab)
              }}
            />
            <Tab.Screen
              name={TabScreenNames.AccountStack}
              component={AccountStack}
              options={{
                tabBarIcon: ({ focused, size }) =>
                  TabBarIcon('account', focused, size),
                tabBarButton: props => TabBarButton(props, setCurrentTab)
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}

export default App;
