import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/SignUpPage';
import Header from '../shared/Header'; 
import SignUpPageStack from './SignUpPageStack';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({navigation}) => (
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
      name="Home" 
      component={Home} 
      options={{
        //  the navigation is passed to the function and when we have the navigation object then it can be used as a prop
        headerStyle:{
        height: 100
      },  
        headerTitle: () => <Header navigation={navigation} />,
        //  title return a string so we change it to other function as header title here navigation is passed as a prop
      }} 
    />
    <Screen
      name='SignUpPage'
      component={SignUpPageStack}
      options={{ 
        headerTitle: 'Sign Up For Harvest' 
      }}
    />
  </Navigator>
);

export default HomeStack;