import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/Header'; 

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({navigation}) => (
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
      name="About" 
      component={About} 
      options={{
        headerStyle:{
        height: 100
      },  
        headerTitle: () => <Header navigation={navigation} />,
      }} 
    />
  </Navigator>
);

export default AboutStack;