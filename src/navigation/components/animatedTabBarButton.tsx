import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
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
    const tabChangeAnimating = () => {
      let value = 0;
      switch (currentTab) {
        case `/${TabScreenNames.DashboardStack}`: {
          value = 0;
          break;
        }
        case `/${TabScreenNames.SearchStack}`: {
          value = 1;
          break;
        }
        case `/${TabScreenNames.TicketsStack}`: {
          value = 2;
          break;
        }
        case `/${TabScreenNames.AccountStack}`: {
          value = 3;
          break;
        }
      }

      const width = Dimensions.get('window').width;
      const tabWidth = width / 4;
      offset.value = withSpring(value * tabWidth);
    };

    tabChangeAnimating();

    const dimensionsHandler = Dimensions.addEventListener(
      'change',
      tabChangeAnimating
    );

    return () => {
      dimensionsHandler.remove();
    };
  }, [offset, currentTab]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }]
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
