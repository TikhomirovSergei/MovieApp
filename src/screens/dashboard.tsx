import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme
} from 'react-native';
import { useSelector } from 'react-redux';
import { Month, getPremieres } from '../services';
import { RootState, useAppDispatch } from '../store';

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { total, items, loading } = useSelector(
    (state: RootState) => state.premieres
  );

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
      <View style={styles.container} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
});
