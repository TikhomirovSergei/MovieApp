import * as React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import Animated from 'react-native-reanimated';

export const TabBarButton = (
  props: BottomTabBarButtonProps,
  setCurrentTab: (value: string) => void,
  animatedStyles?: StyleProp<ViewStyle>
) => {
  const onPressHandler = (event: GestureResponderEvent) => {
    if (props.onPress) {
      props.onPress(event);
      props.to && setCurrentTab(props.to);
    }
  };

  return (
    <View {...props} style={styles.container}>
      <TouchableOpacity
        {...props}
        style={styles.container}
        onPress={onPressHandler}
      />
      {animatedStyles ? (
        <Animated.View
          style={[styles.view, styles.animatedView, animatedStyles]}
        />
      ) : (
        <View style={styles.view} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    zIndex: -1
  },
  view: {
    width: '100%',
    height: 4,
    justifyContent: 'center'
  },
  animatedView: {
    backgroundColor: '#FF5524',
    zIndex: 999
  }
});
