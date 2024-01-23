// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CustomIcon from './customIcon';
import Colors from '../../constat/Colors'; // Ajusta la ruta según tu estructura
import icons from '../../assets/icons/icons';

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Logo a la derecha */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/Logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Título en el centro */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {/* Icono de notificaciones a la derecha */}

      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <CustomIcon size={25} iconName={icons.global.campana} color={Colors.primaryColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    height: 70,
    backgroundColor: Colors.white,
  },
  logoContainer: {
    width:'20%',

  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  titleContainer: {
    textAlign: 'center',
    width:'70%',
    right:'25%',
    alignItems: 'center', // Alinea el texto en el centro
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color:Colors.primaryColor
  },
  iconContainer:{
    width:'10%',
  }
});

export default Header;
