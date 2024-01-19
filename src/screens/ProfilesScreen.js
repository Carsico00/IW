import * as React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProfileScreen = () => {
  const route = useRoute();

  return (
    <View>
      <Text>hOME screen</Text>
      {/* The rest of your HomeScreen component */}
    </View>
  );
};

export default ProfileScreen;
