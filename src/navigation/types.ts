import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TabScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabScreens, 'DashboardStack'>,
  NativeStackNavigationProp<{}>
>;

export type TabScreens = {
  DashboardStack: {
    Dashboard: undefined;
  };
  SearchStack: {
    Search: undefined;
  };
  TicketsStack: {
    Tickets: undefined;
  };
  AccountStack: {
    Account: undefined;
  };
};
