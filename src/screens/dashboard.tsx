import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native';

import { useAppDispatch } from '../store';
import { Month, getPremieres } from '../services';
import { PremierCarousel } from '../components';

export const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPremieres({ year: 2023, month: Month.JANUARY }));
  }, [dispatch]);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.container.backgroundColor}
      />
      <PremierCarousel />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
});
