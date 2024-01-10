import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-native-reanimated-carousel';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from 'react-native-reanimated';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import { RootState } from '../../store';
import { PaginationItem } from './paginationItem';
import { PremiereResponseItem } from '../../services';
import { PremierItemInfo } from './premierItemInfo';

export const PremierCarousel: React.FC = () => {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [height, setHeight] = useState(Dimensions.get('window').height);
  const [current, setCurrent] = useState<PremiereResponseItem | null>(null);
  const { items } = useSelector((state: RootState) => state.premieres);
  const progressValue = useSharedValue(0);
  const premierItemOffset = useSharedValue(0);

  React.useEffect(() => {
    const dimensionsHandler = Dimensions.addEventListener(
      'change',
      ({ window }) => {
        setWidth(window.width);
        setHeight(window.height);
      }
    );

    return () => {
      dimensionsHandler.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        vertical={false}
        width={width}
        height={height / 3}
        style={{ width: width }}
        loop
        pagingEnabled={false}
        autoPlay={false}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) => {
          progressValue.value = absoluteProgress;
          const value = Math.round(absoluteProgress);
          if (value < 0 || value >= items.length) {
            return;
          }

          const next = items && items[value];
          if (current?.kinopoiskId !== next.kinopoiskId) {
            const endValue = 10;
            const duration = 100;
            const easing = Easing.inOut(Easing.ease);

            premierItemOffset.value = withSequence(
              withTiming(-endValue, { duration: duration / 2, easing }),
              withRepeat(withTiming(endValue, { duration, easing }), 2, true),
              withTiming(0, { duration: duration / 2, easing })
            );
            setCurrent(next);
          }
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: width / 1.5
        }}
        data={items}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.posterUrlPreview }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      />
      {!!progressValue && current && (
        <PremierItemInfo item={current} offset={premierItemOffset} />
      )}
      {!!progressValue && (
        <View style={styles.pointsContainer}>
          {items.map((_, index) => {
            return (
              <PaginationItem
                animValue={progressValue}
                index={index}
                key={index}
                length={items.length}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  }
});
