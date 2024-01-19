// CustomIcon.js
import React from 'react';
import { Image } from 'react-native';

const CustomIcon = ({ iconName, color, size }) => {

  return (
    <Image
      source={iconName}
      style={{tintColor: color, width: size, height: size}}
    />
  );
};

export default CustomIcon;
