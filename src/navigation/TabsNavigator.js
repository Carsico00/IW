import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import ProfileScreen from '../screens/ProfilesScreen';
import SearchingScreen from '../screens/SearchingScreen';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CustomIcon from '../screens/components/customIcon';
import icons from '../assets/icons/icons';
import Colors from '../constat/Colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarInactiveTintColor: Colors.black, // Normal
        tabBarActiveTintColor: Colors.primaryColor, // Focused
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return (
              <CustomIcon
                size={20}
                color={Colors.primaryColor}
                iconName={focused ? icons.global.homeSolid : icons.global.home}
              />
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return (
              <CustomIcon
                size={20}
                color={Colors.primaryColor}
                iconName={focused ? icons.global.lupaSolid : icons.global.lupa}
              />
            );
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return (
              <CustomIcon
                size={20}
                color={Colors.primaryColor}
                iconName={
                  focused ? icons.global.librosSolid : icons.global.libros
                }
              />
            );
          },
        }}
        name="News"
        component={NewsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return (
              <CustomIcon
                size={20}
                color={Colors.primaryColor}
                iconName={
                  focused ? icons.global.usuariosSolid : icons.global.usuarios
                }
              />
            );
          },
        }}
        name="Looking Around"
        component={SearchingScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
