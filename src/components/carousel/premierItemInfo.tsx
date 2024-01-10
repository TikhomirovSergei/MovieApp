import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle
} from 'react-native-reanimated';
import { PremiereResponseItem } from 'services';

export const PremierItemInfo: React.FC<{
  item: PremiereResponseItem;
  offset: SharedValue<number>;
}> = ({ item, offset }) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }]
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Text ellipsizeMode="middle" numberOfLines={1} style={styles.title}>
        {item.nameRu}
      </Text>
      <View style={styles.genresView}>
        <ScrollView horizontal contentContainerStyle={styles.genresScrollView}>
          {item.genres.map(genres => (
            <Text style={styles.genre}>{genres.genre}</Text>
          ))}
        </ScrollView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  genresView: {
    height: 76,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  genresScrollView: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  genre: {
    marginTop: 16,
    marginBottom: 24,
    marginHorizontal: 4,
    color: 'white',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    padding: 6
  }
});
