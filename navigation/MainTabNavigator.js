import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import PartsListScreen from '../screens/PartsListScreen';
import ToolsListScreen from '../screens/ToolsListScreen';
import LinksScreen from '../screens/LinksScreen';
import MoreScreen from '../screens/MoreScreen';
import ItemScreen from '../screens/ItemScreen';
import AboutScreen from '../screens/AboutScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});



const PartsListStack = createStackNavigator(
  {
    PartsList: PartsListScreen,
    Item: ItemScreen
  },
  config
);

PartsListStack.navigationOptions = {
  tabBarLabel: 'Parts',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'cog'}/>
  )
};

PartsListStack.path = '';



const ToolsListStack = createStackNavigator(
  {
    ToolsList: ToolsListScreen,
    Item: ItemScreen
  },
  config
);

ToolsListStack.navigationOptions = {
  tabBarLabel: 'Tools',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'wrench'}
    />
  )
};

ToolsListStack.path = '';



const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'heart'} />
  )
};

LinksStack.path = '';



const MoreStack = createStackNavigator(
  {
    More: MoreScreen,
    About: AboutScreen
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ellipsis-h'} />
  ),
};

MoreStack.path = '';

const tabNavigator = createBottomTabNavigator({
  PartsListStack,
  ToolsListStack,
  LinksStack,
  MoreStack
});

tabNavigator.path = '';

export default tabNavigator;
