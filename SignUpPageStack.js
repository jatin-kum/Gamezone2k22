import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/Header'; 
import SignUpPage from '../screens/SignUpPage'
const { Navigator, Screen } = createStackNavigator();

export const SignUpPageStack = ({navigation}) => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
      height: 60
    }}
  >
    <Screen
      name="Set up Harvest Account" 
      component={SignUpPage} 
      options={{
        headerStyle:{
        height: 100
      },  
        headerTitle: () => <Header navigation={navigation} />,
      }} 
    />
  </Navigator>
);

export default SignUpPageStack;