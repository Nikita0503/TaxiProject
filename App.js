import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {Provider} from 'react-redux';
import { Icon } from 'react-native-elements';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginContainer from './screens/login/LoginContainer';
import SignUpContainer from './screens/signUp/SignUpContainer';
import HomeContainer from './screens/menu/home/HomeContainer';
import ProfileContainer from './screens/menu/profile/ProfileContainer';
import CardsContainer from './screens/menu/cards/CardsContainer';
import HistoryContainer from './screens/menu/history/HistoryContainer';

const Login = createStackNavigator({
  Login: {screen: LoginContainer, navigationOptions: {header: null}},
  SignUp: {screen : SignUpContainer,  navigationOptions: {header: null}}
});

const Menu = createBottomTabNavigator(
  {
    Home: {
      screen: HomeContainer, 
      navigationOptions: {tabBarIcon: ({ focused }) => 
      <Icon 
        size={35}
        name="map"
        color={focused ? 'white' : "gray"}
        type="foundation"
      />}},
    History: {
      screen: HistoryContainer, 
      navigationOptions: {tabBarIcon: ({ focused }) => 
      <Icon 
        size={35}
        name="history"
        color={focused ? 'white' : "gray"}
        type="font-awesome"
      />}},
    WorkAndBalance: {
      screen: CardsContainer,
      navigationOptions: {tabBarIcon: ({ focused }) => 
      <Icon 
        size={35}
        name="cc-mastercard"
        color={focused ? 'white' : "gray"}
        type="font-awesome"
      />}},
    Profile: {
      screen: ProfileContainer,
      navigationOptions: {tabBarIcon: ({ focused }) => 
      <Icon 
        size={35}
        name="profile"
        color={focused ? 'white' : "gray"}
        type="ant-design"
      />}}
  }, 
  {
  tabBarOptions: {
    showLabel: false,
    activeBackgroundColor: '#002B2B',
    inactiveBackgroundColor: '#002B2B',
    activeTintColor: 'white'
  }
})

const AppNavigator = createSwitchNavigator({
  Login: {screen: Login},
  Menu: {screen: Menu}
});

let Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Navigation />
      </Provider>
    );
  }
}