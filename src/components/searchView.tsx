import { useNavigation, useRoute } from '@react-navigation/native';
import { TabScreenNavigationProp } from 'navigation/types';
import React, { createRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { Searchbar } from 'react-native-paper';

export type SearchViewProps = {
  autoFocus?: boolean;
};

export const SearchView: React.FC<SearchViewProps> = ({
  autoFocus = false
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const ref: React.RefObject<TextInput> = createRef();
  const route = useRoute();
  const navigation = useNavigation<TabScreenNavigationProp>();

  return (
    <Searchbar
      ref={ref}
      placeholder="Search your Movies..."
      onChangeText={setSearchQuery}
      value={searchQuery}
      iconColor={styles.icon.color}
      style={styles.container}
      inputStyle={styles.text}
      placeholderTextColor={styles.placeholder.color}
      autoFocus={autoFocus}
      onFocus={() => {
        if (route.name === 'Dashboard') {
          ref.current?.blur();
          navigation.navigate('SearchStack', { Search: undefined });
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: '#ffffff5f'
  },
  icon: {
    color: '#FF5524f5'
  },
  text: {
    color: 'white'
  },
  placeholder: {
    color: '#ffffff5f'
  }
});
