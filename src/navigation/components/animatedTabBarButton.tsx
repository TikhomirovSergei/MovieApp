import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { TabScreenNames } from '../types';
import { TabBarButton } from './tabBarButton';

export const AnimatedTabBarButton = (
  props: BottomTabBarButtonProps,
  currentTab: string,
  setCurrentTab: (value: string) => void
) => {
  const offset = useSharedValue(0);

  React.useEffect(() => {
    switch (currentTab) {
      case `/${TabScreenNames.DashboardStack}`: {
        offset.value = withSpring(0);
        break;
      }
      case `/${TabScreenNames.SearchStack}`: {
        offset.value = withSpring(1);
        break;
      }
      case `/${TabScreenNames.TicketsStack}`: {
        offset.value = withSpring(2);
        break;
      }
      case `/${TabScreenNames.AccountStack}`: {
        offset.value = withSpring(3);
        break;
      }
    }
  }, [offset, currentTab]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }]
    };
  });

  return (
    <View style={styles.container}>
      {TabBarButton(props, setCurrentTab, animatedStyles)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 999
  }
});
