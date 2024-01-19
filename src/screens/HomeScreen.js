import * as React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Header from './components/header';

const HomeScreen = ({navigation}) => {
  const route = useRoute();

  return (
    <View>
      <Header navigation={navigation} title="Inicio" />
    </View>
  );
};

export default HomeScreen;
