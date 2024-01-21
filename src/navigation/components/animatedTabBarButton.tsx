import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { TabBarButton } from './tabBarButton';

export const AnimatedTabBarButton = (
  props: BottomTabBarButtonProps,
  currentTab: number
) => {
  const offset = useSharedValue(0);

  React.useEffect(() => {
    const tabChangeAnimating = () => {
      const width = Dimensions.get('window').width;
      const tabWidth = width / 4;
      offset.value = withSpring(currentTab * tabWidth);
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
    <View style={styles.container}>{TabBarButton(props, animatedStyles)}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 999
  }
});
