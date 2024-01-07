import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const TabBarIcon = (name: string, focused: boolean, size: number) => {
  return (
    <MaterialCommunityIcons
      name={name}
      color={focused ? '#FF5524' : 'white'}
      size={size}
    />
  );
};
