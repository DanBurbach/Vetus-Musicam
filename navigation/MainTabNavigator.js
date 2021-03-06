import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RadioScreen from '../screens/RadioScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle' }
    />
  ),
};
HomeStack.path = '';

const RadioStack = createStackNavigator({
    Radio: RadioScreen,
  },
  config
);
RadioStack.navigationOptions = {
  tabBarLabel: 'Radio',
  tabBarIcon: ({ focused }) => ( 
    <TabBarIcon 
      focused = { focused } 
      name = { Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};
RadioStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);
LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} 
    />
  ),
};
LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};
SettingsStack.path = '';

const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  RadioStack,
  LinksStack,
  SettingsStack,
});

MainTabNavigator.path = '';

export default MainTabNavigator;
