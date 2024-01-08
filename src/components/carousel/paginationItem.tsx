import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated';

export const PaginationItem: React.FC<{
  index: number;
  length: number;
  animValue: SharedValue<number>;
}> = props => {
  const { animValue, index, length } = props;
  const width = 8;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolation.EXTEND
          )
        }
      ]
    };
  }, [animValue, index, length]);

  return (
    <View style={[styles.container, { width, height: width }]}>
      <Animated.View style={[styles.point, animStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
    transform: [{ rotateZ: '0deg' }]
  },
  point: {
    borderRadius: 50,
    backgroundColor: '#FF5524',
    flex: 1
  }
});
