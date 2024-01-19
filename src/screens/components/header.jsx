// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import CustomIcon from './customIcon';
import Colors from '../../constat/Colors'; // Ajusta la ruta según tu estructura
import icons from '../../assets/icons/icons';
const Header = ({navigation, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: Colors.primaryColor,
      }}>
      {/* Logo a la izquierda */}
      <Image
        source={require('../../assets/images/logotr.png-PhotoRoom.png')}
        style={{ width: 90, height: 50}}
      />
      {/* Título en el centro */}
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>

      {/* Icono de notificaciones a la derecha */}
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <CustomIcon iconName={icons.global.home} color={Colors.primaryColor} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
