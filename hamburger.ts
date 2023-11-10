import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HamburgerIcon = () => {
  return (
    <View>
      <Icon name="bars" size={30} color="black" />
    </View>
  );
};

export default HamburgerIcon;