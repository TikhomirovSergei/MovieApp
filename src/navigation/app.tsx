import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { store } from '../store';

import { SearchStack } from './searchStack';
import { TicketsStack } from './ticketsStack';
import { AccountStack } from './accountStack';
import { DashboardStack } from './dashboardStack';

import { TabBarButton, AnimatedTabBarButton, TabBarIcon } from './components';

const Tab = createBottomTabNavigator();

function App() {
  const [currentTab, setCurrentTab] = React.useState(0);

  const navigationRef = useNavigationContainerRef();
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <ReduxProvider store={store}>
          <PaperProvider>
            <NavigationContainer
              theme={DarkTheme}
              ref={navigationRef}
              onReady={() => {
                // TODO: hidden splash screen
              }}
              // linking={linking}
              onStateChange={state => setCurrentTab(state?.index ?? 0)}
            >
              <Tab.Navigator
                initialRouteName={'DashboardStack'}
                screenOptions={{
                  headerShown: false,
                  tabBarLabel: ''
                }}
              >
                <Tab.Screen
                  name={'DashboardStack'}
                  component={DashboardStack}
                  options={{
                    tabBarIcon: ({ focused, size }) =>
                      TabBarIcon('movie-open-play-outline', focused, size),
                    tabBarButton: props =>
                      AnimatedTabBarButton(props, currentTab)
                  }}
                />
                <Tab.Screen
                  name={'SearchStack'}
                  component={SearchStack}
                  options={{
                    tabBarIcon: ({ focused, size }) =>
                      TabBarIcon('movie-search', focused, size),
                    tabBarButton: props => TabBarButton(props)
                  }}
                />
                <Tab.Screen
                  name={'TicketsStack'}
                  component={TicketsStack}
                  options={{
                    tabBarIcon: ({ focused, size }) =>
                      TabBarIcon('ticket-outline', focused, size),
                    tabBarButton: props => TabBarButton(props)
                  }}
                />
                <Tab.Screen
                  name={'AccountStack'}
                  component={AccountStack}
                  options={{
                    tabBarIcon: ({ focused, size }) =>
                      TabBarIcon('account', focused, size),
                    tabBarButton: props => TabBarButton(props)
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </ReduxProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
