import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import { RootState } from '../../store';
import { PaginationItem } from './paginationItem';

export const PremierCarousel: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.premieres);

  const PAGE_WIDTH = Dimensions.get('window').width;
  const progressValue = useSharedValue<number>(0);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: 500
  } as const;

  return (
    <View style={styles.container}>
      <Carousel
        {...baseOptions}
        style={{
          width: PAGE_WIDTH
        }}
        loop
        pagingEnabled={false}
        snapEnabled={true}
        autoPlay={true}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 500
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
    width: '20%',
    alignSelf: 'center'
  }
});
