import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {Provider} from 'react-redux';
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
      navigationOptions: {tabBarIcon: ({ focused }) => <Image resizeMode='contain' style={{width: 40, height: 40}} 
        source={focused ? 
          require('./content/images/ic_home_white.png') 
          :
          require('./content/images/ic_home_gray.png') }/>}},
    History: {
      screen: HistoryContainer, 
      navigationOptions: {tabBarIcon: ({ focused }) => <Image resizeMode='contain' style={{width: 40, height: 40}} 
        source={focused ? 
          require('./content/images/ic_home_white.png') 
          :
          require('./content/images/ic_home_gray.png') }/>}},
    WorkAndBalance: {
      screen: CardsContainer,
      navigationOptions: {tabBarIcon: ({ focused }) => <Image resizeMode='contain' style={{width: 40, height: 40}} 
        source={focused ? 
          require('./content/images/ic_home_white.png') 
          :
          require('./content/images/ic_home_gray.png') }/>}},
    Profile: {
      screen: ProfileContainer,
      navigationOptions: {tabBarIcon: ({ focused }) => <Image resizeMode='contain' style={{width: 40, height: 40}} 
        source={focused ? 
          require('./content/images/ic_home_white.png') 
          :
          require('./content/images/ic_home_gray.png') }/>}}
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