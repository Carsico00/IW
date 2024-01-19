import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from "../screens/NewsScreen";
import ProfileScreen from "../screens/ProfilesScreen";
import SearchingScreen from '../screens/SearchingScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Looking Around" component={SearchingScreen} />

    </Tab.Navigator>
  );
};

export default AppNavigator;
